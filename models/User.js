


const fs = require('fs');

const User = {

    fileName: './database/user.json',

    create: function(userData){
        let allUsers = this.getUsers()

        let newUser = {
            id: this.geradorDeId(),
            ...userData
        }

        allUsers.push(newUser)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
        return newUser

    },

    geradorDeId: function() {
        let allUsers = this.getUsers()
        let lastUser = allUsers.pop()

        if (lastUser)
        {
            return lastUser.id + 1
        }
        return 1
    },


    getUsers: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')) 
    },


    //procura usuario por id
    findUserById: function(id) {
        let allUsers = this.getUser();
        let userFound = allUsers.find( oneUser => oneUser.id === id)
        return userFound
    },

    //busca por qualquer campo
    findUserByField: function(field, value ) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find( oneUser => oneUser[field] === value)
        return userFound
    }

}



module.exports = User
