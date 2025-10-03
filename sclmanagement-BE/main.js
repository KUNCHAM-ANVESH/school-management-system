const express = require("express");
const authRouter = require("./routes/authRoutes");
const cors = require("cors")
const dotenv = require("dotenv");

dotenv.config();

const app = express();


//cors policy
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization "
}));

//parsing the json bodies
app.use(express.json());

//parsing the url's
app.use(express.urlencoded({"extended": true}))

app.use((req, res, next) =>{
    console.log(req.method, req.url);
    next()
});


//Binding the auth routes with express
app.use('/api/auth', authRouter)


// Error handling middleware
app.use((err, req, res, next) =>{
    if(err){
        console.error(err.stack);
        res.status(500).json({message: "Something went wrong"})
    }
});

// Assigning the port number from env
const port = process.env.port || 5000

app.listen(port, ()=>{
    console.log("server is running in port:", port);
});
