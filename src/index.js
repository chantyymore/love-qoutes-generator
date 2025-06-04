function generateQoute(event){
    event.preventDefault();
    let qouteElement = document.querySelector("#qoute");
    
    new Typewriter("#qoute", {
    strings:  "Qoute here..",
    autoStart: true,
    delay: 2,
    cursor:"",
    });


}

let qouteFormElement = document.querySelector("#qoute-generator-form");
qouteFormElement.addEventListener("submit", generateQoute);