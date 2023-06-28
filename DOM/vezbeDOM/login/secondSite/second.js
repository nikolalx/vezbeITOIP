const inputPlataLucia = document.querySelector('#plata_lucia')

const inputPlataNikola = document.querySelector('#plata_nikola')

const inputNeocekivaniTrosak = document.querySelector('#neocekivani')

const outputTotal = document.querySelector('#totalni_iznos')

const inputKirija = document.querySelector('#kirija')

const inputRacuniL = document.querySelector('#racuni')

const inputKreditN = document.querySelector('#kredit')

const inputKreditnaKarticaOba = document.querySelector('#kreditna_kartica')

const inputVipL = document.querySelector('#vip_lucia')

const inputVipN = document.querySelector('#vip_nikola')

const inputGorivoL = document.querySelector('#gorivo')

const inputHranaN = document.querySelector('#hrana')

const inputTerapijaL = document.querySelector('#terapija')

const inputNetflixL = document.querySelector('#premium')

const inputRodjendaniL = document.querySelector('#rodjendani')

const outputNakonSkinutihTroskova = document.querySelector('#iznos_nakon_troskova')

const outputRaspoloziviTrosak = document.querySelector('#rezultat_trosak')

const btn = document.querySelector('#btn')

const form = document.querySelector('form')

const mesecGodinaDani = document.querySelector('#mesec_godina_dani')


//racuna Total
function racunajTotal(lucia, nikola, neocekivani, total) {
    return total.value = lucia + nikola + neocekivani
}

const racunajTrosak = (kirija, racuni, kredit, kreditnaK, vipL, vipN, gorivoL, hranaN, terapijaL, netflixL, rodjL, total, iznosNakonTroskova) => {
    iznosNakonTroskova.value = total - (kirija + racuni + kredit + kreditnaK + vipL + vipN + gorivoL + hranaN + terapijaL + netflixL + rodjL)


}

const raspoloziviTrosak = (trosakNakonSkidanja, raspoTrosak) => {
    if (trosakNakonSkidanja.value < 80000)
        raspoTrosak.value = trosakNakonSkidanja.value

    if (trosakNakonSkidanja.value > 80000)
        raspoTrosak.value = 80000
}

//racuna Total
form.addEventListener('submit', (event) => {
    event.preventDefault()
    racunajTotal(+inputPlataLucia.value, +inputPlataNikola.value, +inputNeocekivaniTrosak.value, outputTotal)

    racunajTrosak(+inputKirija.value, +inputRacuniL.value, +inputKreditN.value, +inputKreditnaKarticaOba.value, +inputVipL.value, +inputVipN.value, +inputGorivoL.value, +inputHranaN.value, +inputTerapijaL.value, +inputNetflixL.value, +inputRodjendaniL.value, outputTotal.value, outputNakonSkinutihTroskova)

    raspoloziviTrosak(outputNakonSkinutihTroskova, outputRaspoloziviTrosak)
})

