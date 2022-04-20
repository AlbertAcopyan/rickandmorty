import { gql } from "@apollo/client";

export const TRACKS = gql`
  query Characters {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        image
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;
