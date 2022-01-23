var express = require('express');
var app = express()
var path = require('path');


app.use(express.static('public'));

const users = [
	{
		id: 1,
		name: "David",
		email: "davidg@gmail.com"
	},
	{
		id: 2,
		name: "Kenji",
		email: "kenjit@gmail.com"
	},
	{
		id: 3,
		name: "Leonardo",
		email: "leoa@gmail.com"
	},
	{
		id: 4,
		name: "Filipe",
		email: "filipem@gmail.com"
	},
	{
		id: 5,
		name: "Davina",
		email: "davinag@gmail.com"
	},
	{
		id: 6,
		name: "Alberto",
		email: "davinag@gmail.com"
	},

	{
		id: 7,
		name: "Albert",
		email: "davinag@gmail.com"
	},
	{
		id: 8,
		name: "Alberta",
		email: "davinag@gmail.com"
	}
]

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
	return false;
});

app.get("/users", (req, res) => {
	let id = req.query.id;
	let name = req.query.name;
	let email = req.query.email;
	let result = [];
	if (id) {
        users.forEach(function(obj){
            if (obj.id == id){
                result.push(obj);
            }
        });
    }
    if (name) {
        users.forEach(function(obj){
        	let x = obj.name.toUpperCase();
        	let y = name.toUpperCase();
            if (x == y || x.includes(y)) {
                result.push(obj);
            }
        });
    }
    if (email) {
        users.forEach(function(obj){
        	let x = obj.LowerCase.toLowerCase();
        	let y = email.toUpperCase();
            if (x == y || x.includes(y)) {
                result.push(obj);
            }
        });
    }
    res.json(result);
    return false;
});

app.listen(80);