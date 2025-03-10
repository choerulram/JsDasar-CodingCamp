// fungsi untuk menghitung faktorial dari bilangan bulat positif n
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // faktorial dari 0 dan 1 adalah 1
    }
    return n * factorial(n - 1); // rekursi
}

// Jangan hapus kode di bawah ini!
export default factorial;
