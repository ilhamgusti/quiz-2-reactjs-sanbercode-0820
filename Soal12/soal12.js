class BangunDatar {
    constructor(nama = 'bangundatar') {
        this.nama = nama;
    }

    set luas(sisi) {
        return ""
    }
    get luas() {
        return ""
    }
    set keliling(sisi) {
        return ""
    }
    get keliling() {
        return ""
    }
}

class Lingkaran extends BangunDatar{
    constructor() {
        super("lingkaran");
        this._diameter;
        this._jari;
    }

    set jarijari(jarijari) {
        this._jari = jarijari;
        this._diameter = jarijari * jarijari;
    }

    get luas() {
        return Math.floor(this._diameter * 3.14);
    } 

    get keliling() {
        return Math.floor(2 * 3.14 * this._jari);
    }
}

class Persegi extends BangunDatar{
    constructor() {
        super("persegi");
        this._panjang;
    }
    set sisi(panjangSisi) {
        this._panjang = panjangSisi;
    }
    get luas() {
        return this._panjang * this._panjang;
    } 

    get keliling() {
        return 4 * this._panjang;
    }
}

const bangunDatar = new BangunDatar();
const lingkaran = new Lingkaran();
const persegi = new Persegi();

/** bangun datar */
console.log(bangunDatar);
console.log(bangunDatar.luas);
console.log(bangunDatar.keliling);

/** lingkaran */
console.log(lingkaran);
lingkaran.jarijari = 5;

console.log(lingkaran.luas);
console.log(lingkaran.keliling);

console.log(persegi);
persegi.sisi = 50;
console.log(persegi.luas);
console.log(persegi.keliling);