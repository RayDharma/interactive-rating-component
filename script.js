const mainComponent = document.querySelector('.main-component');
const secondComponent = document.querySelector('.second-component');
const submitButton = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.rate-button');

submitButton.addEventListener('click', () => {
    secondComponent.classList.remove('hide');
    mainComponent.style.display = 'none';
    secondComponent.classList.add('mt-52');
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
        resetActive();
        rate.classList.add('active');
    }) 
})

const resetActive = () => {
    rates.forEach((rate) => {
        rate.classList.remove('active');
    })
}