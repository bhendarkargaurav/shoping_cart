let transactions = [];
let currentFilter = "all";

//Add Transaction
function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = +document.getElementById("amount").value;

    if (text === "" || amount === 0) return;

    const transaction = {
        id: Date.now(),
        text,
        amount
    };

    transactions.push(transaction);

    saveToLocalStorage();
    updateUI();

    // Clear inputs  
    document.getElementById("text").value = "";  //This finds the HTML element with id="text"
    document.getElementById("amount").value = "";
}

// Set Filter
function setFilter(type) {
    currentFilter = type;
    updateUI();
}

//  Save to LocalStorage
function saveToLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Load from LocalStorage
function loadFromLocalStorage() {
    const data = localStorage.getItem("transactions");
    if (data) {
        transactions = JSON.parse(data);
    }
}

// Update UI
function updateUI() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    //  Apply Filter
    let filtered = transactions;

    if (currentFilter === "income") {
        filtered = transactions.filter(t => t.amount > 0);
    } else if (currentFilter === "expense") {
        filtered = transactions.filter(t => t.amount < 0);
    }

    //  Render List
    filtered.forEach(t => {
        const li = document.createElement("li");
        li.innerText = `${t.text}: ₹${t.amount}`;

        const btn = document.createElement("button");
        btn.innerText = "X";

        //  Delete
        btn.onclick = () => {
            transactions = transactions.filter(item => item.id !== t.id);
            saveToLocalStorage();
            updateUI();
        };

        //  Color
        li.style.color = t.amount > 0 ? "green" : "red";

        li.appendChild(btn);
        list.appendChild(li);
    });

    // Balance
    const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
    document.getElementById("balance").innerText = balance;

    // Income & Expense
    const amounts = transactions.map(t => t.amount);

    const income = amounts
        .filter(a => a > 0)
        .reduce((acc, a) => acc + a, 0);

    const expense = amounts
        .filter(a => a < 0)
        .reduce((acc, a) => acc + a, 0);

    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = Math.abs(expense);
}

//  Initial Load
loadFromLocalStorage();
updateUI();