const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
	res.send('Hello Intocode')
})


app.get('/users', function (req, res) {
	const user = ["user1", "user2", "user3"]
	console.log(user)
 });

app.post('/users', function (req, res) {
	res.send('юзер добавлен');
 });

 app.delete('/users/:id', (req, res) => {
	res.send(`юзер с ID  ${req.params.id} удален`)
 })

 app.patch('/users/:id', (req, res) => {
	res.send(`юзер с ID  ${req.params.id} изменен`)
 })


 app.post('/admin', function (req, res) {
	res.send('не хватает прав доступа');
 });

 app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
 })
 
