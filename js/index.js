
const donationSectionBtn = getElementById("donation");
const historyBtn = getElementById("history");

const donationSection = getElementById("donation-section");
const historySection = getElementById("history-section");
const modal = document.getElementById("my_modal_1");


// noakhali section started
const noakhaliDonateBtn = getElementById("noakhali-donate-btn");

noakhaliDonateBtn.addEventListener("click", ()=>{
    sectionCalculator("noakhali-donation-amount", "noakhali-donation-input");
})

// feni seciton started
const feniDonateBtn = getElementById("feni-donate-btn");

feniDonateBtn.addEventListener("click", ()=>{
    sectionCalculator("feni-donation-amount", "feni-donation-input")
})

// Quota donation section started
const quotaDonateBtn = getElementById("quota-donate-btn");

quotaDonateBtn.addEventListener("click", ()=>{
    sectionCalculator("quota-donation-amount", "quota-donation-input")

})

// modal close button 
const closeModal = getElementById("close-modal");
closeModal.addEventListener("click", ()=>{
    modal.classList.remove("modal-open");
})

// history section
historyBtn.addEventListener("click", (event)=>{

    event.target.classList.add("rounded-md", "hover:bg-[#97d547]", "transition-colors", "duration-300", "bg-[#B4F461]", "font-bold", "rounded-md");

    donationSectionBtn.classList.remove("rounded-md", "hover:bg-[#97d547]", "transition-colors", "duration-300", "bg-[#B4F461]", "font-bold");

    showSection("history-section");
});

// donation section
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