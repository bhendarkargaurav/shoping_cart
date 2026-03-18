let transactions = [];

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = +document.getElementById("amount").value;

    if(text === "" || amount === 0) return;

    const transaction = {
        id: Date.now(),
        text,
        amount
    };

    transactions.push(transaction);

    updateUI();

    // Clear inputs
    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}


function updateUI() {
    const list = document.getElementById("list");
    list.innerHTML = "";
}

transactions.forEach(t => {
    const li = document.createElement("li");
    li.innerText = `${t.text}: ₹${t.amount}`;

    const btn = document.createElement("button");

    btn.innerText = "X";

    btn.onclick = () => {
        transactions = transactions.filter(item => item.id !== t.id);
        updateUI();
    }

    li.appendChild(btn);
    list.appendChild(li);

    const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
    document.getElementById("balance").innerText = balance;
});

    function updateUI() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.innerText = `${t.text}: ₹${t.amount}`;

        const btn = document.createElement("button");
        btn.innerText = "X";

        btn.onclick = () => {
            transactions = transactions.filter(item => item.id !== t.id);
            updateUI();
        }

        li.appendChild(btn);
        list.appendChild(li);
    });

    const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
    document.getElementById("balance").innerText = balance;
}