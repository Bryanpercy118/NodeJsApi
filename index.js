const express = require('express');
const app = express();

app.use(express.json());

const students = [
    {id:1, name: 'Jorge', age:20, enroll:true},
    {id:2, name: 'Juan', age:21, enroll:true},
    {id:3, name: 'Julian', age:25, enroll:true}
]

app.get('/', (req, res) => {
    res.send('Node Js Api');
});

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('api/students/:id', (req, res) => {
    const student= students.find(c=>c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('No student found');
    else return res.status(200).send('Student found');
});


app.post('/api/students', (req, res) => {
    const student ={
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll ==='true')
    }
});

app.delete('api/students/:id',(req, res) =>{
    const student = students.find (c => c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('No student found');
    
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.status(200).send('Student deleted: '+ student.name);
})


const port =process.env.port || 80;
app.listen(port,()=> console.log('listening on port '+ port));