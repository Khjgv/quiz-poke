import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from '@mui/material/FormHelperText';

function QuestionSetOne({ formData, setFormData }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1, t: 10, width: 300, height: 10 }}></Box>
      <Box sx={{ flexGrow: 1, t: 10 }}>
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Colour</InputLabel>
          <Select
            value={formData.favColour}
            label="Colour"
            onChange={(event) =>
              setFormData({ ...formData, favColour: event.target.value })
            }
          >
            <MenuItem value={"red"}>Red</MenuItem>
            <MenuItem value={"orange"}>Orange</MenuItem>
            <MenuItem value={"yellow"}>Yellow</MenuItem>
            <MenuItem value={"green"}>Green</MenuItem>
            <MenuItem value={"blue"}>Blue</MenuItem>
            <MenuItem value={"purple"}>Purple</MenuItem>
            <MenuItem value={"black"}>Black</MenuItem>
            <MenuItem value={"white"}>White</MenuItem>
            <MenuItem value={"gray"}>Gray</MenuItem>
          </Select>
          <FormHelperText>Favourite Colour?</FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            value={formData.favSeason}
            label="Season"
            onChange={(event) =>
              setFormData({ ...formData, favSeason: event.target.value })
            }
          >
            <MenuItem value={"spring"}>Spring</MenuItem>
            <MenuItem value={"summer"}>Summer</MenuItem>
            <MenuItem value={"winter"}>Winter</MenuItem>
            <MenuItem value={"fall"}>Fall</MenuItem>
          </Select>
          <FormHelperText>Favourite Season?</FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Weather</InputLabel>
          <Select
            value={formData.favWeather}
            label="Weather"
            onChange={(event) =>
              setFormData({ ...formData, favWeather: event.target.value })
            }
          >
            <MenuItem value={"rain"}>Rainy</MenuItem>
            <MenuItem value={"sun"}>Sunny</MenuItem>
            <MenuItem value={"hail"}>Hail</MenuItem>
            <MenuItem value={"snow"}>Snowy</MenuItem>
            <MenuItem value={"ice"}>Ice Rain</MenuItem>
            <MenuItem value={"cloud"}>Cloudy</MenuItem>
            <MenuItem value={"wind"}>Windy</MenuItem>
            <MenuItem value={"clear"}>Clear</MenuItem>
          </Select>
          <FormHelperText>Favourite Weather?</FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Sport</InputLabel>
          <Select
            value={formData.favSport}
            label="Sport"
            onChange={(event) =>
              setFormData({ ...formData, favSport: event.target.value })
            }
          >
            <MenuItem value={"basketball"}>Basketball</MenuItem>
            <MenuItem value={"soccer"}>Soccer</MenuItem>
            <MenuItem value={"football"}>Football</MenuItem>
            <MenuItem value={"volleyball"}>Volleyball</MenuItem>
            <MenuItem value={"hockey"}>Hockey</MenuItem>
            <MenuItem value={"badminton"}>Badminton</MenuItem>
            <MenuItem value={"pingpong"}>Ping Pong</MenuItem>
            <MenuItem value={"tennis"}>Tennis</MenuItem>
            <MenuItem value={"track"}>Track and Field</MenuItem>
            <MenuItem value={"lift"}>Power Lifting</MenuItem>
            <MenuItem value={"swim"}>Swimming</MenuItem>
          </Select>
          <FormHelperText>Favourite Sport?</FormHelperText>
        </FormControl>
        <br />
      </Box>
    </div>
  );
}

export default QuestionSetOne;
