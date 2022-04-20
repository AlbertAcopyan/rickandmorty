import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Filter = () => {
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

  const params = {};

  useEffect(() => {
    if (status) params.status = status;
    if (gender) params.gender = gender;
    if (type) params.type = type;
    if (species) params.species = species;

    setSearchParams(params);
  }, [status, gender, type, species]);

  const handleStatus = (event) => {
    event.preventDefault();
    setStatus(event.target.value);
  };

  const handleGender = (event) => {
    event.preventDefault();
    setGender(event.target.value);
  };

  const handleSpecies = (event) => {
    event.preventDefault();
    setSpecies(event.target.value);
  };

  const handleType = (event) => {
    event.preventDefault();
    setType(event.target.value);
  };

  const handleReset = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setType("");
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        padding: 10,
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ maxWidth: 130, width: "100%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleStatus}
          >
            <MenuItem value={"Alive"}>Alive</MenuItem>
            <MenuItem value={"Dead"}>Dead</MenuItem>
            <MenuItem value={"unknown"}>unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ maxWidth: 130, width: "100%" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Status"
            onChange={handleGender}
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Genderless"}>Genderless</MenuItem>
            <MenuItem value={"unknown"}>unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          maxWidth: 400,
          display: "flex",
          width: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          placeholder="Species"
          value={species}
          onChange={handleSpecies}
          sx={{
            marginRight: "20px",
          }}
        />
        <Input placeholder="Type" value={type} onChange={handleType} />
      </Box>
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
};

export default Filter;
