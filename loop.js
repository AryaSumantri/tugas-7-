const tunas_fc = {
    nama  : "arya",
    umur  : "18",
    posisi : "kiper" 
}

const ampure_fc = {
    nama  : "gun",
    umur  : "18",
    posisi : "pipot" 
}

const geledek_fc = {
    nama  : "hasan",
    umur  : "17",
    posisi : "anchor" 
}

const GTR_fc = {
    nama  : "HERMAN",
    umur  : "20",
    posisi : "flank kanan" 
}

const king_fc = {
    nama  : "HERMAN",
    umur  : "19",
    posisi : "flank kiri" 
}

const clubbola = [tunas_fc,ampure_fc,geledek_fc,GTR_fc,king_fc]
for (cb of clubbola) {
    console.log(cb)
}

for(cb in tunas_fc) {
    console.log(cb + '='+ tunas_fc[cb])
}

for(cb in ampure_fc) {
    console.log(cb + '='+ ampure_fc[cb])
}

for(cb in geledek_fc) {
    console.log(cb + '='+ geledek_fc[cb])
}

for(cb in GTR_fc) {
    console.log(cb + '='+ GTR_fc[cb])
}

for(cb in king_fc) {
    console.log(cb + '='+ king_fc[cb])
}
// const asal_mhs = {
//     arya: "lombok",
//     erik: "pontianak",
//     abil: "manado",
//     irsad: "jombang"
//     baihaqi:{
//         asal: "mojokarto",
//         jeniskelamin: "pria",
//         hobi:{
//             rumah: "nonton filem"
//             diluar: 'main bola'
//         }
//     }
// }

// asal_mhs["baihaqi"] = "mojokarto"
// asal_mhs["anadvi"] = "jombang"

// const nama_mhs = [
//     'hasan',
//     'yazid',
//     'hairil',
//     'nanto',
//     'budi'
// ]

// // for untuk array (for of)
// for (let nama of nama_mhs){
//     console.log(nama);
// }

// //for untuk objek (for in)
// for (let asal in asal_mhs)
//     console.log(asal_mhs[asal]);








// let angka = 1

// //do whail
// do {
//     console.log("while di eksekusi");
//     angka++;
// } while(angka == 2)


// //2 while
// while(angka == 2){
//     console.log("while di eksekusi");
//     angka++
// }