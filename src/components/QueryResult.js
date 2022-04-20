import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Alert severity="error">ERROR: {error.message}</Alert>
      </Box>
    );
  }
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (!data) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Alert severity="info">Nothing to show...</Alert>
      </Box>
    );
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
