import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes/index.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

app.use(cookieSession({ 
    name: 'google-auth-session', 
    keys: ['key1', 'key2'] 
})); 
app.use(passport.initialize()); 
app.use(passport.session()); 

app.use("/api/v1/",routes)

app.get("/", (_req, res) => {
    res.send("All services are running fine !")
})

app.all("*", (_req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    })
})
export default app;