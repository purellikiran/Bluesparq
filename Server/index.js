const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(cors());


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_allocation',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));





//Login
app.post('/login', (req, res) => {

     var user_name=req.body.username;
        var password=req.body.password;
       console.log("User name = "+user_name+", password is "+password);

      console.log(`SELECT * FROM users WHERE username='${user_name}' AND password = '${password}'`)
    mysqlConnection.query(`SELECT * FROM users WHERE username='${user_name}' AND password = '${password}'`, (err, rows, fields) => {
        if (!err){
            console.log(rows)
            res.send(rows);

        }
        else
            console.log(err);
    })
});
//Get all employees
app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM users where type!="M" and status =1', (err, rows, fields) => {
        if (!err){
            console.log(rows)
            res.send(rows);

        }
        else
            console.log(err);
    })
});

//Get tasks list
app.post('/taskslist', (req, res) => {
    let id = req.body.id;
    mysqlConnection.query(`SELECT * FROM tasks WHERE user_id ='${id}'` ,(err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



//Insert an employees
app.post('/add_user', (req, res) => {
    let username = req.body.email.trim();
    let password = req.body.password.trim();
    let name = req.body.name.trim();
    let phone = req.body.phone;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let zip = req.body.zip;
    let type = req.body.type;
    let status = req.body.status;
     

       console.log(username,name,password)

    var sql = `INSERT INTO users(username,name,password,phone,address,city,state,zip, type, status) VALUES ('${username}','${name}','${password}','${phone}','${address}','${city}','${state}','${zip}', '${type}', '${status}')`;
   console.log(sql);
   
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.send(rows)
        else
            console.log(err);
    })
});

//Insert an Task

app.post('/add_task', (req, res) => {
    let taskName = req.body.taskName;
    let taskDescription = req.body.taskDescription;
    let priority = req.body.priority;
    let targetDate = req.body.targetDate;
    let createdDate = req.body.created_date;
    let userId = req.body.users;
    
    

    var sql = `INSERT INTO tasks(task_name,task_description,priority,target_date,created_date,user_id) VALUES ('${taskName}','${taskDescription}','${priority}','${targetDate}','${createdDate}','${userId}')`;
   console.log(sql);
   
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
            res.send(rows)
        else
            console.log(err);
    })
});

