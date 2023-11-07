// ini adalah fungsi hitung yang akan dimasukan ke button submit
function itung() {
    //mendeklarasikan variabel berat badan yang mengambil data dari id beratBadan pada input
    let beratBadan = document.getElementById('beratBadan').value
    //mendeklarasikan variabel tinggi badan yang mengambil data dari id tinggiBadan pada input
    let tinggiBadan = document.getElementById('tinggiBadan').value
    //mendeklarasikan variabel usia yang mengambil data dari id usia pada input
    let usia = document.getElementById('usia').value

    //melakukan konversi inputan yang tinggi badan yang awalnya cm menjadi m
    let konversi = (tinggiBadan/100)

    //perhitungan menggunakan rumus bmi
    let hasil = (beratBadan / (konversi * konversi))

    //menampilkan hasi dari perhitungan bmi ke id result agar tampil di html
    document.getElementById('result').innerHTML = hasil.toFixed(1) // toFixed berguna agar angka yang tampil tidak terlalu banyak

    //untuk menampilkan usia
    document.getElementById('usiaUser').innerHTML = `Pada usia mu yang ke ${usia} BMI kamu menunjukan bahwa : `

//////////////////////
//variabel yang dipakai adalah singkatan dari akibat berat badan dan variabel ini digunakan agar kode lebih mudah dibaca karena penjelasan akibat terlalu panjang
let aBBK = document.getElementById('akibat').innerHTML = 'Kekurangan berat badan yang signifikan dapat mengakibatkan dampak serius pada kesehatan, termasuk penurunan energi, gangguan fungsi organ, dan risiko penyakit jantung meningkat. Kurangnya nutrisi juga dapat mempengaruhi sistem kekebalan tubuh, meningkatkan kerentanannya terhadap infeksi, dan menghambat pertumbuhan pada anak-anak. Selain itu, dampak psikologis seperti depresi, kecemasan, dan gangguan pola makan juga sering muncul, menciptakan tantangan kesehatan yang kompleks. Oleh karena itu, menjaga berat badan dalam kisaran yang sehat sangat penting untuk mendukung kesejahteraan fisik dan mental.' 

let aBBN = document.getElementById('akibat').innerHTML = 'Berat badan yang seimbang dalam kisaran normal memiliki dampak positif yang signifikan pada kesehatan. Individu dengan berat badan normal cenderung memiliki tingkat energi yang stabil, fungsi organ yang optimal, dan sistem kekebalan tubuh yang kuat. Mereka memiliki risiko lebih rendah terkena penyakit jantung, diabetes tipe 2, serta penyakit kronis lainnya. Selain itu, berat badan normal juga dapat meningkatkan kesehatan mental, meningkatkan tingkat kepercayaan diri, dan memperbaiki kualitas hidup secara keseluruhan. Dengan menjaga berat badan dalam rentang yang sehat, individu dapat merasakan manfaat kesehatan yang mencakup baik aspek fisik maupun psikologis.'

let aBBB = document.getElementById('akibat').innerHTML = 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.'

let aO = document.getElementById('akibat').innerHTML = 'Obesitas adalah kondisi medis serius yang dapat menyebabkan dampak kesehatan yang luas dan parah. Individu yang mengalami obesitas memiliki risiko tinggi terkena penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan kolesterol tinggi. Selain itu, obesitas juga terkait dengan peningkatan risiko kanker tertentu, gangguan pernapasan seperti sleep apnea, dan penyakit hati. Dampak psikologis termasuk depresi, kecemasan, dan rendahnya harga diri. Mobilitas terbatas dan rasa nyeri kronis pada sendi juga sering dialami oleh individu dengan obesitas. Dalam jangka panjang, obesitas dapat mempersulit kehidupan sehari-hari, mengurangi kualitas hidup, dan mempersingkat harapan hidup. Pengelolaan berat badan yang sehat, termasuk pola makan seimbang dan aktivitas fisik rutin, sangat penting dalam mengatasi dampak obesitas dan mempertahankan kesejahteraan umum.'
//////////////////////

//oprasi logika untuk memberikan penjelasan terhadap hasil bmi seseorang
if (hasil <= 18.5) {
        document.getElementById('penjelasan').innerHTML = 'Berat Badan Kamu Kurang'
        document.getElementById('akibat').innerHTML =aBBK
    } else if(hasil >= 18.6 && hasil <= 24.9){
        document.getElementById('penjelasan').innerHTML = 'Berat Badan Kamu Normal'
        document.getElementById('akibat').innerHTML =aBBN
    } else if(hasil >= 25.0 && hasil <= 29.9){
        document.getElementById('penjelasan').innerHTML = 'Kamu kelebihan beran badan'
        document.getElementById('akibat').innerHTML =aBBB
    }else{
        document.getElementById('penjelasan').innerHTML = 'Kamu Obesitas'
        document.getElementById('akibat').innerHTML =aO
    }

}

//untuk mereset layar agar kembali kosong
function reseter() {
    window.location.reload()
}




