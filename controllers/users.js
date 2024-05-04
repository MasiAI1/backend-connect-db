const sendAllUsers = (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.usersArray))
}

const sendCreatedUser= (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.user))
}

const sendUserUpdated = (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end({message:'Пользователь обновлен'})
}

module.exports = [sendAllUsers,sendCreatedUser, sendUserUpdated]