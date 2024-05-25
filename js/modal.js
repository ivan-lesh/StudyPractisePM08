let blure = document.querySelector('.blure'); 
let modalTime = document.querySelectorAll('.modal-time')

modalTime.forEach((elem) => {
    elem.addEventListener('click', () => {
        modalTime.forEach((el) => {
            if (el.classList.contains('bg-orange')) {
                el.classList.remove('bg-orange');
            }
        })
        elem.classList.add('bg-orange');
    })
})

function openModal(name) {
    const modal = document.getElementById(name);
    blure.style.display = 'block';
    setTimeout(() => {
        blure.style.opacity = '50%';
    }, 1);
    modal.classList.add('active'); 
}

function closeModal(name) {
    const modal = document.getElementById(name);
    modal.classList.remove('active');
    blure.style.opacity = '0';
    setTimeout(() => {
        blure.style.display = 'none';
    }, 1000);
}

function closeBlure() {
    let allModals = document.querySelectorAll('.modal');
    if (allModals.length == 0) {
        allModals = document.querySelectorAll('.burger-menu');
    }
    blure.style.opacity = '0';
    setTimeout(() => {
        blure.style.display = 'none';
    }, 1000);
    allModals.forEach(function (modal) {
        if (modal.classList.contains('active')) {
            modal.classList.remove('active');  
        }
    })
}

function createModalDay(name) {
    let modal = document.getElementById(name);
    let buttonNew = modal.querySelector('.new-day')
    let existingElement = modal.querySelector('.empty-day');
    let copiedElement = existingElement.cloneNode(true);
    copiedElement.classList.remove('hide')
    let container = modal.querySelector('.modal-days')
    container.appendChild(copiedElement)
    container.appendChild(buttonNew)
}
