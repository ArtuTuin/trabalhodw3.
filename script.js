const button = document.getElementById('myButton');

button.addEventListener('mouseover', function() {
    console.log("Mouse está sobre o botão!");
});

button.addEventListener('mouseout', function() {
    console.log("Mouse saiu do botão!");
});
