const express = require('express');
const app = express();

app.use(express.json())
const users = []

const registerUser = (req, res) => {
    const id = parseInt(req.params.id)
    const newUser = req.body;
    const alreadyRegister = users.find((u) => u.id === id)
    if (alreadyRegister) {
        return res.status(400).json({ message: `user is already register with id of ${id}` })
    }

    users.push(newUser)
    res.status(200).json({ message: "User register successfully", data: newUser })
}



module.exports = {
    registerUser
}