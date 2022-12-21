import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagem.css';
import ListaPostagem from '../listapostagem/ListaPostagem';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered className='tabColor' onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="center" className='titulo'> <h2>O que significa doação?</h2>
          <h3> Em primeiro lugar, a doação é um ato de desapego e amor ao próximo.</h3>
         <h4> Quando se fala em doação, estamos falando em ajudar uma pessoa na qual não conhecemos, em fazer o bem sem olhar a quem, falamos em oferecer aquilo que não nos fará falta, e também em entregar e ceder aquilo que será exatamente tudo para o outro.
          Criamos um afeto desnecessário com alguns objetos e por isso guardamos roupas,sapatos, brinquedos, utensílios e etc... que nunca mais vamos usar. Nesse caso, não seria muito mais útil entregar essas peças para alguém que realmente vai aproveitar? Qual é a ideia! 
          Posta aqui no blog tudo aquilo no qual você não utiliza mais e que esteja em bom estado, deixando seu contato para que Empresas, Ongs ou Pessoas fisicas na qual se interessar pelo objeto, entre em contato para está indo retirar o mesmo no local indicado.
          Obrigado aos doadores!</h4> </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;