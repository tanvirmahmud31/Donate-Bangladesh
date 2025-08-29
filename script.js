document.addEventListener("DOMContentLoaded", function () {
    const historyBtn = document.getElementById("history-btn");
    const durationBtn = document.getElementById("duration-btn");

    // Button clicks
    if (historyBtn) {
        historyBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "history.html";
        });
    }

    if (durationBtn) {
        durationBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }

    // Page load অনুযায়ী active button set
    if (window.location.href.includes("index.html") || window.location.pathname === "/") {
        if (durationBtn) durationBtn.classList.add("bg-[#B4F461]");
        if (historyBtn) historyBtn.classList.remove("bg-[#B4F461]");
    } else if (window.location.href.includes("history.html")) {
        if (historyBtn) historyBtn.classList.add("bg-[#B4F461]");
        if (durationBtn) durationBtn.classList.remove("bg-[#B4F461]");
    }
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
