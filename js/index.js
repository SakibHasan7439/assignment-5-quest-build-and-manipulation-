const accountBalance = getInnerHTMLToNumber("balance");
const donationSectionBtn = getElementById("donation");
const historyBtn = getElementById("history");

const donationSection = getElementById("donation-section");
const historySection = getElementById("history-section");
const modal = document.getElementById("my_modal_1");

// my_modal_1.showModal()

// noakhali section started
const noakhaliDonateBtn = getElementById("noakhali-donate-btn");

noakhaliDonateBtn.addEventListener("click", ()=>{
    let noakhaliDonationAmount = getInnerHTMLToNumber("noakhali-donation-amount");
    let noakhaliDonationInput = getInputElementById("noakhali-donation-input");

        if(isNaN(noakhaliDonationInput) || noakhaliDonationInput < 1 || noakhaliDonationInput === ""){
            alert("Invalid input");
            return;
    
        }else if(noakhaliDonationInput > accountBalance){
            alert("dontation amount cannot be greater then main balance");
            return;
        }


    document.getElementById("balance").innerText -=  noakhaliDonationInput;

    let donateUpdate = noakhaliDonationInput + noakhaliDonationAmount;
    document.getElementById("noakhali-donation-amount").innerText = donateUpdate;
    modal.classList.add("modal-open");

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
    
    if(isNaN(feniDonationInput) || feniDonationInput < 1 || feniDonationInput === ""){
        alert("Invalid input");
        return;

    }else if(feniDonationInput > accountBalance){
        alert("dontation amount cannot be greater then main balance");
        return;
    }

    document.getElementById("balance").innerText -=  feniDonationInput;

    let donateUpdate = feniDonationInput + feniDonationAmout;
    document.getElementById("feni-donation-amount").innerText = donateUpdate;
    modal.classList.add("modal-open");

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

    if(isNaN(quotaDonationInput) || quotaDonationInput < 1 || quotaDonationInput === ""){
        alert("Invalid input");
        return;

    }else if(quotaDonationInput > accountBalance){
        alert("dontation amount cannot be greater then main balance");
        return;
    }

    document.getElementById("balance").innerText -=  quotaDonationInput;

    let donateUpdate = quotaDonationInput + quotaDonationAmount;
    document.getElementById("quota-donation-amount").innerText = donateUpdate;
    modal.classList.add("modal-open");

    historySection.innerHTML += `
        <div class="border-2 rounded-md mb-4 p-4">
            <h3 class="font-bold mb-3">${quotaDonationInput} taka donate for the Quota injured, Bangladesh</h3>
            <p>Date: ${Date()}</p>
        </div>
    `
})


// modal close button 
const closeModal = getElementById("close-modal");
closeModal.addEventListener("click", ()=>{
    modal.classList.remove("modal-open");
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


// blog button
const blog = getElementById("blog");
blog.addEventListener("click", ()=>{
    window.location.href="blog.html";
})