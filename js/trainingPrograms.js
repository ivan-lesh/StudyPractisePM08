let deleteProg = document.querySelectorAll('.close-min')
let progItems = document.querySelector('.hero__programs-content-items')
let deleteEx = document.querySelectorAll('.delEx')
let addEx = document.querySelectorAll('.addEx')

addEx.forEach((ex) => {
    ex.addEventListener('click', () => {
        let existingElement = document.querySelector('.empty-line')
        let copiedElement = existingElement.cloneNode(true);
        copiedElement.classList.remove('hide')
        let container = ex.closest('.modal-day-block')
        let div = ex.closest('.modal-day-line')
        container.appendChild(copiedElement)
        container.appendChild(div)
    })
})

deleteEx.forEach((ex) => {
    ex.addEventListener('click', () => {
        let close = ex.closest('.modal-day-line')
        let container = close.closest('.modal-day-block')
        container.removeChild(close)
        if (container.querySelectorAll('.modal-day-line').length < 2) {
            let day = container.closest('.modal-day')
            let days = container.closest('.modal-days')
            days.removeChild(day)
        }
    })
})

deleteProg.forEach((ex) => {
    ex.addEventListener('click', () => {
        if (confirm("Подтвердите удаление программы тренировок")) {
            let close = ex.closest('.hero__programs-content-item')
            progItems.removeChild(close)
        }
    })
})