const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('shcool_databace.db'); 
add = 'a'
del = 'd'
edit = 'u'
show = 's'
const prompt = require('prompt-sync')({sigint: true});
console.log('chose the operation \n to add press a \n to delete press d \n to edit press u \n to show press s:')
const userinput = prompt()
if(userinput == add){console.log('insert the following info: ');
const  s_id =  prompt('studenst id: ')
const name = prompt('name: ')
const last_name = prompt('last name: ')
const age = prompt('age: ')
const s_class = prompt('class: ')
const date_of_regestration = prompt('date of regestration: ')
console.log('arabic = 1111 \n english = 2222 \n math = 3333 \n computer = 4444')
const lessonid = prompt('lesson number: ') 
if (lessonid !== '1111' && lessonid !== '2222' && lessonid !== '3333' && lessonid !== '4444') {
  console.log('Invalid lesson ID');
  db.close(function(err) {
  if (err) {
  return console.log(err.message);
  }
  console.log('Database connection closed');
})};
db.run('INSERT INTO students(studentid, first_name, last_name, age ,class ,date_of_registration, lessonid ) VALUES(?, ?, ?, ?, ?, ?, ?)',
 [s_id, name, last_name, age, s_class, date_of_regestration, lessonid], function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log('student added secsusfully');
});
}
else if(userinput == del){const studentid = prompt('insert student id: ')

db.get('SELECT * FROM students WHERE studentid = ?', studentid, function(err, row){
  if (err) {
  return console.log(err.message);
  }
  if(!row){
  return console.log('Error: Student ID not found in database');
  }
  db.run('DELETE FROM students WHERE studentid = ?', studentid , function(err) {
  if (err) {
  return console.log(err.message);
  }
  console.log('student deleted successfully');
  });
  });}
  else if(userinput == edit){
    const s_id = prompt('Enter student ID: ');
    db.get('SELECT * FROM students WHERE studentid = ?', [s_id], function(err, row) {
    if (err) {
    return console.log(err.message);
    }
    if (!row) {
    console.log('Student not found');
    } else {
    console.log('Insert the following info:');
    const name = prompt('First name: ');
    const last_name = prompt('Last name: ');
    const age = prompt('Age: ');
    const s_class = prompt('Class: ');
    const date_of_regestration = prompt('Date of registration: ');
    db.run('UPDATE students SET first_name = ?, last_name = ?, age = ?, class = ?, date_of_registration = ? WHERE studentid = ?',
    [name, last_name, age, s_class, date_of_regestration, s_id],
    function(err) {
    if (err) {
    return console.log(err.message);
    }
    console.log('Student edited successfully');
    });
    }
    });
    }
 else if(userinput == show){
  const studentid = prompt('insert student id: ')
  db.get('SELECT * FROM students WHERE studentid = ?', studentid , function(err, row){
  if (err) {
  return console.log(err.message);
  }
  if(row){
  console.log(row);
  } else {
  console.log('Student not found');
  }
  });
  db.close();
  }