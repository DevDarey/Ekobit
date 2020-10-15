window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
let heading = document.querySelector('#change_heading').textContent = "Hello World"
let boxes = document.querySelectorAll('section')
for(let i =0; i < boxes.length; i++){
    boxes[i].addEventListener('onmousehover',(e)=>{
        e.target.style.color = 'brown'
    })
}

