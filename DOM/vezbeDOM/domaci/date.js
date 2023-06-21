// [0:22 AM, 16.6.2023] nikilx123: Do utorka ceprkajte date() sate u dane da pretvorimo, clock od 0 do 12 am pm
// [0:22 AM, 16.6.2023] nikilx123: Domaci koji nismo uradili i 5 zadataka bilo koji iz osn kursa uraditi na dom
// [0:23 AM, 16.6.2023] nikilx123: Ubacite 2 broja manji i veci i izbacite rezultate svega zbir kolicnik itd. Napraviti 5 funkcija za to

const flipperContainer = document.querySelector('.flipper_container')

const flipper = document.querySelector('.flipper')

const timeContainer = document.querySelector('.time_container')

let flipped = false

const fliping = (flipped) => {

    if (flipped){
        flipper.style.left = '60px'
        flipper.style.backgroundColor = '#FFF'
        flipperContainer.style.backgroundColor = '#0F0'
        timeContainer.style.width = '100px'
        return
    }

    flipper.style.left = '1px'
    flipper.style.backgroundColor = 'rgba(128, 128, 128, 0.582)'
    flipperContainer.style.backgroundColor = '#FFF'
    timeContainer.style.width = '0'

}

const generateTime = (container) => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let amOrPm = 'AM'

    let vreme = ''

    if(hours < 10)
        hours = '0' + hours

    if(hours > 12)
        hours = hours - 12
        amOrPm = 'PM'

    if(hours < 12)
        amOrPm = 'AM'

    if(minutes < 10)
        minutes = '0' + minutes

    if(seconds < 10)
        seconds = '0' + seconds

        vreme = `${hours}:${minutes}:${seconds}${amOrPm}`

        container.textContent = vreme

    return setTimeout(() => {
        generateTime(container)
    }, 1000)
}

generateTime(timeContainer)

flipper.addEventListener, flipperContainer.addEventListener('click', () => {


    flipped = !flipped

    fliping(flipped)
})