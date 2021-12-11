const Avenidamodel = require('../models/avenida');
const dbconfig = require('../config/db.config');

exports.getAvenidaList = (req, res) => {
    Avenidamodel.getAll((error, avenida)=>{
        console.log('Listado de Avenida...!!!');
        if(error)
        res.send(error);
        console.log('Avenida', avenida);
        res.send(avenida);
    })
}

exports.getAvenidaById = (req,res)=>{
    Avenidamodel.getAvenidaById(req.params.id,(error, avenida)=>{
        if(error)
        res.send(error);
        console.log('Avenida con el ID', avenida);
        res.send(avenida);
    })
}

exports.createAvenida = (req, res)=>{
    const avenidaData = new Avenidamodel(req.body);
    console.log('Nueva Avenida', avenidaData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Avenidamodel.createAven(avenidaData,(error, avenida)=>{
            if(error)
            res.send(error); 
            res.json({status:true, message: 'Avenida creado correctamente', data: avenida.insertId});
        })
    }
}

exports.updateAvenida = (req, res)=>{
    const DataAvenida = new Avenidamodel(req.body);
    console.log('Avenida actualizado correctamente', DataAvenida);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Avenidamodel.updateAvenida(req.params.id, DataAvenida, (error, avenida)=>{
            if(error)
            res.send(error);
            res.json({status: true, message: 'Avenida Actualizado!!!'})
        })
    }
}

exports.deleteAvenida = (req, res)=>{
    Avenidamodel.deleteAvenida(req.params.id, (error, avenida)=>{
        if(error)
        res.send(error);
        res.json({success: true, message: 'Avenida eliminado correctamente'});
    })
}
/* exports.createAvenida = async (req, res) =>{
    const sql = "INSERT INTO avenida SET ?";
    dbconfig.query(sql,Avenidamodel, (error)=>{
        if(error)throw error;
        res.status(201).end();
    }); 
}  */ 
