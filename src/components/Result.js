import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

function Result({ pokemon, setPokemon }) {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Success
        </Alert>
      </Collapse>
      <div className="picture">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img}/>
        <h3>Species: {pokemon.species}</h3>
        <h3>Primary Type: {pokemon.type}</h3>
      </div>
    </div>
  );
}

export default Result;
