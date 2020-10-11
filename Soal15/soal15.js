let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
    penulis: "John doe",
    tahunTerbit: 2020,
};

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"],
};

function gabungan(buku, dataBukuTambahan, warna) {
    return {
        ...buku,
        warnaSampul: [...buku.warnaSampul, ...warna],
        ...dataBukuTambahan,
    }
    
}

console.log(gabungan(buku, dataBukuTambahan, warna));