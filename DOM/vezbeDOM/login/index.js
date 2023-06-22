const body = document.body

const adviceContainer = document.querySelector('#login_content_advice')
const adviceText = document.querySelector('#login_content_advice_text')

const adviceChanger = document.querySelector('#login_content_advice_changer')

const generateAdvice = () => {
    const advice = [
        'Ne trci pred rudu!',
        'Dodjoh, videh, pobedih!',
        'Prvo skoci, pa reci hop!',
        'Ko pita, ne skita!',
        'Nema glupih pitanja, samo glupih odgovora!',
        'Ko drugome jamu kopa, sam u New Jersey!',
        'Ko rano rani, dve lopte ragbi!'
    ]

    return advice[Math.floor(Math.random() * advice.length)]
}


adviceChanger.addEventListener('cilck', () => {
    adviceText.textContent = generateAdvice()

    setTimeout(() => {
        
    }, 700)
})