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
	namapeserta = prompt("Masukkan Nama anda", "");
	pilihan = prompt("Memilih nomor ? (masukkan salah satu no urut 1-4)", "");
	var thanks = new Terimakasih(pilihan , namapeserta);
	
	if (pilihan == '1') {
		calon[0][2]++;
		alert("Terimakasih Telah memilih !");
		document.getElementById('keterangan').innerHTML = thanks.tampil();
	}else if (pilihan == '2') {
		calon[1][2]++;
		alert("Terimakasih Telah memilih !");
		document.getElementById('keterangan').innerHTML = thanks.tampil();
	}else if (pilihan == '3') {
		calon[2][2]++;
		alert("Terimakasih Telah memilih !");
		document.getElementById('keterangan').innerHTML = thanks.tampil();
	}else if (pilihan == '4') {
		calon[3][2]++;
		alert("Terimakasih Telah memilih !");
		document.getElementById('keterangan').innerHTML = thanks.tampil();
	}else {
		alert("nomor yang anda masukkan tidak sesuai");
		document.getElementById('keterangan').innerHTML = 'Maaf '+namapeserta+' Nomor yang anda masukkan tidak terdaftar';

	}
	

	tampilCalon(calon);
	

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

