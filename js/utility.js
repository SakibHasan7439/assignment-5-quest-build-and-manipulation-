function getInputElementById(id){
    const inputValue = document.getElementById(id);
    return parseFloat(inputValue.value);
}

function getInnerHTMLToNumber(id){
    const innerValue = document.getElementById(id);
    return parseFloat(innerValue.innerText);
}

function getElementById(id){
    return document.getElementById(id);
}

function showSection(id){
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    return document.getElementById(id).classList.remove("hidden");
}

// validation input
function inputValidation(userInput, mainBalance){
    if(isNaN(userInput) || userInput < 1 || userInput === ""){
        alert("Invalid input");
        return;

    }else if(userInput > mainBalance){
        alert("dontation amount cannot be greater then main balance");
        return;
    }
    
}


