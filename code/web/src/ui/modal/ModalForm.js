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

export default function ModalForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            Type in your desired delivery date in the format provided
          </DialogContentText>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
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
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
