const dbconfig = require('../config/db.config');

var Guardias = function(guardias){
    this.nombreg = guardias.nombreg;
    this.genero = guardias.genero;
    this.fn = guardias.fn;
    this.noguardias = guardias.noguardias;
}
Guardias.getAll = (result) => {
    dbconfig.query('SELECT * FROM guardias', (error, res) => {
        if(error){
            console.log("Error al consultar Guardias", error);
            result(null, error);
        }
        else{
            console.log("Consulta de guardias Conectado");
            result(null, res);
        }
    })
}

//Metodo para buscar por id
Guardias.getGuardiaById = (id, result)=>{
    const sql = ('SELECT * FROM guardias WHERE id_guard=?');
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
Guardias.createGuard = (dataGuard, result) =>{
    //const sql = 'INSERT INTO guardias SET ?';
    dbconfig.query('INSERT INTO guardias SET ?', dataGuard, (error, respuesta)=>{
        if(error){
            console.log('Error al insertar registro');
            result(null, error);
        }
        else{
            console.log('Guardia creado exitosamente');
            result(null, respuesta);
        }
    })

}

Guardias.updateGuardia = (id, guardiaData, result) =>{
    const sql = 'UPDATE guardias SET nombreg=?, genero=?, fn=?, noguardias=? WHERE id_guard=?';
    dbconfig.query(sql, [guardiaData.nombreg, guardiaData.genero, guardiaData.fn, 
                guardiaData.noguardias, id], (error, res) =>{
        if(error){
            console.log('Error al actualizar el guardia');
            result(null,error);
        }
        else{
            console.log('Guardia actualizado correctamente');
            result(null, res);
        } 
    });
}

Guardias.deleteGuardia = (id, result)=>{
    const sql = 'DELETE FROM guardias WHERE id_guard=?';
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

module.exports = Guardias;