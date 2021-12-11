const Guardiasmodel = require('../models/guardias');
const dbconfig = require('../config/db.config');

exports.getGuardiasList = (req, res) => {
    Guardiasmodel.getAll((error, guardia)=>{
        console.log('Listado de Guardias');
        if(error)
        res.send(error);
        console.log('Guardia', guardia);
        res.send(guardia);
    })
}

exports.getGuardiaById = (req,res)=>{
    Guardiasmodel.getGuardiaById(req.params.id,(error, guardias)=>{
        if(error)
        res.send(error);
        console.log('Guardia con el ID', guardias);
        res.send(guardias);
    })
}

exports.createGuardia = (req, res)=>{
    const guardiaData = new Guardiasmodel(req.body);
    console.log('Nuevo Guardia', guardiaData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Guardiasmodel.createGuard(guardiaData,(error, guardia)=>{
            if(error)
            res.send(error); 
            res.json({status:true, message: 'Guardia creado correctamente', data: guardia.insertId});
        })
    }
}

exports.updateGuardia = (req, res)=>{
    const DataGuardia = new Guardiasmodel(req.body);
    console.log('Guardia actualizado correctamente!!!', DataGuardia);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Guardiasmodel.updateGuardia(req.params.id, DataGuardia, (error, guardias)=>{
            if(error)
            res.send(error);
            res.json({status: true, message: 'Guardia Actualizado!!!'})
        })
    }
}

exports.deleteGuardia = (req, res)=>{
    Guardiasmodel.deleteGuardia(req.params.id, (error, guardias)=>{
        if(error)
        res.send(error);
        res.json({success: true, message: 'Guardia eliminado correctamente'});
    })
}
/* exports.createGuardia = async (req, res) =>{
    const sql = "INSERT INTO guardias SET ?";
    dbconfig.query(sql,Guardiasmodel, (error)=>{
        if(error)throw error;
        res.status(201).end();
    }); 
}  */ 
