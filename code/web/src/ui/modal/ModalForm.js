import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "../icon";
import { black, grey, grey2 } from "../common/colors";
// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

// export default function DatePickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="date"
//         label="Birthday"
//         type="date"
//         defaultValue="2017-05-24"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }

export default function ModalForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [deliveryDate, setDeliveryDate] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChange = (event) => {
    setDeliveryDate(event.target.value);
    console.log(deliveryDate);
  };

  const onSubmit = () => {
    console.log("modal submit");
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        <Icon size={2} style={{ color: black }}>
          mode_edit
        </Icon>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Delivery Date</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select Your Desired Delivery Date
          </DialogContentText>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Delivery Date"
              type="date"
              name="deliveryDate"
              defaultValue="2017-05-24"
              // value=""
              onChange={onChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          {/* <TextField
            autoFocus
            margin="dense"
            id="deliveryDate"
            label="MM/DD/YYYY"
            type="deliveryDate"
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onSubmit={onSubmit} onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
