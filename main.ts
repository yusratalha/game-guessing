import inquirer from "inquirer"

let todolist =[];
let condition = true;

console.log("welcome to yusra hanif todolist application");

while(condition){
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your  new task :"
    }
]);
todolist.push(addtask.task);
console.log(`${addtask.task} Task added in Todo-list successfully`);

let addmoretask =  await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",
        message: "do you want to add more task ?",
        default: "False",
    }
]);
condition = addmoretask.addmore    
}
console.log(`Your updated todolist: ${todolist}`);

     