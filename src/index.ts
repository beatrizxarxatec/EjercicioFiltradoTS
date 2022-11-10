import express from 'express';
import {router} from './routes/router.js';
import path from 'path';
import {PORT} from './config.js'

const app = express();


const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({extended:false}));

app.use("/", router);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})
