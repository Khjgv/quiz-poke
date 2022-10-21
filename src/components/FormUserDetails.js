import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function FormUserDetails({ formData, setFormData }) {

  return (
    <div>
      <Box sx={{ flexGrow: 1, t: 10 }}>
        <TextField
          margin="normal"
          label="First Name"
          variant="filled"
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        />
        <br />
        <TextField
          margin="normal"
          label="Last Name"
          variant="filled"
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        />
        <br />
        <TextField
          margin="normal"
          label="Email"
          variant="filled"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <br />
        <TextField
          margin="normal"
          label="Height (cm)"
          variant="filled"
          value={formData.height}
          onChange={(event) =>
            setFormData({ ...formData, height: event.target.value })
          }
        />
        <br />
        <FormControl sx={{ m: 1, minWidth: 190 }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            value={formData.gender}
            label="Gender"
            onChange={(event) =>
              setFormData({ ...formData, gender: event.target.value })
            }
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default FormUserDetails;
