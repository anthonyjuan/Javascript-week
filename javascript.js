var namapeserta ;
var pilihan ;
var calon = [
	['1','Agus - Sylvi', 0],
	['2','Ahok - Djarot', 0],
	['3','Anies - Sandiaga', 0],
	['4','Anthony', 0]
]
var Terimakasih = function(no, nama) {
	this.nama = nama;
	this.no = no;
	this.tampil = function tampil() {
		return 'Terima Kasih '+nama+'!!! Anda Telah Memilih Calon no urut '+no;
	}
}


function pilih () {
	namapeserta = prompt("Please enter your name", "");
	pilihan = prompt("Memilih nomor ? (masukkan salah satu no urut 1-4)", "1");

	if (pilihan == '1') {
		calon[0][2]++;
	}else if (pilihan == '2') {
		calon[1][2]++;
	}else if (pilihan == '3') {
		calon[2][2]++;
	}else if (pilihan == '4') {
		calon[3][2]++;
	}else {
		alert("nomor yang anda masukkan tidak sesuai");
	}
	alert("Terimakasih Telah memilih !");

	tampilCalon(calon);
	var thanks = new Terimakasih(pilihan , namapeserta);
	document.getElementById('keterangan').innerHTML = thanks.tampil();

}

function tampilCalon (calon) {
	var myTable = "<tr><td>No</td>";
	myTable += "<td>Nama</td><td>Perolehan Suara</td></tr>";
	for (var i = 0; i < calon.length; i++) {
		myTable += "<tr><td>"+calon[i][0]+".</td>";
		myTable += "<td>"+calon[i][1]+"</td>";
		myTable += "<td>"+calon[i][2]+"</td></tr>";

	}
	document.getElementById('table').innerHTML = myTable;
	
}


document.addEventListener("DOMContentLoaded", function(event) { 
	tampilCalon(calon);

});

