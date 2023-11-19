const { odm } = require('./service/odm')

function getUser() {
    const User = odm.model('User', { name: String })
}

getUser()