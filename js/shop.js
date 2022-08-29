// ISOTOPE

// let btns = document.querySelector('#shop .filter button');

// btns.addEventListener('click', (e) => {
//     console.log('teste');
//     // document.querySelectorAll('button.button-filter').classList.remove('active');
//     e.target.classList.add('active');
//     console.log(e.target);

//     let selector = e.target.getAttribute('data-filter');
//     document.querySelector('#shop .content-shop .grid').isotope({filter: selector})

//     console.log("clicado");
// })

// window.onload = () => {
//     document.querySelector('#shop .content-shop .grid').isotope({filter: "*"})
// }

let btns = $('#shop .filter button');

btns.on('click', (e) => {
    $('#shop .filter button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('#shop .grid').isotope({filter: selector})

})

window.onload = () => {
    $('#shop .grid').isotope({filter: "*"})
}
