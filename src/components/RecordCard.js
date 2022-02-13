import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const RecordCard = () => {
  return (
    <div>
      <Card
        className="recordCard"
        sx={{ borderRadius: 3, minWidth: 330, minHeight: 200 }}
      >
        <CardContent
          className="topCard"
          sx={{
            height: 117,
          }}
        >
          <Typography variant="h5" component="div">
            Pushups
          </Typography>
          <Typography variant="h2" align="center">
            25
          </Typography>
        </CardContent>
        <div className="bottomCard">
          <button className="historyButton">History</button>
        </div>
      </Card>
    </div>
  );
};

export default RecordCard;
