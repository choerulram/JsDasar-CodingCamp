import Item from './Item.js';
import Inventory from './Inventory.js';

const inventory = new Inventory();

const item1 = new Item(1, 'Laptop', 10, 1000);
const item2 = new Item(2, 'Mouse', 50, 20);

inventory.addItem(item1);
inventory.addItem(item2);

console.log('Initial Inventory:');
console.log(inventory.listItems());
/**
 * Output yang diharapkan:
 * Initial Inventory:
 * ID: 1, Name: Laptop, Quantity: 10, Price: 1000
 * ID: 2, Name: Mouse, Quantity: 50, Price: 20
 */

item1.updateDetails( 'Laptop', 8, 950);
console.log('\nInventory after update:');
console.log(inventory.listItems());

/**
 * Output yang diharapkan:
 * Inventory after update:
 * ID: 1, Name: Laptop, Quantity: 8, Price: 950
 * ID: 2, Name: Mouse, Quantity: 50, Price: 20
 */

inventory.removeItem(2);
console.log('\nInventory after removal:');
console.log(inventory.listItems());

/**
 * Output yang diharapkan:
 * Inventory after removal:
 * ID: 1, Name: Laptop, Quantity: 8, Price: 950
 */
