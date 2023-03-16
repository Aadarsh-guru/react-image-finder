import { Alert, Snackbar } from "@mui/material"


const SnackBar = ({ open, setOpen }) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} >
            <Alert severity="warning" onClose={handleClose} >
                Number of images should be between 3 and 200.
            </Alert>
        </Snackbar>
    )
}

export default SnackBar