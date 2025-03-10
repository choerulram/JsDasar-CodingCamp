/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    
    // method untuk memperbarui detail barang
    updateDetails(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    
    // method untuk menampilkan detail barang
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}

// Jangan hapus kode di bawah ini!
export default Item;
