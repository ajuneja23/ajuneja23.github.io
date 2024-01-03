/** @format */

import React from "react";
import "./Single.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Single(props) {
  return (
    <div className="Single">
      <Card
        sx={{
          maxWidth: 500,
          minHeight: 500,
          maxHeight: 500,
          backgroundColor: props.backColor,
          color: props.secondColor,
          boxShadow: " -3px 0 5px 2px rgba(0, 0, 0, 0.3);",
        }}
        className="dispcard"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={props.dispimg}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ fontFamily: "Montserrat" }}
              component="div"
            >
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              color={props.secondColor}
              sx={{ fontFamily: "Georgia" }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Single;
