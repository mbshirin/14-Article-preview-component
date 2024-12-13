const hidden_section = document.querySelector('.share-wrapper') 
hidden_section.style.display = 'none' 
const button = document.querySelector('.share')

button.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (hidden_section.style.display === 'none') {
        hidden_section.style.display = 'flex'
    }else{
        hidden_section.style.display = 'none'
    }
})