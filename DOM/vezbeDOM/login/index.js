// const adviceContainer = document.querySelector('#login_content_advice')
const adviceText = document.querySelector('#login_content_advice_text')

const adviceChanger = document.querySelector('#login_content_advice_changer')

const clockContainer = document.querySelector('#login_content_clock')

const locationContainer = document.querySelector('#login_content_location')

const form = document.querySelector('form')

const userNameInput = document.querySelector('#username')

const passwordInput = document.querySelector('#password')

const submit = document.querySelector('#submit')

const errorMessage = document.querySelector('#login_form_error_message')

const loginContentHeader = document.querySelector('#login_content_welcome_message')

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

const usersArr = [
    {
        username: 'marko123',
        password: 'admin123'
    },
    {
        username: 'MJ',
        password: 'lopta12'
    },
    {
        username: 'johndoe',
        password: 'znamprogramiranje123'
    }
]

adviceText.textContent = generateAdvice()


adviceChanger.addEventListener('click', () => {
    adviceText.style.animationName = 'showAdvice'
    adviceText.textContent = generateAdvice()

    setTimeout(() => {
        adviceText.style.animationName = 'none'
    }, 700)
})

const clockGenerator = (container) => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    let time = ''
    let amOrPm = 'AM'

    if (hours < 12)
        amOrPm = "AM"

    if (hours > 12)
        hours = hours - 12
        amOrPm = 'PM'


    if (hours < 10)
        hours = '0' + hours

    if (minutes < 10)
        minutes = '0' + minutes

    if (seconds < 10)
        seconds = '0' + seconds

    time = `${hours}:${minutes}:${seconds}${amOrPm}`

    container.textContent = time

    return setTimeout(() => {
        clockGenerator(container)
    }, 1000);

}

clockGenerator(clockContainer)


locationContainer.innerHTML = `
Beograd, ${new Date().getFullYear()}. <br>
Skupina entuzijasta fronendasa`

function isFormInvalid(username, password) {
    if (username.value.trim() === '')
        return true

    if (password.value.trim() === '')
        return true

    return false
}

function displayErrorMessage(username, password, errorMessageContainer, errorMessageText) {
    if (username.value.trim() === '')
        userNameInput.style.borderColor = "red"

    if (password.value.trim() === '')
        passwordInput.style.borderColor = 'red'

    errorMessageContainer.textContent = errorMessageText
    errorMessageContainer.style.color = 'red'
    errorMessageContainer.style.transition = 'all .3s ease'
    userNameInput.style.transition = 'all .3s ease'
    passwordInput.style.transition = 'all .3s ease'
    errorMessageContainer.style.opacity = '1'

    setTimeout(() => {
        userNameInput.style.borderColor = '#FFF'
        passwordInput.style.borderColor = '#FFF'
        errorMessageContainer.style.opacity = '0'
        errorMessageContainer.style.transition = 'all .3s ease'
        userNameInput.style.transition = 'all .3s ease'
        passwordInput.style.transition = 'all .3s ease'

    }, 2000);
}

function dobaDana(clockContainerChars, user){
    if(clockContainerChars.textContent.charAt(8) === 'P')
        return `Dobar dan, dobrodosao ${user.username}`

    if(clockContainer.textContent.charAt(8) === 'A')
        return `Dobro jutro, dobrodosao ${user.username}`
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let user = {}

    if (isFormInvalid(userNameInput, passwordInput)) {
        displayErrorMessage(userNameInput, passwordInput, errorMessage, 'Popunite sva polja')
        return
    }

    user = usersArr.find(el => el.username === userNameInput.value.trim() && el.password === passwordInput.value.trim())

    if (user === undefined) {
        displayErrorMessage(userNameInput, passwordInput, errorMessage, 'Ne postoji korisnik')
        return
    }

        loginContentHeader.textContent = dobaDana(clockContainer, user)

})