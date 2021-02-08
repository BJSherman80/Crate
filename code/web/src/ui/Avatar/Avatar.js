// Imports
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: "#e5673f",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const LetterAvatar = (props) => {
  const { name } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.orange}>{name[0]}</Avatar>
    </div>
  );
};

export default LetterAvatar;
