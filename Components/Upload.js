import * as React from "react";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import LinearProgress from "@mui/material/LinearProgress";

function Upload() {
  return (
    <div className="upload-btn">
      <Button
        color="secondary"
        variant="outlined"
        component="label"
        size="large"
      >
        <MovieIcon />
        Upload Media
        <input hidden accept="*" multiple type="file" />
      </Button>
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={80}
        sx={{ mt: ".5rem",mb: ".5rem" }}
      />
    </div>
  );
}

export default Upload;
