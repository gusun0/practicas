//const grandparent = document.getElementById('grandparent-id');

const grandparent = document.querySelector('#grandparent-id');

//const parents = Array.from(document.getElementsByClassName('parent'));

const parents = document.querySelector('.parent');


//changeColor(grandparent);
changeColor(parents);
//parents.forEach(changeColor);

function changeColor(element) {
 element.style.backgroundColor = "#333";
}




