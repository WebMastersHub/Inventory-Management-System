"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var products = [];
var transactions = [];
var idnum = 1;
menuOption();
function menuOption() {
    console.log("\nWelcome to the inventory System");
    console.log("\n1. Add Products");
    console.log("\n2. Buy Products");
    console.log("\n3. View Products");
    console.log("\n4. Inventory Reports");
    console.log("\n5. Sales Report");
    console.log("\n6. Exit");
    rl.question("Choose an option(1-6): ", hello);
}
function hello(choice) {
    switch (choice) {
        case "1":
            addProducts();
            break;
        case "2":
            buyProducts();
            break;
        case "3":
            viewProducts();
            break;
        case "4":
            inventoryReport();
            break;
        case "5":
            salesReport();
            break;
        case "6":
            console.log("Goodbye👋.....See you later");
            rl.close();
            break;
        default:
            console.log("Invalid Choice❌");
            rl.close();
            break;
    }
}
function addProducts() {
    rl.question("Product name: ", function (name) {
        rl.question("Price: ", function (price) {
            rl.question("Category(electronics, groceries, books, clothing): ", function (category) {
                if (!isValidCategory(category)) {
                    console.log("❌ Invalid category.");
                    return menuOption();
                }
                rl.question("Stock: ", function (stock) {
                    var newProduct = {
                        id: idnum++,
                        name: name.trim(),
                        price: parseFloat(price),
                        category: category.trim(),
                        stock: parseInt(stock),
                    };
                    products.push(newProduct);
                    console.log("\u2705 Added ".concat(newProduct.name, " to productList"));
                    menuOption();
                });
            });
        });
    });
}
function viewProducts() {
    console.log("\n=== PRODUCTS ===");
    if (products.length === 0) {
        console.log("No products yet!");
    }
    else {
        products.forEach(function (item) {
            console.log("".concat(item.id, ". ").concat(item.name, " - GHC").concat(item.price, " ").concat(item.category, " (").concat(item.stock, " available)"));
        });
    }
    menuOption();
}
function buyProducts() {
    rl.question("Which product will you like to buy? ", function (purchasedProduct) {
        var product = products.find(function (p) { return p.name.toLowerCase() === purchasedProduct.trim().toLowerCase(); });
        if (!product) {
            console.log("❌ Product not found!");
            return menuOption();
        }
        rl.question("How many will you like to buy? ", function (quantityInput) {
            var quantity = parseInt(quantityInput);
            if (isNaN(quantity) || quantity <= 0) {
                console.log("❌ Invalid quantity.");
            }
            else if (quantity > product.stock) {
                console.log("❌ We don't have enough stock available.");
            }
            else {
                product.stock -= quantity;
                var total = product.price * quantity;
                var transaction = {
                    productName: product.name,
                    quantity: quantity,
                    totalPrice: total,
                };
                transactions.push(transaction);
                console.log("\u2705 Purchase successful! You bought ".concat(quantity, " ").concat(product.name, "(s)."));
            }
            menuOption();
        });
    });
}
function inventoryReport() {
    console.log("\n=== INVENTORY REPORT ===");
    if (products.length === 0) {
        console.log("No products in inventory.");
    }
    else {
        products.forEach(function (p) {
            console.log("".concat(p.name, " (").concat(p.category, ") - GHC").concat(p.price, " | Stock: ").concat(p.stock));
        });
    }
    menuOption();
}
function salesReport() {
    console.log("\n=== SALES REPORT ===");
    if (transactions.length === 0) {
        console.log("No sales yet.");
    }
    else {
        transactions.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.productName, " | Qty: ").concat(item.quantity, " | Total: GHC").concat(item.totalPrice.toFixed(2)));
        });
    }
    menuOption();
}
function isValidCategory(category) {
    var validCategories = ["electronics", "groceries", "books", "clothing"];
    return validCategories.includes(category.trim().toLowerCase());
}
