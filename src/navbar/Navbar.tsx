import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";

import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { TokenState } from '../store/tokens/tokenReducer';
import { addToken } from '../store/tokens/action';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));

        toast('usuario deslogado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar className="containerA" position="static" style={{ backgroundColor: "#C2185B" }}>
            <Toolbar variant="dense" className="containerA">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        Donate Happy
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;