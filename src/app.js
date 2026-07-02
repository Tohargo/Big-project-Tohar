import express from "express"
import cors from "cors"
import {port} from "./config/index.js";
import urls from "./routes/index.js"

export const app = express()


app.use(express.json())
app.use(cors())

app.use("/api",urls)

app.listen(port,()=>{
    console.log(`Server is running in http://localhost:${port}`);
   
})