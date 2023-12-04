//Esetrcizio 1

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else {
            return `${otherUser.firstName} è più vecchio di ${this.firstName}`;
        }
    }
}

const user1 = new User("Mario", "Rossi", 30, "Milano");
const user2 = new User("Fabio", "Verdi", 45, "Torino");
const user3 = new User("Luca", "Bianchi", 25, "Roma");
const user4 = new User("Luigi", "Russo", 35, "Palermo");

const confrontoEtà = user1.compareAge(user4);
console.log(confrontoEtà);



//Esercizio 2
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherPet) {
        if (this.ownerName === otherPet.ownerName) {
            return true
        }
        else{
            return false
        }
    }
}

const pets = [];

function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

    displayPetList();
    resetForm();
}

console.log(pets)

function displayPetList() {
    const petListElement = document.getElementById('petList');
    petListElement.innerHTML = '';

    pets.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = ` ${pet.petName}`;
        petListElement.appendChild(listItem);
    });
}

function resetForm() {
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
}