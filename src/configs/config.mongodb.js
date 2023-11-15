'use strict'

// lv 0
// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: 'localhost',
//         port: 2701,
//         name: 'db'
//     }
// }

// module.exports = config


//  lv 1
const configDev = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 2701,
        name: 'dbDev'
    }
}

const configPro = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 2701,
        name: 'dbPro'
    }
}

const env = process.env.NODE_ENV | 'dev'
const config = { configDev, configPro}

module.exports = config[env]
