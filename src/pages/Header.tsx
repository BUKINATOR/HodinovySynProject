import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {NextPage} from "next";
import {Link} from "@mui/material";


export const Header: NextPage = (props) => {

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>

                    <Box component="div" sx={{flexGrow: 1}}>
                        <img src="logo.png" alt="logo"/>
                    </Box>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}

                                color="inherit"
                            >
                                <AccountCircle sx={{width: 30, height: 30, color: 'primary.light'}}>
                                </AccountCircle>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profil</MenuItem>
                                <MenuItem onClick={handleClose}>Odhlásit se</MenuItem>
                            </Menu>
                        </div>
                    )}
                    <Link href="Login" underline="hover" sx={{display: 'flex', color: 'black', justifyContent:'end', padding: 2}}>
                        {'Přihlásit se'}
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
