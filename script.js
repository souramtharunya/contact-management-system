let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function addContact() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("Please enter details");
    return;
  }

  contacts.push({ name, phone });
  localStorage.setItem("contacts", JSON.stringify(contacts));

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";

  displayContacts();
}

function displayContacts() {
  let list = document.getElementById("contactList");
  list.innerHTML = "";

  contacts.forEach((c, index) => {
    list.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.phone}</td>
        <td><button onclick="deleteContact(${index})">Delete</button></td>
      </tr>
    `;
  });
}

function deleteContact(index) {
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts();
}

function searchContact() {
  let value = document.getElementById("search").value.toLowerCase();

  let filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(value)
  );

  let list = document.getElementById("contactList");
  list.innerHTML = "";

  filtered.forEach((c, index) => {
    list.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.phone}</td>
        <td><button onclick="deleteContact(${index})">Delete</button></td>
      </tr>
    `;
  });
}

displayContacts();