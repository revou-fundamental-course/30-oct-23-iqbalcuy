function calculate() {
    let a = +parseInt(document.getElementById("t1").value);
    let b = +parseInt(document.getElementById("t2").value);
    let c = b*b;

    document.getElementById("result").value =(a/c).toPrecision(4);
}










// let saldoAwal = +prompt('masukan saldo awal')
// let saldoTambahan = +prompt('masukan saldo tambahn')
// let saldoAkhir = saldoAwal + saldoTambahan

// alert(`Nilai saldo akhir adalah ${saldoAkhir}`)


// let  hari = new Date().getDay()

// switch (hari) {
//     case 1: 
//         console.log('senin')
//         break;
//     case 2: 
//         console.log('selasa')
//         break;
//     case 3: 
//         console.log('rabu')
//         break;
//     case 4: 
//         console.log('kamis')
//         break;
//     case 5: 
//         console.log('jumat')
//         break;
//     case 6: 
//         console.log('sabtu')
//         break;
//     case 7: 
//         console.log('minggu')
//         break;

//     default:
//         console.log('itu bukan hari anjing')
//         break;
// }
// // console.log(hari)