const randomDogBtn = document.getElementById('randomDogBtn');
const dogImageDiv = document.getElementById('dogImage');
const breedInput = document.getElementById('breedInput');
const searchBtn = document.getElementById('searchBtn');
const breedImageDiv = document.getElementById('breedImage');

//obtener imagen aleatoria
function getRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        dogImageDiv.innerHTML = `<img src="${data.message}" alt="Perro Aleatorio">`;
    })
    .catch(error => console.error('Error:', error));
}

//funcion para buscar img de una raza especifica
function searchDogByBreed() {
    const breed = breedInput.value.toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => {
        if(data.message) {
            breedImageDiv.innerHTML = `<img src="${data.message}" alt="Perro de raza ${breed}">`;
        }
    })
    .catch(error => console.error('Error:', error));
}

//eventos a los botones
randomDogBtn.addEventListener('click', getRandomDog);
searchBtn.addEventListener('click', searchDogByBreed);