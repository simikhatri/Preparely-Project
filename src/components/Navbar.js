import React from 'react'
import {
    Box, Toolbar, Button, IconButton, Typography,
    InputBase, InputAdornment
} from '@mui/material';
import {
    StyledAppbar, StyledStack, Styledbutton,
    Search, Image
} from '../style/Appbar';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/images/logo.png'
import CustomDrawer from './CustomDrawer';
import { Link } from 'react-router-dom';
import '../assets/style/style.css'
import Login from './Login';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <StyledAppbar position='sticky'>
                <Toolbar>
                    <IconButton >
                        <Image src={logo} alt="Preparely" />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }}></Typography>
                    <StyledStack direction='row' spacing={2} >
                        <Button disableRipple>
                            <Link id='link' to='/'> home</Link>
                        </Button>
                        <Button disableRipple>
                            <Link id='link' to='/'>BLog</Link>
                        </Button>
                        <Button disableRipple>
                            <Link id='link' to='/'>Contact</Link>
                        </Button>
                        <Search>
                            <InputBase placeholder='Search Exam Category'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>}
                            />
                        </Search>
                    </StyledStack>
                    <Styledbutton variant="outlined">
                        <Link id='link' to='/Register'> Register</Link>
                    </Styledbutton>
                    <Styledbutton variant="outlined"
                        onClick={handleOpen}
                    >
                        Login
                    </Styledbutton>
                    <Login open={open} onClose={handleClose} />
                    <Box>
                        <CustomDrawer />
                    </Box>
                </Toolbar>
            </StyledAppbar>

        </>
    )
}

export default Navbar
