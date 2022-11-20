const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: "bsh2v4yevwz0memuucmq-mysql.services.clever-cloud.com",
    user: "usuepqs9enak9ose",
    password: "uw0gEX7zIxi5nt42lPRx",
    database: "bsh2v4yevwz0memuucmq",
    port: 3306
})

conexion.connect((err) => {
    if (err) {
        console.log(`Error en la conexión: ${err.stack}`)
        return;
    }
    console.log(`Conectado a la Base de Datos GiftClub`);
});

