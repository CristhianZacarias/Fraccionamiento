const dbconfig = require('../config/db.config');

var Avenida = function(avenida){
    this.nombrea = avenida.nombrea;
    this.nocarretera = avenida.nocarretera;
    this.cp = avenida.cp;
    this.nocasa = avenida.nocasa;
}
Avenida.getAll = (result) => {
    dbconfig.query('SELECT * FROM avenida', (error, res) => {
        if(error){
            console.log("Error al consultar Avenida", error);
            result(null, error);
        }
        else{
            console.log("Consulta de avenida exitosa!!!");
            result(null, res);
        }
    })
}

//Metodo para buscar por id
Avenida.getAvenidaById = (id, result)=>{
    const sql = ('SELECT * FROM avenida WHERE ida=?');
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
Avenida.createAven = (dataAven, result) =>{
    //const sql = 'INSERT INTO avenida SET ?';
    dbconfig.query('INSERT INTO avenida SET ?', dataAven, (error, respuesta)=>{
        if(error){
            console.log('Error al insertar registro');
            result(null, error);
        }
        else{
            console.log('Avenida creado exitosamente...!!!');
            result(null, respuesta);
        }
    })

}

Avenida.updateAvenida = (id, avenidaData, result) =>{
    const sql = 'UPDATE avenida SET nombrea=?, nocarretera=?, cp=?, nocasa=? WHERE ida=?';
    dbconfig.query(sql, [avenidaData.nombrea, avenidaData.nocarretera, avenidaData.cp, 
                avenidaData.nocasa, id], (error, res) =>{
        if(error){
            console.log('Error al actualizar la avenida');
            result(null,error);
        }
        else{
            console.log('Avenida actualizado correctamente!!!');
            result(null, res);
        } 
    });
}

Avenida.deleteAvenida = (id, result)=>{
    const sql = 'DELETE FROM avenida WHERE ida=?';
    dbconfig.query(sql, [id], (error, res)=>{
        if(error){
            console.log('Error al eliminar la avenida');
            result(null, error);
        }
        else{
            result(null, res);

        }
    })
}

module.exports = Avenida;