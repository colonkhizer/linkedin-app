import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import useStyles from './snackstyles'
import Alert from '@material-ui/lab/Alert'

function CustomizedSnackbar({ open, setOpen }) {
    const classes = useStyles()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{vertical: 'bottom' , horizontal: 'right'}}
                open={open}
                autoHideDuration={3000}
                close={handleClose}
            >
            <Alert onClose={handleClose} severity="success" elevation={6} varaint="filled">
                Transaction successfully created
            </Alert>
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar