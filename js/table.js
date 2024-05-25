let td = document.querySelectorAll('.td-isset');

td.forEach((elem) => {
    elem.addEventListener('click', () => {
        td.forEach((el) => {
            if (el.classList.contains('bg-light-gr')) {
                el.classList.remove('bg-light-gr');
            }
        })
        if (!elem.classList.contains('bg-light-gr')) {
            elem.classList.add('bg-light-gr')
            cancel.classList.remove('hide')
            choose.classList.add('hide')
            choosed.classList.remove('hide')
            emptyMark.classList.add('hide')
            issetMark.classList.remove('hide')
            editt.classList.remove('hide')
        }
    })
})

let cancel = document.getElementById('cancel')
let editt = document.getElementById('editt')
let choose = document.getElementById('choose')
let choosed = document.getElementById('choosed')
let emptyMark = document.getElementById('emptyMark')
let issetMark = document.getElementById('issetMark')
let canc = document.querySelector('#canc')
let sheduleDays = document.querySelectorAll('.hero__shedule-mobile-day')

sheduleDays.forEach((elem) => {
    elem.addEventListener('click', () => {
        sheduleDays.forEach((el) => {
            if (el.classList.contains('bg-orange')) {
                el.classList.remove('bg-orange');
                el.classList.remove('text-dark');
            }
        })
        elem.classList.add('bg-orange');
        elem.classList.add('text-dark');
    })
})

cancel.addEventListener('click', () => {
    td.forEach((elem) => {
        if (elem.classList.contains('bg-light-gr')) {
            elem.classList.remove('bg-light-gr'); 
            cancel.classList.add('hide')
            choose.classList.remove('hide')
            choosed.classList.add('hide')
            emptyMark.classList.remove('hide')
            issetMark.classList.add('hide')
            editt.classList.add('hide')
        }
    })
})

canc.addEventListener('click', () => {
    confirm("Подтвердите действие")
})