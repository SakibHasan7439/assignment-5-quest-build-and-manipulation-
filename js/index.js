const accountBalance = getInnerHTMLToNumber("balance");
const donationSectionBtn = getElementById("donation");
const historyBtn = getElementById("history");

const donationSection = getElementById("donation-section");
const historySection = getElementById("history-section");

// const feniDonationAmout = getInnerHTMLToNumber("feni-donation-amount");
// const feniDonateBtn = document.getElementById("feni-donate-btn");
// const feniDonattionInput = getInputElementById("feni-donation-input");

// const quotaDonationAmount = getInnerHTMLToNumber("quota-donation-amount");
// const quotaDonationInput = getInputElementById("quota-donation-input");
// const quotaDonateBtn = document.getElementById("quota-donate-btn");
// const closeModal = document.getElementById("close-modal");


// noakhali section
const noakhaliDonateBtn = document.getElementById("noakhali-donate-btn");

noakhaliDonateBtn.addEventListener("click", ()=>{
    let noakhaliDonationAmount = getInnerHTMLToNumber("noakhali-donation-amount");
    const noakhaliDonationInput = getInputElementById("noakhali-donation-input");

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