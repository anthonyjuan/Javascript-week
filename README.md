# Polling Pilkada 2017 Sederhana

Setelah berkutat cukup lama, tugas untuk minggu kedua yang telah saya buat ini adalah website polling sederhana yang digunakan untuk memilih calon kepala daerah. Dibentuk dari HTML + CSS + JS sederhana.  
  
 Untuk tampilan yang lebih baik harap akses melalui Desktop.

# Pseudo Code
```
//pseudocode untuk keseluruhan
LOAD halaman web
PANGGIL FUNGSI tampilCalon();
TAMPILKAN Daftar calon beserta jumlah suara


//pseudocode untuk memilih calon (pilih())
DEKLARASI variabel Terimakasih dan isikan Constructor Function yang akan menampilkan keterangan
DEKLARASI variabel namapeserta, pilihan  
PANGGIL FUNGSI Pilih   
INPUT nama ke variabel namapeserta  
INPUT pilihan ke variabel  
	IF pilihan sama dengan '1'  
		TAMBAH jumlah suara calon pertama  
	ELSE  
		IF pilihan sama dengan '2'  
			TAMBAH jumlah suara calon kedua  
		ELSE  
			IF pilihan sama dengan '3'  	
				TAMBAH jumlah suara calon ketiga	  
			ELSE
				IF pilihan sama dengan '4'	
				TAMBAH jumlah suara calon keempat  
				ELSE  
				TAMPILKAN 'angka yang anda masukkan tidak sesuai'  
				ENDIF  
			ENDIF  
		ENDIF  
	ENDIF  
PANGGIL FUNGSI tampilCalon dengan parameter calon  
DEKLARASI OBJEK thanks dari constructor function  
PANGGIL OBJEK thanks  
TAMPILKAN Keterangan


//pseudocode untuk menampilkan calon (tampilCalon())  
DEKLARASI variabel myTable dan isikan syntax html untuk table
FOR setiap pertambahan 1 pada index dari 0 hingga 'panjang array calon'  
	INPUT syntax html table beserta data 'index[i][0]' pada array calon  
	INPUT syntax html table beserta data 'index[i][1]' pada array calon  
	INPUT syntax html table beserta data 'index[i][2]' pada array calon  
ENDFOR  
TAMPILKAN variable myTable pada HTML


```