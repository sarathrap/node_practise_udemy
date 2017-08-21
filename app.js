console.log('App Starting app.js');
const fs = require('fs');
const os = require('os');
var user = os.userInfo();

var notes = require('./notes.js');
var res = notes.addNote();
console.log('Added Log');

var ss= notes.Addsum(1,2);
console.log('The sum is ' + ss);

// fs.appendFile('sample.txt',`Hello ${user.username}! your age is ${notes.age}` ,function(err)
// {
//     if(err) 
//         {
//             console.log('unable to open');
//         }
// }
// );