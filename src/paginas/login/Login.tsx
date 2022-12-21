import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import { AlertTitle } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../store/tokens/action';
import UserLogin from '../../models/UserLogin';

function Login() {

    /*
    A maior parte dos Hooks precisarao de uma variavel para acessar o seu valor e uma funcao para modificar os seus dados
    
    1- Criaremos um Hook useState do tipo userLogin difinindo os seus valores iniciais 
    2-metode recuperar informacoes do usuario
    3-chamar o metodo dentro do TextField
    4-Criaremos o hook useLocalStorage para armagenar o token e vamos trazer da Api
    5-Finalizaremos o metodo onsubmit ,fazendo a comunicaçao com a Api e armazenando o token 
    6- Por fim utilizaremos o Hook useEffect,que vai verificar o token e redirecionar para a pagina /home ,utilizaremos o hook usenavigate
 */

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {

            usuario: '',
            senha: '',

        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home')


        }
    }, [token])
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await login('/auth/logar', userLogin, setToken)

            toast('usuario logado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (erro) {
            alert('Incorreto! tente novamente')
        }
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>

                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <Box marginTop={2} textAlign='center'>

                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>

                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to={'/cadastroUsuario'}>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} className='imagem'>

                </Grid>
            </Grid>
        </>
    );
}

export default Login;