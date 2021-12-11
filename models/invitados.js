const dbconfig = require('../config/db.config');

var Invitados = function(invitados){
    this.nombrei = invitados.nombrei;
    this.genero = invitados.genero;
    this.telefono = invitados.telefono;
    this.noinvitados = invitados.noinvitados;
}
Invitados.getAll = (result) => {
    dbconfig.query('SELECT * FROM invitados', (error, res) => {
        if(error){
            console.log("Error al consultar Invitados", error);
            result(null, error);
        }
        else{
            console.log("Consulta de invitados Conectado");
            result(null, res);
        }
    })
}

//Metodo para buscar por id
Invitados.getInvitadoById = (id, result)=>{
    const sql = ('SELECT * FROM invitados WHERE idi=?');
    dbconfig.query(sql, id, (error, res)=>{
        if(error){
            console.log('Error al buscar por id');
            result(null, error);
        }
        else{
            result(null, res);
        }
    })
}

// Metodo para crear 
Invitados.createInvit = (dataInvit, result) =>{
    //const sql = 'INSERT INTO invitados SET ?';
    dbconfig.query('INSERT INTO invitados SET ?', dataInvit, (error, respuesta)=>{
        if(error){
            console.log('Error al insertar registro');
            result(null, error);
        }
        else{
            console.log('Invitado creado exitosamente');
            result(null, respuesta);
        }
    })

}

Invitados.updateInvitado = (id, invitadoData, result) =>{
    const sql = 'UPDATE invitados SET nombrei=?, genero=?, telefono=?, noinvitados=? WHERE idi=?';
    dbconfig.query(sql, [invitadoData.nombrei, invitadoData.genero, invitadoData.telefono, 
                invitadoData.noinvitados, id], (error, res) =>{
        if(error){
            console.log('Error al actualizar el invitado');
            result(null,error);
        }
        else{
            console.log('Invitado actualizado correctamente');
            result(null, res);
        } 
    });
}

Invitados.deleteInvitado = (id, result)=>{
    const sql = 'DELETE FROM invitados WHERE idi=?';
    dbconfig.query(sql, [id], (error, res)=>{
        if(error){
            console.log('Error al eliminar el invitado');
            result(null, error);
        }
        else{
            result(null, res);

        }
    })
}

module.exports = Invitados;