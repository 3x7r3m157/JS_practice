// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];
//
// function jsObjects1(arr) {
//     for (var i = 0 ; i < arr.length ; i ++) {
//         console.log('Name:', arr[i].name, '- Cohort:',  arr[i].cohort)
//     }
// }
//
// jsObjects1(students)

// let users = {
//     employees: [
//         {'first_name':  'Miguel', 'last_name' : 'Jones'},
//         {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
//         {'first_name' : 'Nora', 'last_name' : 'Lu'},
//         {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
//     ],
//     managers: [
//        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
//        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
//     ]
//  };
//
//  function jsObjects2(obj) {
//      for (var i = 0 ; i < users.employees.length; i ++) {
//          console.log(i + 1, users.employees[i].first_name, users.employees[i].last_name) ;
//      }
//      for (var i = 0 ; i < users.managers.length; i ++) {
//          console.log(i + 1, users.managers[i].first_name, users.managers[i].last_name) ;
//      }
//  }
//
//  jsObjects2(users)

//1

// console.log(hello);
// var hello = 'world';
//
//Prediction: c.log is undefined

//2

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
//
//Prediction: c.log is 'magnet'

//3

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//prediction: c.log is 'super cool'

//4

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

//prediction: c.log is 'chicken', undef

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//prediction: c.log is undef then 'fish'

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// console.log(makeDojo("Chicago"copy, 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
