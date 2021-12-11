const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const configdb = require('./config/db.config');
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importando rutas
const guardiasroute = require('./routes/guardias.route');
const invitadosroute = require('./routes/invitados.route');
const avenidaroute = require('./routes/avenida.route');
const residentesroute = require('./routes/residentes.route');

//Probando la conexion a la BD
configdb.connect(function(err) {
    if (err) {
      console.error('Error en conexion');
      return;
    }
   
    console.log('Conexion exitosa');
  });

app.get('/',(req,res)=>{
    res.send('Integrantes: Garcia Genaro Antonio, Sanches Lopez Cesar, Zacarias Diaz Cristhian IDGS-103');
})

//Rutas de APi
app.use('/apiv1/guardias', guardiasroute);
app.use('/apiv1/invitados', invitadosroute);
app.use('/apiv1/avenida', avenidaroute);
app.use('/apiv1/residentes', residentesroute);
app.listen(port, ()=>{
    console.log('Escuchando por el puerto' + port);
})

