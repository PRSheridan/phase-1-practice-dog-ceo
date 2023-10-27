console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => {
    images = document.getElementById("dog-image-container");
    breeds = document.getElementById("dog-breeds");

    fetch(imgUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.message.forEach((e) => {
            img = document.createElement('img');
            img.src = e;
            images.appendChild(img);
        });
    });

    fetch(breedUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (key in data.message) {
            li = document.createElement('li');
            li.textContent = key;
            li.className = li.textContent.slice(0, 1);
            breeds.appendChild(li);
        }
    });

    document.getElementById("dog-breeds").addEventListener('click', (event) => {
        event.target.style.color = 'red';
    });

    document.getElementById("breed-dropdown").addEventListener('change', () => {
        let liList = document.querySelectorAll('li');
        liList.forEach((e) => {
            //e.style.display = 'none';
            if(e.textContent.slice(0, 1) == document.getElementById("breed-dropdown").value) {
                console.log(e.textContent);
                //e.style.display = 'visible';
            };
        });
    });
});