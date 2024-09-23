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




