import React, { useState } from "react";
import QuestionSetOne from "./QuestionSetOne";
import QuestionSetTwo from "./QuestionSetTwo";
import FormUserDetails from "./FormUserDetails";
import Home from "./Home";
import Result from "./Result";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Axios from "axios";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function UserForm() {
  const [page, setPage] = useState(0);

  var numID = "";

  var pokemonType = "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    height: 0,
    gender: "",
    favColour: "",
    favSeason: "",
    favWeather: "",
    favSport: "",
    favActivity: "",
    favFood: "",
    favTransport: "",
    sleepTime: 0,
  });

  const FormTitles = [
    "Home",
    "Personal Info",
    "Questions Set One",
    "Questions Set Two",
    "Result",
  ];

  const PageDisplay = () => {
    if (page == 0) {
      return <Home />;
    } else if (page == 1) {
      return <FormUserDetails formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
      return <QuestionSetOne formData={formData} setFormData={setFormData} />;
    } else if (page == 3) {
      return <QuestionSetTwo formData={formData} setFormData={setFormData} />;
    } else if (page == 4) {
      return <Result formData={formData} setFormData={setFormData} />;
    }
  };

  function generateNum() {
    // var input = formData.height + formData.sleepTime;
    numID = Math.floor(Math.random() * numID);
  }

  function findType() {
    if (formData.favColour == "red") {
      if (formData.favTransport == "ship" || formData.favTransport == "plane") {
        pokemonType = "psychic";
      } else if (
        formData.favTransport == "car" ||
        formData.favTransport == "train"
      ) {
        pokemonType = "fire";
      } else {
        pokemonType = "fairy";
      }
    } else if (formData.favColour == "orange") {
      if (formData.favTransport == "ship" || formData.favTransport == "plane") {
        pokemonType = "fighting";
      } else if (
        formData.favTransport == "car" ||
        formData.favTransport == "train"
      ) {
        pokemonType = "ground";
      } else {
        pokemonType = "rock";
      }
    } else if (formData.favColour == "yellow") {
      pokemonType = "electric";
    } else if (formData.favColour == "green") {
      if (
        formData.favTransport == "ship" ||
        formData.favTransport == "plane" ||
        formData.favTransport == "train" ||
        formData.favTransport == "car"
      ) {
        pokemonType = "bug";
      } else {
        pokemonType = "grass";
      }
    } else if (formData.favColour == "blue") {
      if (
        formData.favTransport == "ship" ||
        formData.favTransport == "plane" ||
        formData.favTransport == "train" ||
        formData.favTransport == "car"
      ) {
        pokemonType = "ice";
      } else {
        pokemonType = "water";
      }
    } else if (formData.favColour == "purple") {
      if (formData.favTransport == "ship" || formData.favTransport == "plane") {
        pokemonType = "dragon";
      } else if (
        formData.favTransport == "car" ||
        formData.favTransport == "train"
      ) {
        pokemonType = "poison";
      } else {
        pokemonType = "ghost";
      }
    } else if (formData.favColour == "black") {
      pokemonType = "dark";
    } else if (formData.favColour == "white") {
      pokemonType = "normal";
    } else if (formData.favColour == "gray") {
      if (
        formData.favTransport == "ship" ||
        formData.favTransport == "plane" ||
        formData.favTransport == "train" ||
        formData.favTransport == "car"
      ) {
        pokemonType = "flying";
      } else {
        pokemonType = "steel";
      }
    }
  }

  const searchType = () => {
    Axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`).then(
      (response) => {
        console.log(response);
      }
    );
  };

  return (
    <div className="form">
      <div className="appBar">
        <Box sx={{ flexGrow: 1, t: 10 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2 }}
                onClick={() => {
                  setPage((currPage) => 0);
                }}
              >
                <HomeIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {FormTitles[page]}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
        <Box sx={{ "& button": { m: 1 } }}>
          <Button
            disabled={page == 0 || page == FormTitles.length - 1}
            type="button"
            variant="contained"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </Button>
          <Button
            disabled={page == FormTitles.length - 1}
            type="button"
            variant="contained"
            onClick={() => {
              if (page === FormTitles.length - 2) {
                console.log(formData);
                findType();
                searchType();
                setPage((currPage) => currPage + 1);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 2 ? "Submit" : "Next"}
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default UserForm;
