const form = document.getElementById('clientForm');
const tableContainer = document.querySelector('.table-container');
const formContainer = document.querySelector('.form-container');
const tableBody = document.getElementById('tableBody');
const backButton = document.getElementById('backButton');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const note = document.getElementById('note').value;

    tableBody.innerHTML = `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${note}</td>
        </tr>
    `;

    formContainer.classList.add('hidden');
    tableContainer.classList.remove('hidden');
});

backButton.addEventListener('click', () => {

    tableContainer.classList.add('hidden');
    formContainer.classList.remove('hidden');

    form.reset();
});
