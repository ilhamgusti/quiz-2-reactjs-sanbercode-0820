// buatlah arrow function volume balok dan kubus, gunakan rest parameter di parameter functionnya. lalu tampilkan hasil perhitungannya dengan template literal

const balok = ({ panjang, tinggi}) => {
    return `luas balok dengan panjang:${panjang} & tinggi: ${tinggi} adalah =  ${panjang*tinggi}`
}

const kubus = ({sisi}) => {
    return `luas kubus dengan sisi: ${sisi} adalah = ${sisi*2}`
}

const dataBalok = {
    panjang: 10,
    tinggi:30,
}
const dataKubus = {
    sisi: 50,
}

console.log(balok({ ...dataBalok }));
console.log(kubus({ ...dataKubus }));