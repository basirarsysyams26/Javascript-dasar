// Tugas
/* Buatlah console log yang mencetak "angkot 1 s.d 6 beroperasi dengan baik dan angkota 7 s.d 10 tidak beroperasi
dengan baik" */

// CARA 1 itu cenderung statis
// var angkot = 1;
// while(angkot <= 6){
//     console.log("Angkot " + angkot + " beroperasi dengan baik");
//     angkot++;
// }

// for (var angkot = 7 ; angkot <= 10 ; angkot++){
//     console.log("Angkot " + angkot + " sedang tidak beroperasi dengan baik");
// }

// CARA 2 itu cenderung dinamis
// var jmlhAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while(noAngkot <= angkotBeroperasi){
//     console.log("Angkot " + noAngkot + " beroperasi dengan baik");
//     noAngkot++;
// }

// for( noAnkot =  angkotBeroperasi++ ; noAngkot <= jmlhAngkot; noAngkot++){
//     console.log("Angkot " + noAngkot + " Sedang tidak beroperasi dengan baik");
// }

// Tugasnya membuat seperti diatas tetapi menggunakan for dan if else
var jmlhAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot; noAngkot <= jmlhAngkot ; noAngkot++){
   if (noAngkot <= angkotBeroperasi){
    console.log("Angkot " + noAngkot + " sedang beroperasi");
   }
   else {
    console.log("Angkot " + noAngkot + " sedang tidak beroperasi" );
   }
}



