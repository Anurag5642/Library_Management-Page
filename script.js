// Get the form and table elements
const form = document.querySelector('form');
const table = document.querySelector('table');

// Create an empty array to store the books
let books = [];

// Add event listener to the form submit button
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the value of the input field
    let input = document.querySelector('input[type="text"]');
    let inputValue = input.value.trim();

    // Check if the input value is empty
    if (inputValue === '') {
        alert('Please enter a book title');
        return;
    }

    inputValue = inputValue.toUpperCase();

    let tab = document.getElementById("table");

    let tr = tab.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        const tdid = tr[i].getElementsByTagName('td')[0];
        let tdtitle = tr[i].getElementsByTagName('td')[1];
        let tdauthor = tr[i].getElementsByTagName('td')[2];

        if (tdtitle || tdauthor) {
            let titlevalue = tdtitle.textContent || tdtitle.innerHTML;
            let authorvalue = tdauthor.textContent || tdauthor.innerHTML;
            let idvalue = tdid.textContent || tdid.innerHTML;
            if (titlevalue.toUpperCase().indexOf(inputValue) > -1 || authorvalue.toUpperCase().indexOf(inputValue) > -1) {
                console.log(idvalue);
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }


    // Create a book object with the input value and add it to the books array

    // Clear the input field
    input.value = '';

    // Render the table with the updated books array
    // renderTable();
});