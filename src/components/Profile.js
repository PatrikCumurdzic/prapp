import React from "react";
import Card from "@mui/material/Card";
import CakeIcon from "@mui/icons-material/Cake";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import WcIcon from "@mui/icons-material/Wc";
import PersonIcon from "@mui/icons-material/Person";

function Profile() {
  return (
    <div className="profile">
      <div className="topProfile">
        <Card
          className="profileCard"
          sx={{
            borderRadius: 3,
            minWidth: 540,
            minHeight: 240,
            bgcolor: "#fcfcfc",
          }}
        >
          <div className="profilePicture"></div>
          <p className="profileName">Patrik Ćumurdžić</p>
        </Card>

        <Card
          className="profileInfo"
          sx={{
            borderRadius: 3,
            minWidth: 250,
            minHeight: 240,
            bgcolor: "#fcfcfc",
          }}
        >
          <div className="infoContent">
            <p>
              <CakeIcon className="icon"></CakeIcon>Age:
            </p>
            <p>
              <HeightIcon className="icon"></HeightIcon>Height:
            </p>
            <p>
              <ScaleIcon className="icon"></ScaleIcon>Weight:
            </p>
            <p>
              <WcIcon className="icon"></WcIcon>Gender:
            </p>
          </div>
          <div className="infoContent data">
            <p>23</p>
            <p>178cm</p>
            <p>80kg</p>
            <p>Male</p>
          </div>
        </Card>
      </div>

      <Card
        className="profileAbout"
        sx={{
          borderRadius: 3,
          minWidth: 890,
          minHeight: 240,
          bgcolor: "#fcfcfc",
        }}
      >
        <p className="aboutInfo">
          <PersonIcon className="icon"></PersonIcon> Info:
        </p>
        <p className="userInformation">BlaBla</p>
      </Card>
    </div>
  );
}

export default Profile;
