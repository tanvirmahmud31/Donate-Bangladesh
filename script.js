historyBtn= document.getElementById("history-btn")
durationBtn = document.getElementById("duration-btn")

historyBtn.addEventListener("click", function () {
    document.getElementById("all-section").style.display = "none";
    document.getElementById("history-section").style.display = "block";

    historyBtn.classList.add("bg-[#B4F461]");
    durationBtn.classList.remove("bg-[#B4F461]");

    


});

durationBtn.addEventListener("click", function () {
    document.getElementById("history-section").style.display = "none";
    document.getElementById("all-section").style.display = "block";

    durationBtn.classList.add("bg-[#B4F461]");
    historyBtn.classList.remove("bg-[#B4F461]");
});






function handleDonate(inputId, totalId) {
    const inputElement = document.getElementById(inputId);
    const totalElement = document.getElementById(totalId);

    const input = parseInt(inputElement.value);
    if (isNaN(input) || input <= 0) {
        alert("Please enter a valid donation amount");
        return;
    }


    // ---- Global coins update ----
    const coinsElement = document.getElementById("coins");
    let totalCoins = parseInt(coinsElement.innerText);

    if (isNaN(input) || input <= 0) {
        alert("Please enter a valid donation amount");
        return;
    }

    // প্রথমে check করবো input balance এর থেকে বড় কিনা
    if (input > totalCoins) {
        alert("You don't have enough balance to donate!");
        return;
    }

    // এখন safe হলে deduct করবো
    totalCoins -= input;
    coinsElement.innerText = totalCoins;

    const totalTk = Number(totalElement.innerText);
    const balance = input + totalTk;
    totalElement.innerText = balance;

    const card = totalElement.closest(".card"); 
    const title = card.querySelector("h1").innerText;

    const historySection= document.getElementById("history-section")

    const newHistory = document.createElement("div")

    newHistory.innerHTML=`
         <div class=" p-8 shadow-md rounded-2xl">
                <h1 class="text-xl font-bold mb-4">${balance} Taka ${title}</h1>
                <p>${new Date().toString()} (Bangladesh Standard Time)</p>
            </div>
    
    `
    historySection.appendChild(newHistory)

    inputElement.value = "";

}

// ✅ Attach events
document.getElementById("donate-btn1").addEventListener("click", function () {
    handleDonate("input-amount", "total1");
});

document.getElementById("donate-btn2").addEventListener("click", function () {
    handleDonate("input-amount2", "total2");
});

document.getElementById("donate-btn3").addEventListener("click", function () {
    handleDonate("input-amount3", "total3");
});
