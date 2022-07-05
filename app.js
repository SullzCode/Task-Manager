const express = require("express");
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found')
//middleware
app.use(express.static('./public'));
app.use(express.json());


//routes
// app.get('/', function(req, res){
//     res.send('Task Manager App')
// });

app.use('/api/v1/tasks', tasks);
app.use(notFound);
//app.get("api/v1/tasks")     - get all the tasks
//app.post("/api/v1/tasks")   - create a new task
//app.get("/api/v1/tasks/:id") - get single task
//app.patch("/api/v1/tasks/:id") - update task
//app.delete("/api/v1/tasks/:id") - delete task






const port =  process.env.PORT || 3000




const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, function(){
            console.log(`Server is up and running at port ${port}`)
        })
    } catch (error) {
        
    }
}

start()

