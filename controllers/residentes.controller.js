const Residentesmodel = require('../models/residentes');
const dbconfig = require('../config/db.config');

exports.getResidentesList = (req, res) => {
    Residentesmodel.getAll((error, residente)=>{
        console.log('Listado de Residentes');
        if(error)
        res.send(error);
        console.log('Residente', residente);
        res.send(residente);
    })
}

exports.getResidenteById = (req,res)=>{
    Residentesmodel.getResidenteById(req.params.id,(error, residentes)=>{
        if(error)
        res.send(error);
        console.log('Residente con el ID', residentes);
        res.send(residentes);
    })
}

exports.createResidente = (req, res)=>{
    const residenteData = new Residentesmodel(req.body);
    console.log('Nuevo Residente', residenteData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Residentesmodel.createResident(residenteData,(error, residente)=>{
            if(error)
            res.send(error); 
            res.json({status:true, message: 'Residente creado correctamente', data: residente.insertId});
        })
    }
}

exports.updateResidente = (req, res)=>{
    const DataResidente = new Residentesmodel(req.body);
    console.log('Residente actualizado correctamente', DataResidente);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Residentesmodel.updateResidente(req.params.id, DataResidente, (error, residentes)=>{
            if(error)
            res.send(error);
            res.json({status: true, message: 'Residente Actualizado!!!'})
        })
    }
}

exports.deleteResidente = (req, res)=>{
    Residentesmodel.deleteResidente(req.params.id, (error, residentes)=>{
        if(error)
        res.send(error);
        res.json({success: true, message: 'Residente eliminado correctamente'});
    })
}
/* exports.createResidente = async (req, res) =>{
    const sql = "INSERT INTO residentes SET ?";
    dbconfig.query(sql,Residentesmodel, (error)=>{
        if(error)throw error;
        res.status(201).end();
    }); 
}  */ 
