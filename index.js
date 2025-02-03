storedExpenses = [];
categories = [];
function activateMenu(id) {
    var newExpenseMenuButton = document.getElementById('newExpenseMenuButton');
    var historyMenuButton = document.getElementById('historyMenuButton');

    if(id == 'newExpenseMenuButton'){
        newExpenseMenuButton.classList.add('active');
        historyMenuButton.classList.remove('active');
    }

    if (id == 'historyMenuButton') {
        historyMenuButton.classList.add('active');
        newExpenseMenuButton.classList.remove('active');
    }
}

function showNewExpense() {
    activateMenu('newExpenseMenuButton');
    const newExpenseContainer = document.getElementById('new-expense');
    const historyContainer = document.getElementById('history');
    historyContainer.style.display = "none";
    newExpenseContainer.style.display = "block";
    showButtons();
}

function showHistory() {
    activateMenu('historyMenuButton');
    const newExpenseContainer = document.getElementById('new-expense');
    const historyContainer = document.getElementById('history');
    newExpenseContainer.style.display = "none";
    historyContainer.style.display = "block";

    //set select
    var monthSelect = document.getElementById('month-select');
    monthSelect.innerHTML = '';
    var currentMonth = (new Date()).toISOString().substr(0, 7);//.toLocaleDateString("de-DE", { month: 'long', year: 'numeric' });
    var months = storedExpenses.map(e => e.date.substr(0, 7));
    months.push(currentMonth);
    months = months.filter((v, i ,a) => a.indexOf(v) === i);
    for(let month of months){
        var option = document.createElement('option');
        option.innerHTML = month;
        monthSelect.appendChild(option);
    }
    monthSelect.value = currentMonth;
    monthSelect.onchange = function(e){
        showExpenses(e.target.value);
    }
    //show in UI
    showExpenses(currentMonth);
}

function showExpenses(month){
    var filteredExpenses = storedExpenses.filter(e => e.date.startsWith(month));
    filteredExpenses.sort((a, b) => a.date < b.date ? 1 : -1);
    const tableBody = document.getElementById('history-table-body');
    tableBody.innerHTML = '';
    for (let expense of filteredExpenses) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const date = (new Date(expense.date)).toLocaleDateString("de-DE", { month: '2-digit', day: '2-digit', year: '2-digit' });
        const amount = parseFloat(expense.amount).toLocaleString() + " " + (expense.currency == "EUR" ? "€" : "XAF");
        const code = expense.code;
        const info = expense.info
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        // div2.innerHTML = code;
        const span1 = document.createElement('span');
        span1.innerHTML = code + ": " + getCodeTitle(code);
        span1.classList.add('bold');
        div2.appendChild(span1);
        div3.innerHTML = info ? info : " - ";
        // div4.innerHTML = amount;
        const span3 = document.createElement('span');
        span3.innerHTML = date;
        span3.classList.add('small');
        span3.classList.add('italic');
        div4.appendChild(span3);
        const span4 = document.createElement('span');
        span4.innerHTML = amount;
        span4.classList.add('bold');
        span4.style.float = "right";
        div4.appendChild(span4);
        td1.appendChild(div2);
        td1.appendChild(div3);
        td1.appendChild(div4);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        // deleteButton.innerHTML = "X";
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 448 512');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute(
            'd',
            'M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z '
        );
        path.setAttribute(
            'fill',
            'white'
        );
        svg.appendChild(path);
        deleteButton.appendChild(svg);
        deleteButton.onclick = () => {
            var index = storedExpenses.findIndex(e => e.date == expense.date && e.code == expense.code && e.amount == expense.amount);
            if(index >= 0){
                storedExpenses.splice(index, 1);
                showExpenses(month);
            }
        }
        td2.appendChild(deleteButton);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableBody.appendChild(tr);
    }
}

function showAmountInputSection(show) {
    const currencySection = document.getElementById('currencySection');
    if (show) {
        currencySection.style.display = 'block';
    } else {
        currencySection.style.display = 'none';
    }
}

