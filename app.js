import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(cors())
const corsOptions ={
    origin:'https://a8--heartfelt-rabanadas-71ecd1.netlify.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);