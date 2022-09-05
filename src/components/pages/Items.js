import React from 'react'
import SM from './Socialmedia'
import BRv from './buttonreserv'
import Bebidas from './Bebidas'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Ber from './ber.js'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import im from './images/mds.png'
import conga from './images/conga.png'
import desarmador from './images/desarmador.png'
import la from './images/la.png'
import collage1 from './images/FotoJet.jpg'
import collage2 from './images/collaje2.jpg'
import collage3 from './images/collaje3.jpg'
import drink from './images/Mai-Tai.ico'
import drink1 from './images/Bacardi.ico'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import drink2 from './images/WhiteR.png'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LocalBarIcon from '@mui/icons-material/LocalBar';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function createData(total, nombre,image) {
  return { total,nombre,image };
}

const rows = [
  createData('25 pz','Medias de seda', <img src={im} style={{display: 'flex',  justifyContent:'auto', alignItems:'center', margin: "auto"}} width={50} height={75} ></img>),
  createData('25 pz', 'Conga',<img src={conga} style={{display: 'flex',  justifyContent:'auto', alignItems:'center', margin: "auto"}} width={50} height={75} ></img>),
  createData('25 pz','Desarmador',<img src={desarmador} style={{display: 'flex',  justifyContent:'auto', alignItems:'center', margin: "auto"}} width={50} height={75} ></img>),
  createData('25 pz', 'Laguna Azul',<img src={la} style={{display: 'flex',  justifyContent:'auto', alignItems:'center', margin: "auto"}} width={50} height={75} ></img>)
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





const items = () => {

  return (
    <div>

<Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid item xs={12} md={8}>
        <div className='left' style={{display: 'flex',  justifyContent:'auto', alignItems:'auto', margin: "auto"}} >

<div className='left_inner'>
  <h1 className='neon'>Paquetes de Bebidas </h1>
  <h2 className='neon'>Barman Boys</h2>
<br></br>
</div>
</div>
        <Grid container >
        <Grid item xs={12} md={4} sm={6}>
        <Card sx={{ maxWidth:'auto'}} className='set1'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={drink}
      />
      <CardContent sx={{ maxWidth:'auto'}} >
        <Typography gutterBottom variant="h5" component="div" className='neon'>
          Paquete Accesible  $2800
        </Typography>
        <Typography variant="h5"  className='neon99'>
            100 cocteles <br></br>
            </Typography>
            
            <Typography gutterBottom variant="h9" component="div" className='neon91'>
            25 pz Medias de Seda <br></br>
            25 pz Conga <br></br>
            25 pz Desarmador <br></br>
            25 pz Laguna Azul <br></br>
            

        </Typography>
      </CardContent>
  
    </Card>
    </Grid>

    <Grid item xs={12} md={4} sm={6}>
    <Card sx={{ maxWidth: 'auto' }} className='set1'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={drink2}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='neon'>
          Paquete VIP  $3800
        </Typography>
        <Typography variant="h5" className='neon99'>
            100 cocteles <br></br>
            </Typography>
            <Typography gutterBottom variant="h9" component="div" className='neon91'>
            25 pz Alfonso 13 <br></br>
            25 pz Ruso Negro<br></br>
            25 pz Beso de Ángel <br></br>
            25 pz Midori Milk <br></br>
            

        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={4} sm={6}>
    <Card sx={{ maxWidth: 'auto' }} className='set1'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={drink1}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" className='neon' >
          Paquete Standar  $3200
        </Typography>
        <Typography variant="h5" className='neon99'>
            100 cocteles <br></br>
            </Typography>
            <Typography gutterBottom variant="h9" component="div" className='neon91'>
            25 pz Green Demon <br></br>
            25 pz Piña Colada<br></br>
            25 pz Esp Pitufo <br></br>
            25 pz Continental <br></br>
            

        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
        </Grid>
        </Grid>
        </Grid>
        
        <Grid item xs={12} md={4} sm={6}>
        <Grid container >
    
        <div className='left' style={{display: 'flex',  justifyContent:'auto', alignItems:'auto', margin: "auto"}} >

<div className='left_inner'>
  <h1 className='neon'>Reserva ya! </h1>
  <br></br>
  <Grid item xs={'auto'} md={'auto'} sm={'auto'}> 

  <Grid item xs={'auto'} className='set5'>

       <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    > 


    <TextField
  helperText="Escribe tú nombre"
  id="filled-size-small"
      
   

  size="small"
  label="Nombre"
/>           
          
<TextField
         helperText="Escribe tú numero de contacto"
         id="filled-size-small"
             
          
       
         size="small"
         label="Teléfono"

        />


  
    </Box>
 
  
    
       </Grid>
    
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
       <Ber/>
       <Ber/>
       </Grid>
      
</div>


   

</div>
</Grid>  
        </Grid>

    
  
      </Grid>
      

    </Box>


      <Grid container spacing={2} columns={3}>

    
      <Grid item xs={8}>

 


   





</Grid>
</Grid>
<br></br>


<br></br>
<br></br>


    </div>
  )
}

export default items