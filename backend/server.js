const express = require('express')
const app = express()
const port = 3004

// Parse JSON and urlencoded bodies so req.body is populated.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(express.static('public'))

app.get('/health', (req, res) => res.json({ message: 'Hello World!' }))

app.post('/signup', (req, res) => {
    let use = req.body.username
    let pass = req.body.password

    if (use === "vinayksgowda123@gmail.com" && pass === "vinay@123") {
        res.redirect('/home')
    } else {
        res.redirect('/signup')
    }
})

app.listen(port,()=>console.log(`example posted userdetails`))