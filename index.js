const switchbtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");
let value = "";
switchbtn.addEventListener("click", ()=>{
    if(switchbtn.checked == true){
        document.body.setAttribute("data-theme","dark");
    }
    else{
        document.body.setAttribute("data-theme", "");
    }
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    // Handle number keys and operators
    if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
        value += key;
        display.value = value;
    }
    
    // Handle Enter key for "="
    if (key === "Enter" || key === "=") {
        if (value.length != 0) {
            let newval = eval(value);
            value = newval;
            display.value = value;
        }
    }
    
    // Handle Escape key for "C" (clear)
    if (key === "Escape" || key === "C" || key === "c") {
        value = "";
        display.value = value;
    }
    
    // Handle Backspace for removing the last character
    if (key === "Backspace") {
        value = value.slice(0, -1);
        display.value = value;
    }
});


input.forEach((e)=>{
    e.addEventListener("click", (event)=>{
        if(event.target.value == "="){
            if(value.length != 0){
                let newval = eval(value);
                value = newval;
                display.value = value;
            }
        }else if(event.target.value == "C"){
            value = "";
            display.value = value;
        }else if(event.target.value == "switch"){
        }else{
            value += event.target.value;
            display.value = value;
        }

        if(!event.target.classList.contains("switch")){
            event.target.classList.add("active");
            setTimeout(()=>{
                event.target.classList.remove("active");
            },400);
        }
    });
});