// Funktion zum Anzeigen der Kategorien
function showButtons() {
    // Kategorien anzeigen
    const buttonsContainer = document.getElementById('buttons');
    buttonsContainer.innerHTML = '';
    // Alte Zwischenkategorien entfernen
    const subButtonsContainer = document.getElementById('subButtons');
    subButtonsContainer.innerHTML = '';
    // Alte Unterkategorien entfernen
    const subSubButtonsContainer = document.getElementById('subSubButtons');
    subSubButtonsContainer.innerHTML = '';
    // Betrageingabe entfernen
    showAmountInputSection(false);

    // Unterkategorien und Zwischenkategorien anzeigen
    for (const category of categories) {

        const button = document.createElement('button');
        button.textContent = category.code;
        button.onclick = function () {
            selectCategory(category.code, button); // Kategorie anklicken
        };

        const subtitleSpan = document.createElement('span');
        subtitleSpan.classList.add('subtitle');
        subtitleSpan.textContent = category.title;

        button.appendChild(subtitleSpan); // Untertitel zur Schaltfläche hinzufügen

        buttonsContainer.appendChild(button);
    }
}

// Funktion zum Anzeigen der Zwischenkategorien
function selectCategory(category, buttonElement) {
    var categoryIsActive =  buttonElement.classList.contains('active');

    // Alle Kategorien zurücksetzen (A bis L)
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
        button.classList.remove('active'); // Entfernen der Hervorhebung
        button.style.display = categoryIsActive ? "block" : "none";
    });

    // Die angeklickte Hauptschaltfläche hervorheben bzw. abwählen
    if(!categoryIsActive){
        buttonElement.classList.add('active');
        buttonElement.style.display = "block";
    }

    // Zwischenkategorien zurücksetzen
    const subButtonsContainer = document.getElementById('subButtons');
    subButtonsContainer.innerHTML = ''; // Alte Zwischenkategorien entfernen

    // Unterkategorien und Zwischenkategorien anzeigen
    if(!categoryIsActive){
        const subCategories = categories.find(x => x.code == category).subCategories;
        for (const subCategory of subCategories) {
            const subButton = document.createElement('button');
            subButton.textContent = subCategory.code;
            subButton.onclick = function () {
                selectSubCategory(category, subCategory.code, subButton); // Zwischenkategorie anklicken
            };

            const subtitleSpan = document.createElement('span');
            subtitleSpan.classList.add('subtitle');
            subtitleSpan.textContent = subCategory.title;

            subButton.appendChild(subtitleSpan); // Untertitel zur Schaltfläche hinzufügen

            subButtonsContainer.appendChild(subButton);
        }
    }

    // Unterkategorien Container leeren
    document.getElementById('subSubButtons').innerHTML = '';

    showAmountInputSection(false);
}

// Funktion zum Anzeigen der Unterkategorien, nachdem eine Zwischenkategorie ausgewählt wurde
function selectSubCategory(category, subCategoryKey, buttonElement) {
    var subCategoryIsActive = buttonElement.classList.contains('active');

    // Alle Zwischenkategorien zurücksetzen
    const subButtons = document.querySelectorAll('#subButtons button');
    subButtons.forEach(button => {
        button.classList.remove('active'); // Entfernen der Hervorhebung
        button.style.display = subCategoryIsActive ? "block" : "none";
    });

    // Die angeklickte Zwischenkategorie hervorheben bzw. abwählen
    if (!subCategoryIsActive) {
        buttonElement.classList.add('active');
        buttonElement.style.display = "block";
    }

    // Unterkategorien anzeigen
    const subSubButtonsContainer = document.getElementById('subSubButtons');
    subSubButtonsContainer.innerHTML = ''; // Alte Unterkategorien entfernen

    if(!subCategoryIsActive){
        const subSubCategories = categories.find(x => x.code == category).subCategories.find(x => x.code == subCategoryKey).subCategories;
        subSubCategories.forEach(subSubCategory => {
            const subSubButton = document.createElement('button');
            subSubButton.textContent = subSubCategory.code;

            const subtitleSpan = document.createElement('span');
            subtitleSpan.classList.add('subtitle');
            subtitleSpan.textContent = subSubCategory.title;

            subSubButton.appendChild(subtitleSpan); // Untertitel zur Schaltfläche hinzufügen
            subSubButton.onclick = function () {
                selectSubSubCategory(subSubCategory.code, subSubButton); // Unterkategorie anklicken
            };
            subSubButtonsContainer.appendChild(subSubButton);
        });
    }

    showAmountInputSection(false);
}

