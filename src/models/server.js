const express = require('express');
const cors = require('cors');

const sequelize = require('../database/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.apiPaths = {
            user: '/api/user'
        }

        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect(){
        try {
            await sequelize.sync({ force:false }).then(() => {
                console.log('Connection has been established successfully.');
            });
          } catch (error) {
            throw new Error('Unable to connect to the database:', error );
          }
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes(){
        this.app.use( this.apiPaths.user, require('../routes/users') );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server running in port ${ this.port }`);
        });
    }
}

module.exports = Server;