function getInputElementById(id){
    const inputValue = document.getElementById(id);
    return parseFloat(inputValue.value);
}


// function getInputValueById(id){
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber;
// }

// function getElementById(id){
//     let innerText = document.getElementById(id).innerText;
//     return innerText;
// }

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