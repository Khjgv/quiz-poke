import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from '@mui/material/FormHelperText';


function QuestionSetTwo({ formData, setFormData }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1, t: 10, width: 300, height: 10 }}></Box>
      <Box sx={{ flexGrow: 1, t: 10 }}>
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Activity</InputLabel>
          <Select
            value={formData.favActivity}
            label="Activity"
            onChange={(event) =>
              setFormData({ ...formData, favActivity: event.target.value })
            }
          >
            <MenuItem value={"read"}>Reading</MenuItem>
            <MenuItem value={"cook"}>Cooking</MenuItem>
            <MenuItem value={"train"}>Training</MenuItem>
            <MenuItem value={"learn"}>Learning</MenuItem>
            <MenuItem value={"sleep"}>Sleeping</MenuItem>
            <MenuItem value={"eat"}>Eating</MenuItem>
            <MenuItem value={"play"}>Playing</MenuItem>
            <MenuItem value={"talk"}>Talking</MenuItem>
          </Select>
          <FormHelperText>Favourite Activity?</FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Food</InputLabel>
          <Select
            value={formData.favFood}
            label="Food"
            onChange={(event) =>
              setFormData({ ...formData, favFood: event.target.value })
            }
          >
            <MenuItem value={"meat"}>Meat</MenuItem>
            <MenuItem value={"dairy"}>Dairy</MenuItem>
            <MenuItem value={"vegetable"}>Vegetables</MenuItem>
            <MenuItem value={"fruit"}>Fruits</MenuItem>
            <MenuItem value={"grain"}>Grains</MenuItem>
            <MenuItem value={"desert"}>Desert</MenuItem>
            <MenuItem value={"drinks"}>Drinks</MenuItem>
          </Select>
          <FormHelperText>Favourite Food?</FormHelperText>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Transport</InputLabel>
          <Select
            value={formData.favTransport}
            label="Transport"
            onChange={(event) =>
              setFormData({ ...formData, favTransport: event.target.value })
            }
          >
            <MenuItem value={"bike"}>Bike</MenuItem>
            <MenuItem value={"walk"}>Walk</MenuItem>
            <MenuItem value={"jog"}>Jog</MenuItem>
            <MenuItem value={"car"}>Car</MenuItem>
            <MenuItem value={"train"}>Train</MenuItem>
            <MenuItem value={"plane"}>Plane</MenuItem>
            <MenuItem value={"ship"}>Ship</MenuItem>
          </Select>
          <FormHelperText>Favourite Transport Mode?</FormHelperText>
        </FormControl>
        <br />
        <TextField
          margin="normal"
          label="Sleep Duration (hr)"
          variant="filled"
          value={formData.sleepTime}
          onChange={(event) =>
            setFormData({ ...formData, sleepTime: event.target.value })
          }
        />
        <br />
      </Box>
    </div>
  );
}

export default QuestionSetTwo;
