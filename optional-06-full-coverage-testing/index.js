// Jangan ubah kode di berkas ini.

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  if (a < 0 || b < 0) {
    return 0;
  }

  return a + b;
}

export default sum;
