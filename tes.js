
var bateraiHp = 65
var statusHp = "hidup"
var wifi = false
var bluetooth = false
var whatsapp = "open"

// Bagaimana kondisi yang tepat untuk menghasilkan kata "wifi sedang hidup dan sedang membuka whatsapp" dengan variabel insialisasi diatas ?


// Bobot soal: 4



if (statusHp === "mati" && bateraiHp >= 90) {
    console.log("Hp sedang mati")
} else if (statusHp === "hidup" && whatsapp === "open") {
    if (wifi === false && bluetooth === true && whatsapp === "open") {
        console.log("Whatsapp sedang dibuka tapi bluetooth hidup")
    } else {
        console.log("wifi sedang hidup dan sedang membuka whatsapp")
    }
}

var jumlah = 0;

for (var i = 0; i <= 5; i++) {

    jumlah += i

}
console.log(luasSegitiga)


function luasSegitiga(alas = 4, tinggi = 8) {

    return 0.5 * alas * tinggi;

}
var a = 8

console.log(
    a == '8')

var mobil = {
    nama: "ferrari",
    warna: "merah",
    tahun: 1971,
    detailMobil: function () {
        var res = "ferrari ini berwarna merah"
        return res;
    }
}

console.log(this.detailMobil);


console.log(mobil.detailMobil);


// console.log(mobil[3].detailMobil);


console.log(mobil.detailMobil());



var barang = { nama: "lemari", "tinggi barang": "200cm", bahan: "kayu" }




// console.log(barang["tinggi_barang"])


// console.log(barang.tinggi_barang)


// console.log(barang[tinggi_barang])


console.log(barang["tinggi barang"])
