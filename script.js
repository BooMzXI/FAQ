const item = document.querySelectorAll('.acc a');
const credit = document.getElementById('Credit');

item.forEach(items => items.addEventListener('click', () => {
    items.classList.toggle('active')
    items.nextElementSibling.classList.toggle('active')
}))

credit.addEventListener('click', () => {
    location.href = 'https://www.edureka.co/blog/interview-questions/javascript-interview-questions/'
})