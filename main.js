if (window.localStorage.getItem("id") == undefined)
{
    window.localStorage.setItem("id", 1);
}
function loader(){
    for(i=1; i<100; i++){
        if(window.localStorage.getItem("Task" + i) == undefined){
            continue;
        }
        var task = window.localStorage.getItem("Task" + i);
        var desc = window.localStorage.getItem("Desc" + i);
        compo(task, desc, i);
    }
}
function send(){
    let Task = document.getElementById("task").value;
    let Desc = document.getElementById("desc").value;
    if(Task=="" || Desc==""){
        alert("Please enter some data");
	}
    else{
        var Id = window.localStorage.getItem("id");
        console.log(Id);
        document.getElementById("task").value = "";
		document.getElementById("desc").value = "";
        window.localStorage.setItem("Task" + Id, Task);
        window.localStorage.setItem("Desc" + Id, Desc);
        compo(Task, Desc, Id);
        Id++;
        window.localStorage.setItem("id", Id);
    }
}
function compo(task, desc, id){
    let div = document.createElement("div");
    div.id = id;
    let h1 = document.createElement("h1");
    let hr = document.createElement("hr");
    let h4 = document.createElement("h4");
    let button = document.createElement("button");
    button.innerHTML = "Completed!!";
    h1.innerHTML = task;
    h4.innerHTML = desc;
    button.onclick = function(){
        document.getElementById(id).style.display = "none";
		window.localStorage.removeItem("task" + id);
		window.localStorage.removeItem("desc" + id);
    }
    div.append(h1, hr, h4, button);
    document.getElementById("components").appendChild(div);
} 