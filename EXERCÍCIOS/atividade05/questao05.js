let count = 0;
const limit = 5;
const contacts = [];


while (count < limit) {

    count++;

    let contact = {
        name: prompt("Nome"),
        phone: prompt("Telefone"),
        age: prompt("Idade"),
        profession: prompt("Profissão")
    }

    alert(`${count} contatos inseridos.`);

    contacts.push(contact);
    
}

alert("O resultado está no console");

console.log(contacts);