let ayman = "18 years old"

ayman = null

console.log(ayman)

// arays
let studints = ['ayman', 'taha', 'harth', 'mustifa']
studints [3] = 'ahmed'
console.log(studints [0] )
// Concatenation ربط
let greeting = 2 + 2  + 'hello' + 2 * 4 + 6
console.log(greeting)
let name = 'ahmed'
console.log('welcome ' + name)
// عوامل الاسناد
let x = 5
x += 5
let y = 9
x += y
x /= 2
console.log(x)
    //عوامل المقارنة 
    aymans_age = 18
console.log('يساوي ' + aymans_age === 18)
let a = 10;
let b = '10';

console.log(a == b); // true
console.log(a === b); // false
console.log('لا يساوي' !== 18)
console.log(' ممكن تجي اكوبر او سااوي اكبر' + aymans_age > 18)
console.log('اصغر ممكن تجي صغر او يساوي' + aymans_age < 18 )
//العوامل المنطقية 
console.log('Logical Operators')
let goodatjs = true
let goodathtml = false
let canjoin = goodathtml && goodatjs
console.log(canjoin)



let goodatjs1 = true
let goodathtml1 = false
let canjoin1 = goodathtml1 || goodatjs1
console.log(canjoin1)



let goodatjs2 = true
let goodathtml2 = false
let canjoin2 = goodathtml2 && goodatjs2
console.log(!canjoin2)
console.log('ifstatmnt')
let mark = 50
// if
if(mark >= 80){
    console.log('very good')
} else if(mark >= 60){ 
    console.log('good')}
else if(mark >= 50){ console.log('disnt')}
 else {console.log('failed')}
//  العامل الثلاثي Ternary Operator

let result = mark >= 50 ? 'passed' : 'failed'
console.log(result)
let age = 17
let result1 = age >= 18 ? (mark >=50 ? 'yessss' : 'nope') : 'not passed'
console.log(result1)
// 04. التعبير الشرطي switch
let day = 3

switch(day){
    case 0:
        console.log('sunday')
        break
        case 1:
            console.log('monday')
            break
            case 2:
                console.log('tiusday')
        default:
               console.log('i dont know')
}
//for loop
for(let i = 0 ; i <= 10 ; i = i + 2) if(i % 2 === 0){console.log(i)}
num = 20
for(let x = 0 ; x <=10 ; x++){console.log(num / x)

}

for(let y = 1 ; y <= 3  ; y++ ){
    for(let j = 1 ; j < 6 ; j++) console.log(j)
} 
//while loop
i = 1
num = 4


while(i <= 10){console.log(num * i); i +=1}
i = 1
while(i <= 10){console.log(i) ; i += 1}
//العبور على عناصر المصفوفات

const names = [ 'ahmed', 'ayad', 'ayman', 'khaled'] 
for(let i = 3 ; i >=0 ; i -= 1 ){
    console.log(i, names[i])
}
let x = 0
while(x < names.length){console.log(x, names[x]) ; x++ }
//حلقة العبور for...in
//عم صحيح for of تقوم بقراءة القيم من المصفوفة، أي Value
//أما for in تقرأ المفاتيح أو دليل العناصر index ، أي ستعيد 0و1و2و3.. لنفس المثال.
const names = [ 'ahmed', 'ayad', 'ayman', 'khaled'] 
for( x in names){console.log(names [x])}
//حلقة العبور for...in or of
const names = [ 'ahmed', 'ayad', 'ayman', 'khaled'] 
for( x of names){console.log(x)}
//التوقف والمتابعة break...continue
let i = 0
while(i <= 10){i++ ; if(i === 3) continue ; console.log(i) ; 
}
//تدريب عملي
const i = [9, true , false , 4 , 'ayman', 'ayad']

for( let x in i){ if(i === String)console.log(i) ; else continue }

let cart = [5 ,5 , 10,21,32, 6]
let result = 0
for(x of cart){result += x }
console.log(result)


let rows = prompt('insirt the number of rows you want')
for(let row = 1 ; row <=rows ; row++){
   let stars = ' ';
    for(let x = 0 ; x < row; x++){stars += '*'
    } 
    console.log(stars)

}
//02. تعريف واستدعاء دالة
function list(){
    const lemon = ['ayman', 4 , 4 , 'ayad' , 'hello' , true];
   for (let x of lemon) {
        if (typeof x === 'string') console.log(x);
       }    
    }
   
    list();
    //03. المعاملات Parameters
function  hello(name){
    console.log('hello ' + name)
}
hello('ayman')

function aray(array, type){
    for(let itemx of array){if(typeof itemx === type)console.log(itemx)}}

aray(["hi", 4, 'how are you' , 'ayman', 5, 8, true ], 'string')
//04. المعاملات الافتراضية Default parameters
function sum(x , y = 0){console.log(x + y)}
sum()
//05. القيم أو الوسائط arguments

function sum(x , y){
    let total = 0 
    for( let num of arguments){total += num}
    return total
    }
    let result =  sum(4,4,4,4,4,)
    console.log(total)
    //المعامل rest
function tryrestsum(multiply , ...args){
    let total = 0;
    for(let num of args )total += num;
return multiply * total}
let result = tryrestsum(4,4,4,4,4,4)
console.log(result)
//المجال العام والمجال الخاص
let msg = 'hello'
function hello(){ msg = 'hi ayman'; console.log(msg)}
function bye(){msg = 'bye'; console.log("bye")
}
hello()
bye()
//Declaration في كل الرنامج
star()
stop()//خطأ
function star(){console.log("started")}



