const bcrypt = require('bcrypt')
const firebase = require('./../config/firebase')
const IUser = require('./../interfaces/user.interface')

class User extends IUser {
    constructor (email, password) {
        super()
        this.email = email
        this.password = password 
    }
    static async createUser (email, password) {
        //Crear usuario
    }

    static async findByEmail (email) {
        // COdigo para buscar por correo
    }

    async verifyPassword (password) {
        // verificar password 
    }
}

module.exports = User