

// faq
// [... converst node list into the Array]
let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq => {
    let ques = faq.querySelector('.question-box');
    
    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})


// dish slider

let dishSlider = document.querySelector('.dish-slide');
let rotationVal = 0;

setInterval(() => {
    rotationVal += 120;
    dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
}, 3000)