//Expressions تطبع بعد كتابتها فقط
let stop = function(){console.log("stopped")}
stop()
//let افضل من var ... var  تكسر قواعد المجالات
//تدريب عملي
function primenum(num){
    for(i = 2 ; i < num ; i++  ){
     if(num  % i === 0){return false;
    }
   
    
    } return num > 1
  }
  
  function primes(max){for( let i = 2 ; i < max ; i++){
    if(primenum(i)) console.log(i)
  }}
  //12. التعاود Recursion

function fact(n){
    return n === 0 ? 1 : n * fact(n - 1);
  }
  console.log(fact(3))
  //01. إضافة عنصر للمصفوفة
let list = ['c', 'd' ,'e', 'f', 'g',]
list[list.length] = 'h'
list.push('i')
list.unshift('a', 'b')
list.splice(1 ,1 , "cook" )

console.log(list)
//02. حذف عنصر من مصفوفة
let nums = [1,2,3,4,5]
nums.pop()
nums.shift()
nums.splice(1 ,1)
console.log(nums)
//03. إفراغ المصفوفة
let people = ['ayad', 'tuha', 'mustafa', 'khaled' ]
let humans = people
//it can be people = []
people.length = 0
console.log(people)
console.log(humans)
//تدريب عملي
let numbers = [1, 2, 3, 4, 5]

function opesite(array){
   let newarray = []; for( x in array){ newarray.unshift(array[x])}
   console.log(newarray)
   return newarray
}
opesite(numbers)
//05. التوابع في المصفوفات
let list = [5 , 16 , 130, 23, 45]
let thing = list.includes(5)
console.log(thing)
console.log(list.indexOf(130))
let result = list.find(function(list){return list > 5})
//can use filter above insted of find if we want more than one
console.log(result)
let index = list.findIndex(function(list){return list > 100})
console.log(index)
//06. الدوال السهمية
let log = (msg) => console.log("msg")
log()
let list = [5 , 16 , 130, 23, 45]

let result = list.find(elmnt =>  elmnt > 100)           //function(elmnt){return elmnt > 6} 

console.log(result)
//07. العبور على عناصر المصفوفة
let list = [5 , 16 , 130, 23, 45]
list.forEach((element , index) => console.log(element , index))
//08. ترتيب عناصر المصفوفات
let list = [5 , 16 , 130, 23, 45]
list.sort((a , b) => a - b)//عكس  b - a
console.log(list)
//02. الكائنات في JavaScript

let studint = {
    name: 'ahmed',
    age: 12,
    level: 6

}
console.log(studint)
//dot notation
console.log(studint.age)
//bracket notation
studint.leve = 7
reallevel = 'level'
console.log(studint[reallevel])
console.log('name')
//03. التوابع في الكائنات
let student = {
    name: 'ahmed',
    age: 12,
    level: 6,
    hello: function(){
        console.log(this.name + ' ' + this.age + ' ' + this.level)
    },
    pass: function() {
        this.age++;
        this.level++;
    }
};
student.pass()
console.log(student.name);
student.hello();
console.log(student.age)
//04. التابع الباني Constructor
function students (name , age , level){
    this.name = name
    this.age = age
    this.level = level
    this.hello = function(){console.log('hello' + ' ' + this.name + ' ' + "your age is " + ' ' + this.age )}
    pass = function(){this.age++; this.level++}
}
let ayman = new students('ayman' , 18 , 5)
console.log(ayman)
console.log(ayman.hello())// it can be in array
//01. كائن التاريخ Date
let mydate = new Date('2004-11-21 12:23:23');
let mydate1 = new Date('2004-11-21 12:23:23');

console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(mydate.getDate());
console.log(mydate.getHours());
console.log(mydate.getTime())//unix time seup
if(mydate.getTime === mydate1.getTime){console.log('equl')}
else {console.log('not equl')}
//02. التعابير النظامية Regular Expression
let ayman = 'hi how are you my name is ayman and my age is 18'
const new1 = /name/
console.log(new1.test(ayman))
const age1 = /age is [0-9]+/ 
console.log(age1.test(ayman))
const name1 = /name is ([a-zA-Z]+)/
console.log(name1.exec(ayman))
//try....catch
function sum(num1, num2){
   
    if(typeof num1 !== 'number') {throw new Error('this is not a number')}
    if(typeof num2 !== 'number') {throw new Error('this is not a number')}
 return num1 + num2
}
try {console.log(sum('a',1))
sum()
} catch (error){
    console.log('there are an error' , error)
}
//04. قراءة الملفات Files Reading
const fs = require('fs')

fs.readFile('./messages.txt' , 'utf8' , (error, data) =>{
    if(error){console.log(error)}
    else{let ayman = data.split(',')
        console.log(ayman)}
} )
//05. كتابة الملفات Files Writing
//to add use appendFile insted of writeFile
const fs = require('fs')
const ayman = ['message', 'message2', 'message3']
const messages = ayman.join(',')
//let content = 'hi do you have a massive juisy forarms'
fs.writeFile('./new.txt' , messages ,'utf8' , error =>{
    if(error){console.log(error)}
    else console.log('file is writen')}
        
 )
 //06. تعديل الملفات Files Editing
const fs = require('fs')
const ayman = ['message', 'message2', 'message3']
fs.rename('./new.txt' , 'new1.txt', error => {
    if(error){console.log(error)}
else{console.log("file renamed")}
}

)
//حذف
const fs = require('fs')
const ayman = ['message', 'message2', 'message3']
fs.unlink('./new1.txt', error => {
    if(error)console.log(error)
    else console.log('deleted')
})
//07. الإدخال والإخراج I/O
const redline = require('readline')
let rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 
rl.question('what is your name', answer =>{
    console.log('hello ' + answer)
    rl.close()
})