// console.log("JavaScript connecting");
let option=prompt("Enter your choice: ");
let tasks=[];
while(true){

    if(option==1){
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Tasks for today:");
        for(val of tasks){
            console.log(val);
        };
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
    else if(option==2){
        let add=prompt("Enter task you want to add: ");
        tasks.push(add);
        console.log("Task Added");
    }
    else if(option==3){
        let cancel=prompt("enter value you want to delete");
        let flag=0;
        let ind;
        for(val of tasks){
            if(val==cancel){
                ind=tasks.indexOf(val);
                flag=1;
            }
        };
        if(flag!=1){
            console.log("Error!No Such Task")
        }
        else{
            tasks.splice(ind,1);
            console.log("Task Deleted")
        }
    }
    else if(option==4){
        console.log("quitting");
        break;
    }
    option=prompt("Enter your choice: ");
}