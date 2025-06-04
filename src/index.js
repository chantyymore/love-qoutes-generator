function displayQoute(response){
    console.log("poem generated...");
    new Typewriter("#qoute", {
    strings:  response.data.answer,
    autoStart: true,
    delay: 2,
    cursor:"",
    });
}

function generateQoute(event){
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instruction");
    //build the API URL
    let apiKey ="6b534oeab5dabbea88bbtf6452c02346";
    let prompt=`please generate a love qoute about ${instructionInput.value}`;
    let context="Please make it sweet and short, maximus 4 lines, make a caption written SheCodes AI and it must have html strong element and at the bottom";
    let apiURL =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log("generating poem...");
    //make a call to the API
    axios.get(apiURL).then(displayQoute);
}

let qouteFormElement = document.querySelector("#qoute-generator-form");
qouteFormElement.addEventListener("submit", generateQoute);