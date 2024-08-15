const cores = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Purple', 'Orange', 'Brown', 'Gray', 'White'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function() { 
    const random = Math.floor(Math.random() * cores.length);
    document.body.style.background = cores[random];
    document.getElementById('cor').innerHTML = cores[random];
}   );