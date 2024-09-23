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


const accountBalance = getInnerHTMLToNumber("balance");

function sectionCalculator(id1, id2){
    const currentAmount = getInnerHTMLToNumber(id1);
    const inputAmount = getInputElementById(id2);

    if(isNaN(inputAmount) || inputAmount < 1 || inputAmount === ""){
        alert("Invalid input");
        return;

    } if(inputAmount > document.getElementById("balance").innerText){
        alert("insufficient balance");
        return;
    }

    document.getElementById("balance").innerText -= inputAmount;

    let donateUpdate = inputAmount + currentAmount;
    document.getElementById(id1).innerText = donateUpdate;
    modal.classList.add("modal-open");

    historySection.innerHTML += `
        <div class="border-2 rounded-md mb-4 p-4">
            <h3 class="font-bold mb-3">${inputAmount} taka donate for flood at Noakhali, Bangladesh</h3>
            <p>Date: ${Date()}</p>
        </div>
    `
}



