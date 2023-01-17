import express from 'express'
import session from 'express-session'

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

let baseSession = session({
    secret: 'c0d3r',
    resave: true,
    saveUninitialized: true
})

app.use(express.json())
app.use(baseSession)
app.use(express.static('public'))

let users = []

app.post('/register', (req, res) => {
    let { name } = req.body
    let userExists = users.find(user => user.name === name)
    if (userExists) return res.status(400).send({ error: "User already exists"})
    users.push(req.body)
    res.send({ message: "User registered!" })
})