const Invitadosmodel = require('../models/invitados');
const dbconfig = require('../config/db.config');

exports.getInvitadosList = (req, res) => {
    Invitadosmodel.getAll((error, invitado)=>{
        console.log('Listado de Invitados');
        if(error)
        res.send(error);
        console.log('Invitado', invitado);
        res.send(invitado);
    })
}

exports.getInvitadoById = (req,res)=>{
    Invitadosmodel.getInvitadoById(req.params.id,(error, invitados)=>{
        if(error)
        res.send(error);
        console.log('Invitado con el ID', invitados);
        res.send(invitados);
    })
}

exports.createInvitado = (req, res)=>{
    const invitadoData = new Invitadosmodel(req.body);
    console.log('Nuevo Invitado', invitadoData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Invitadosmodel.createInvit(invitadoData,(error, invitado)=>{
            if(error)
            res.send(error); 
            res.json({status:true, message: 'Invitado creado correctamente', data: invitado.insertId});
        })
    }
}

exports.updateInvitado = (req, res)=>{
    const DataInvitado = new Invitadosmodel(req.body);
    console.log('Invitado actualizado correctamente', DataInvitado);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Porfavor llene los campos'});
    }
    else{
        Invitadosmodel.updateInvitado(req.params.id, DataInvitado, (error, invitados)=>{
            if(error)
            res.send(error);
            res.json({status: true, message: 'Invitado Actualizado!!!'})
        })
    }
}

exports.deleteInvitado = (req, res)=>{
    Invitadosmodel.deleteInvitado(req.params.id, (error, invitados)=>{
        if(error)
        res.send(error);
        res.json({success: true, message: 'Invitado eliminado correctamente'});
    })
}
/* exports.createInvitado = async (req, res) =>{
    const sql = "INSERT INTO invitados SET ?";
    dbconfig.query(sql,Invitadosmodel, (error)=>{
        if(error)throw error;
        res.status(201).end();
    }); 
}  */ 
