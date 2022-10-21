import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Home() {
  return (
    <Box>
      <Box sx={{ flexGrow: 1, t: 10, width: 300, height: 25 }}></Box>
      <img src="QuizPokemon.png" />
      <Stack alignItems="center">
        <Box sx={{ m: 1, width: 400 }}>
          <Typography
            align="justify"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Welcome to Quiz-Pokémon! This web-app lets you to find your destined
            Pokemon by answering some questions about yourself~!
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ flexGrow: 1, t: 10, width: 300, height: 25 }}></Box>
      <div>
        <img src="blastoisePic.png" />
      </div>
      <Box sx={{ width: 300, height: 25 }} />
      <Box sx={{ m: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Press NEXT to begin!
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
