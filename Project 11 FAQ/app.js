const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click',()=> {
        console.log(toggle.parentNode.classList)
        toggle.parentNode.classList.toggle('active')
    })
})