import React, { useEffect } from "react";
import './Home.css'
import {Button, Grid, Typography} from '@material-ui/core'
import { lightGreen } from "@material-ui/core/colors";
import { Box } from "@mui/material";
import Doar2 from "../../img/doar2.jpg"

import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { TokenState } from "../../store/tokens/tokenReducer";
import TabPostagem from "../../components/postagem/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagem/modelPostagem/ModalPostagem";


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.info('🦄 voce precisa estar logado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
          navigate("/login")
  
      }
  }, [token])
    return (
        <>
       <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#EC407A" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Donate Happy</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Doe aqui o que você não usa mais!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={Doar2}
                    alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12}  className="postagem">
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    )
}
export default Home 