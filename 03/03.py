# Definisi kelas Mahasiswa
class Mahasiswa:
    # Konstruktor kelas untuk inisialisasi objek
    def __init__(self, nama, nim, jurusan):
        self.nama = nama
        self.nim = nim
        self.jurusan = jurusan

    # Metode untuk menampilkan aktivitas belajar
    def belajar(self):
        print(f"{self.nama} sedang belajar.")

# Implementasi penggunaan kelas Mahasiswa
mahasiswa1 = Mahasiswa("Dini Husaini", "20230111001", "Informatika")

# Menggunakan metode objek
mahasiswa1.belajar()  # Output: Budi sedang belajar. # Output: Ani sedang belajar.
