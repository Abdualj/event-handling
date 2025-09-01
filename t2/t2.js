// Restaurant data array (already given in your t2.js)
const restaurants = [
  {
    _id: "65ddff4bdc3a7346c5e7b30e",
    name: "Mama Pizza",
    address: "Testikuja 5",
    postalCode: "00100",
    city: "Helsinki",
    phone: "0401234567",
    company: "Pizza Oy"
  },
  {
    _id: "65ddff4bdc3a7346c5e7b30f",
    name: "Sushi House",
    address: "Kalasatama 10",
    postalCode: "00580",
    city: "Helsinki",
    phone: "0507654321",
    company: "Sushi Oy"
  },
  {
    _id: "65ddff4bdc3a7346c5e7b310",
    name: "Burger King",
    address: "Burgerkatu 3",
    postalCode: "33100",
    city: "Tampere",
    phone: "0301122334",
    company: "Burger Oy"
  }
];

// Sort restaurants alphabetically by name
const sortedRestaurants = [...restaurants].sort((a, b) =>
  a.name.localeCompare(b.name, 'fi')
);

// DOM references
const tbody = document.getElementById('restaurant-body');
const dialog = document.getElementById('restaurant-dialog');
const modalContent = dialog.querySelector('.modal-content');

// Render restaurants into the table
function renderRestaurants() {
  tbody.innerHTML = '';
  sortedRestaurants.forEach(rest => {
    const tr = document.createElement('tr');
    tr.dataset.id = rest._id;

    const nameTd = document.createElement('td');
    nameTd.textContent = rest.name;
    nameTd.classList.add('name');

    const addrTd = document.createElement('td');
    addrTd.textContent = rest.address;

    tr.appendChild(nameTd);
    tr.appendChild(addrTd);
    tbody.appendChild(tr);
  });
}
renderRestaurants();

// Handle clicks for highlighting + modal
tbody.addEventListener('click', (e) => {
  const row = e.target.closest('tr');
  if (!row) return;

  // Remove highlight from all names
  tbody.querySelectorAll('td.name').forEach(td => td.classList.remove('highlight'));

  // Add highlight to this row's name
  const nameCell = row.querySelector('td.name');
  nameCell.classList.add('highlight');

  // Find restaurant object
  const id = row.dataset.id;
  const rest = sortedRestaurants.find(r => r._id === id);

  // Fill modal content
  modalContent.innerHTML = `
    <h2>${rest.name}</h2>
    <dl class="modal-grid">
      <dt>Address</dt><dd>${rest.address}</dd>
      <dt>Postal code</dt><dd>${rest.postalCode}</dd>
      <dt>City</dt><dd>${rest.city}</dd>
      <dt>Phone</dt><dd>${rest.phone}</dd>
      <dt>Company</dt><dd>${rest.company}</dd>
    </dl>
  `;

  dialog.showModal();
});