// Funktion zum Anzeigen des Eingabebereichs für Währung und Betrag
function selectSubSubCategory(subCategory, subButtonElement) {
    var activate = !subButtonElement.classList.contains('active');

    showAmountInputSection(activate);
    window.selectedSubCategory = activate ? subCategory : ""; // Speichern der Zwischen- oder Unterkategorie

    // Alle Unterkategorien zurücksetzen
    const subButtons = document.querySelectorAll('#subSubButtons button');
    subButtons.forEach(button => {
        button.classList.remove('active'); // Entfernen der Hervorhebung
        button.style.display = activate ? "none" : "block";
    });

    // Die angeklickte Unterkategorie hervorheben bzw. abwählen
    if (activate) {
        subButtonElement.classList.add('active');
        subButtonElement.style.display = "block";
    }
}

// Funktion zum Speichern der Eingaben und Erstellen der CSV-Datei
function submitExpense() {
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    const info = document.getElementById('info').value;

    if (!amount) {
        alert("Bitte einen Betrag eingeben!");
        return;
    }

    var now = new Date();
    storedExpenses.push({ date: now.toISOString(), code: window.selectedSubCategory, amount, currency, info });
    localStorage.setItem("entries", JSON.stringify(storedExpenses));

    document.getElementById('amount').value = "";
    showButtons();
    const snack = document.getElementById('expense-saved-snack');
    snack.style.display = 'inline-flex';
    setTimeout(() => {
        snack.style.display = 'none';
    }, 3000);
}

// Funktion zum Erstellen einer CSV-Datei
function generateCSV(data) {
    let csv = 'Kategorie,Währung,Betrag\n';
    data.forEach(row => {
        csv += row.join(',') + '\n';
    });
    return csv;
}

// Funktion zum Herunterladen der CSV-Datei
function downloadCSV(content, filenameAppendix = "") {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) { // Feature-Check
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'ausgaben' + filenameAppendix + '.csv');
        link.click();
    }
}

function exportSelectedMonth(){
    var monthSelect = document.getElementById('month-select');
    var filteredExpenses = storedExpenses.filter(e => e.date.startsWith(monthSelect.value));
    filteredExpenses.sort((a, b) => a.date < b.date ? 1 : -1);
    
    let csv = 'Datum;Code;Bezeichnung;Name;Info;Ausgang;Währung\n';
    filteredExpenses.forEach(expense => {
        const date = (new Date(expense.date)).toLocaleDateString("de-DE", { month: '2-digit', day: '2-digit', year: '2-digit' });
        csv += date + ";" + expense.code + ";" + getCodeTitle(expense.code) + ";;" + expense.info + ";" + parseFloat(expense.amount).toLocaleString() + ";" + expense.currency + '\n';
    });
    downloadCSV(csv, monthSelect.value);
}

function getCodeTitle(code){
    const category = code.substr(0, 1);
    const subCategory = code.substr(0, 2);
    return categories.find(x => x.code == category).subCategories.find(x => x.code == subCategory).subCategories.find(x => x.code == code).title;
}

window.onload = () => {
    var storedExpensesString = localStorage.getItem("entries");
    if (storedExpensesString) {
        storedExpenses = JSON.parse(storedExpensesString);
        storedExpenses.sort((a, b) => a.date < b.date ? 1 : -1);
    }
    fetch("./categories.json")
        .then(res => res.json())
		.then(res => {
            categories = res;
            showNewExpense();
        });
};