const express = require('express');
const PORT = 4000;
const ctrl = require('./controllers/mainController')
const app = express()

app.use(express.json())

app.get('/api/userInfo', ctrl.getUserInfo)

app.post('/api/userInfo', ctrl.createUser)

app.post('/api/validUser', ctrl.validUser)

// app.put('/api/userInfo', ctrl.updateUserInfo)

// app.delete('/api/userInfo', ctrl.deleteUser)





app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))


