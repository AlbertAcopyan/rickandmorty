import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import QueryResult from "../components/QueryResult";
import { TRACKS } from "../requests";
import { ExpandMore } from "../helpers";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Сharacters = () => {
  const { loading, error, data } = useQuery(TRACKS);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [expanded, setExpanded] = useState(-1);

  const status = searchParams.get("status");
  const gender = searchParams.get("gender");
  const species = searchParams.get("species");
  const type = searchParams.get("type");

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  const filterCharacters = (statusChar, genderChar, speciesChar, typeChar) => {
    return (
      (status ? statusChar === status : statusChar) &&
      (gender ? genderChar === gender : genderChar) &&
      (species ? speciesChar === species : speciesChar) &&
      (type ? typeChar === type : typeChar ? typeChar : typeChar === "")
    );
  };

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Box
        sx={{
          display: "flex",
          maxWidth: 1200,
          flexWrap: "wrap",
          margin: "0 auto",
          padding: "0 20px",
          justifyContent: "space-between",
        }}
      >
        {data?.characters?.results
          ?.filter((character) =>
            filterCharacters(
              character.status,
              character.gender,
              character.species,
              character.type
            )
          )
          .map((character, index) => (
            <Card
              sx={{
                width: 345,
                marginBottom: "20px",
                height: expanded === index ? "auto" : "540px",
              }}
              key={index}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={character.image}
                  alt="Character"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                  </Typography>
                  <Box variant="body2" color="text.secondary">
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Species: {character.species}</p>
                    <p>Type: {character.type}</p>
                    <p>Location: {character.location.name}</p>
                    <ExpandMore
                      expand={expanded}
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={expanded === index}
                      aria-label="show more"
                      sx={{
                        transform:
                          expanded !== -1 && index === expanded
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse
                      in={expanded === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent>
                        <Typography paragraph>Episodes:</Typography>
                        <ul>
                          <Typography paragraph>
                            {character.episode.map((ep) => (
                              <li key={ep.id}>{ep.name}</li>
                            ))}
                          </Typography>
                        </ul>
                      </CardContent>
                    </Collapse>
                  </Box>
                </CardContent>
              </Card>
            </Card>
          ))}
      </Box>
    </QueryResult>
  );
};

export default Сharacters;
