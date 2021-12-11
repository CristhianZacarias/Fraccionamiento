const dbconfig = require('../config/db.config');

var Residentes = function(residentes){
    this.nombrer = residentes.nombrer;
    this.genero = residentes.genero;
    this.email = residentes.email;
    this.telefono = residentes.telefono;
}
Residentes.getAll = (result) => {
    dbconfig.query('SELECT * FROM residentes', (error, res) => {
        if(error){
            console.log("Error al consultar Residentes", error);
            result(null, error);
        }
        else{
            console.log("Consulta de residentes Conectado");
            result(null, res);
        }
    })
}

//Metodo para buscar por id
Residentes.getResidenteById = (id, result)=>{
    const sql = ('SELECT * FROM residentes WHERE idr=?');
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
Residentes.createResident = (dataGuard, result) =>{
    //const sql = 'INSERT INTO residentes SET ?';
    dbconfig.query('INSERT INTO residentes SET ?', dataGuard, (error, respuesta)=>{
        if(error){
            console.log('Error al insertar registro');
            result(null, error);
        }
        else{
            console.log('Residente creado exitosamente!!!');
            result(null, respuesta);
        }
    })

}

Residentes.updateResidente = (id, residenteData, result) =>{
    const sql = 'UPDATE residentes SET nombrer=?, genero=?, email=?, telefono=? WHERE idr=?';
    dbconfig.query(sql, [residenteData.nombrer, residenteData.genero, residenteData.email, 
                residenteData.telefono, id], (error, res) =>{
        if(error){
            console.log('Error al actualizar el guardia');
            result(null,error);
        }
        else{
            console.log('Residente actualizado correctamente!!!');
            result(null, res);
        } 
    });
}

Residentes.deleteResidente = (id, result)=>{
    const sql = 'DELETE FROM residentes WHERE idr=?';
    dbconfig.query(sql, [id], (error, res)=>{
        if(error){
            console.log('Error al eliminar el guardia');
            result(null, error);
        }
        else{
            result(null, res);

        }
    })
}

module.exports = Residentes;