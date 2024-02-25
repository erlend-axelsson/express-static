// "//" is a JavaScript comment, the program will ignore these lines


// Imports code, in this case express, so I don't have to write all the network stuff myself
import express from 'express'


// The '[something]()' means that I call or run something. The express thing I imported is pretty complicated but
// for this example calling gives you a 'server object'
// 'const something = something else' means that I declare that the thing on the left side of the = is whatever is on the right side
// In this case I set app as the server object that is returned from running 'express()'
const app = express()


// This can be 'magic' network stuff for now, when you run this thing on your machine you'll notice that the
// web address is http://localhost:3000
// Feel free to mess around with it, but often you won't be allowed to use anything under 1000 as those are usually 'reserved'.
const port = 3000


// Here im 'mounting' the public folder with the html documents at the 'root' path '/' is what gets served at the top level like 'https://google.com'
// I'm using the thing I set to 'app' here
// app is an 'object' that means it's a bag of stuff. You can access that stuff with a '.something' syntax. in this case 'app.use'
// 'use' lets us send some stuff with it when we call it, in this case we send the 'relative address' of where we want to mount our html
// files and the thing that we get when we call express.static('name of the folder with html files')
// you can put calls inside each-other like this, the program will run and get the result of the deepest call first and then
// run whatever it was stuffed inside with the result of that
app.use('/', express.static('public'))


// Here I'm mounting this thing on '/hello' which in the Google example would be https://google.com/hello
// the  (req, res) => {... thing is a function which I give to app.get. When the server gets a request at '/hello' it calls that function
// with a req (request) and res (response) objects.
app.get('/hello', (req, res) => {
    res.send('Hello, this is a scripted response from the server, the other paths are plain html files in the public folder')
})


// Here I do the same thing except I first tell the program that when I say hello2Handler I mean the whole (req, res) => { ... thing
const hello2Handler = (req, res) => {
    res.send('Hello, this is a scripted response from the server, but this one was assigned to a variable before being used')
}
app.get('/hello2', hello2Handler)

// Calling this thing starts the server, and it waits for requests on http://localhost:3000
app.listen(port, () => {
    console.log(`Example app http://localhost:${port}`)
})
