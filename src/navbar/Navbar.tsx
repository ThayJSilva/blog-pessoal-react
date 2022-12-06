import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    const navigate = useNavigate()


    function goLogout() {
        setToken('')
        navigate('/login')
    }
    return (
        <>
            <AppBar className='barprincipal' position="static" >
                <Toolbar className='barFlex' variant="dense" >
                    <Box className='cursor'>
                        <Link to='home' className='texto-decorator-none Cursor'>
                            <Typography variant="h5" color="inherit">
                                HappyDonate
                            </Typography>
                        </Link>

                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Link to='home' className='texto-decorator-none Cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor'>

                            <Link to='postagens' className='texto-decorator-none Cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='temas' className='texto-decorator-none Cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Link>

                        </Box>
                        <Box mx={1} className='cursor'>

                            <Link to='/formulario tema' className='texto-decorator-none Cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Link>
                        </Box>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>

                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

function setToken(arg0: string) {
    throw new Error('Function not implemented.');
}
