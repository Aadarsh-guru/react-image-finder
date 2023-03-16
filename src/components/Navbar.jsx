import { AppBar, Toolbar, Typography } from "@mui/material"
import CollectionsIcon from '@mui/icons-material/Collections';


const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{ background: '#445A6F' }}>
                <CollectionsIcon />
                <Typography variant="h5" style={{ marginLeft: 10 }}>Image-Finder</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar