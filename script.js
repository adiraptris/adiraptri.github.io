let nilai = prompt ("masukan nilai",0);
let hasil = "";

switch(true){
    case nilai >=91 && nilai <=100:
        hasil = "nilai A"
        break;
    case nilai >= 81 && nilai <=90:
        hasil = "nilai B"
        break;
    case nilai >= 71 && nilai <=80:
        hasil = "nilai C"
        break;
    case nilai >= 61 && nilai <=70:
        hasil = "nilai D"
        break;
    case nilai >= 0 && nilai <=60:
        hasil = "nilai F"
        break;
        default:
        hasil = "tidak ada";
}
document.write(hasil);