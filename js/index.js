const accountBalance = getInnerHTMLToNumber("balance");
console.log(accountBalance);
const donationSectionBtn = getElementById("donation");
const historyBtn = getElementById("history");

const donationSection = getElementById("donation-section");
const historySection = getElementById("history-section");


// const closeModal = document.getElementById("close-modal");

// noakhali section started
const noakhaliDonateBtn = getElementById("noakhali-donate-btn");

noakhaliDonateBtn.addEventListener("click", ()=>{
    let noakhaliDonationAmount = getInnerHTMLToNumber("noakhali-donation-amount");
    const noakhaliDonationInput = getInputElementById("noakhali-donation-input");

    inputValidation(noakhaliDonationInput, accountBalance);

    document.getElementById("balance").innerText -=  noakhaliDonationInput;

    let donateUpdate = noakhaliDonationInput + noakhaliDonationAmount;
    document.getElementById("noakhali-donation-amount").innerText = donateUpdate;

    historySection.innerHTML += `
        <div class="border-2 rounded-md mb-4 p-4">
            <h3 class="font-bold mb-3">${noakhaliDonationInput} taka donate for flood at Noakhali, Bangladesh</h3>
            <p>Date: ${Date()}</p>
        </div>
    `
})

// feni seciton started

const feniDonateBtn = getElementById("feni-donate-btn");

feniDonateBtn.addEventListener("click", ()=>{
    const feniDonationAmout = getInnerHTMLToNumber("feni-donation-amount");
    const feniDonationInput = getInputElementById("feni-donation-input");

    document.getElementById("balance").innerText -=  feniDonationInput;

    let donateUpdate = feniDonationInput + feniDonationAmout;
    document.getElementById("feni-donation-amount").innerText = donateUpdate;

    historySection.innerHTML += `
        <div class="border-2 rounded-md mb-4 p-4">
            <h3 class="font-bold mb-3">${feniDonationInput} taka donate for flood at Feni, Bangladesh</h3>
            <p>Date: ${Date()}</p>
        </div>
    `
})

// Quota donation section started

const quotaDonateBtn = getElementById("quota-donate-btn");

quotaDonateBtn.addEventListener("click", ()=>{
    const quotaDonationAmount = getInnerHTMLToNumber("quota-donation-amount");
    const quotaDonationInput = getInputElementById("quota-donation-input");

    document.getElementById("balance").innerText -=  quotaDonationInput;

    let donateUpdate = quotaDonationInput + quotaDonationAmount;
    document.getElementById("quota-donation-amount").innerText = donateUpdate;

    historySection.innerHTML += `
        <div class="border-2 rounded-md mb-4 p-4">
            <h3 class="font-bold mb-3">${quotaDonationInput} taka donate for the Quota injured, Bangladesh</h3>
            <p>Date: ${Date()}</p>
        </div>
    `
})


historyBtn.addEventListener("click", (event)=>{

    event.target.classList.add("rounded-md", "hover:bg-[#97d547]", "transition-colors", "duration-300", "bg-[#B4F461]", "font-bold", "rounded-md");

    donationSectionBtn.classList.remove("rounded-md", "hover:bg-[#97d547]", "transition-colors", "duration-300", "bg-[#B4F461]", "font-bold");

    showSection("history-section");
});

donationSectionBtn.addEventListener("click", (event)=>{
    event.target.classList.add("rounded-md", "hover:bg-[#97d547]", "transition-colors", "duration-300", "bg-[#B4F461]", "font-bold");
    
    historyBtn.classList.remove("rounded-md", "hover:bg-[#97d547]", "transition-colors", "duration-300", "bg-[#B4F461]", "font-bold");

    showSection("donation-section");
});
