'use strict'

const mongoose = require('mongoose')

const connectString =  'str'

class Database {
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect( connectString, {
            maxPoolSize: 50
        }).then( _ => {
            console.log('connected')
        })
        .catch( err => console.log('Error'))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instaceMongodb = Database.getInstance()

module.exports = instaceMongodb
