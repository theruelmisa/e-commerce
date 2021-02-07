import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/pili_logo.png';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={ classes.appBar } color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={ classes.title } color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={ classes.image } />
                        Pili
                    </Typography>
                    <div className={ classes.grow } />
                    <div className={ classes.button }>
                        {
                            location.pathname === '/' && (
                                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            ) 
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;
