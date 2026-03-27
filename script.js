console.log("Script started");

function start() {
    console.log("click");

    //1. Create a heading
    let heading = document.createElement("h1");

    // 2. Set texts and styles
    heading.innerText = "Attendance";
    heading.style.color = "Aqua";
    heading.style.textDecoration = "underline";

    // 3. Add the heading to the page
    document.body.appendChild(heading);

    let userName = prompt("What is your name?");
    let userLastname = prompt("What is your last name?")
    console.log(userName);
    console.log(userLastname);
    addName(userName, userLastname);
}

function addName(newName, userLastName){
    // 1. create h2
    let h2 = document.createElement("h2");
    
    //2. set styles and texts
    h2.innerText = userLastName + ", " + newName;
    h2.style.color = "Red";
    h2.style.fontStyle = "italic";
    document.body.appendChild(h2);
}