class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

class NilaiView {
    render(rataRata) {
        return `Rata-rata nilai: ${rataRata}`;
    }

    renderError(error) {
        return `Error: ${error}`;
    }
}

function tampilkanRataRata(nilai) {
    const view = new NilaiView();
    try {
        const modelNilai = new Nilai(nilai);
        const rataRata = modelNilai.hitungRataRata();
        console.log(view.render(rataRata));
    } catch (error) {
        console.log(view.renderError(error.message));
    }
}

function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

tampilkanRataRata([23, 33, 43]);
tampilkanRataRata([]);

console.log(bagi(23, 2));
console.log(bagi(23, 0)); 
