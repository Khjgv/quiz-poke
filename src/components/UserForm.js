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


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function UserForm() {
  const [page, setPage] = useState(0);

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
              <Button color="inherit">Login</Button>
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
              console.log(formData);  
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
              setPage((currPage) => currPage + 1);
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
