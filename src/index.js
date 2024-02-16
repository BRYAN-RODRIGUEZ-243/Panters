
import Express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import  las_rutas  from './routes/rutas.js'


const app = Express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//crear servidor http a partir de la libreria de express
//const http_server = new Server('http').Server(las_rutas)

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(las_rutas)
app.use(Express.static(join(__dirname,'public')))
console.log("Server is listening on port 3000")
app.listen(3000)

