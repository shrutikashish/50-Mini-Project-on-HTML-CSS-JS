const searchs = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
console.log(searchs.classList)
btn.addEventListener('click',()=>{
    searchs.classList.toggle('active')
    input.focus()
})