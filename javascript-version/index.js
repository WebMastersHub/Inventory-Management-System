const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let products = [];
let transactions = [];
let idnum = 1;

menuOption();
function menuOption() {
  console.log("\nWelcome to the inventory System");
  console.log("\n1. Add Products");
  console.log("\n2. Buy Products");
  console.log("\n3. View Products");
  console.log("\n4. Inventory Reports");
  console.log("\n5. Sales Report");
  console.log("\n6. Exit");

  rl.question("Choose an option(1-3): ", hello);
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
      rl.question(
        "Category(electronics, groceries, books, clothing): ",
        function (category) {
          rl.question("Stock: ", function (stock) {
            const newProduct = {
              id: idnum++,
              name: name.trim(),
              price: parseFloat(price),
              category: category.trim(),
              stock: parseInt(stock),
            };
            products.push(newProduct);
            console.log(`Added ${newProduct.name} to productList`);
            menuOption();
          });
        }
      );
    });
  });
}
function viewProducts() {
  console.log("\n=== PRODUCTS ===");

  if (products.length === 0) {
    console.log("No products yet!");
  } else {
    products.forEach((item) => {
      console.log(
        `${item.id}. ${item.name} - GHC${item.price} ${item.category} (${item.stock} available)`
      );
    });
  }
  menuOption();
}

function buyProducts() {
  rl.question(
    "Which product will you like to buy?",
    function (purchasedProduct) {
      const product = products.find(
        (p) => p.name.toLowerCase() === purchasedProduct.trim().toLowerCase()
      );
      if (!product) {
        console.log("❌ Product not found!");
        return menuOption();
      }

      rl.question(`how many will you like to buy? `, function (quantityInput) {
        const quantity = parseInt(quantityInput);
        if (isNaN(quantity) || quantity <= 0) {
          console.log("❌ Invalid quantity.");
        } else if (quantity > product.stock) {
          console.log("❌ We don't have enough stock available.");
        } else {
          product.stock -= quantity;
          const transaction = {
            productName: product.name,
            quantity: quantity,
          };

          transactions.push(transaction);
          console.log(
            `✅ Purchase successful! You bought ${quantity} ${product.name}(s).`
          );
          menuOption();
        }
      });
    }
  );
 
}

function inventoryReport() {
  console.log("\n=== INVENTORY REPORT ===");
  if (products.length === 0) {
    console.log("No products in inventory.");
  } else {
    products.forEach((p) => {
      console.log(
        `${p.name} (${p.category}) - GHC${p.price} | Stock: ${p.stock}`
      );
    });
  }
  menuOption();
}

function salesReport() {
  console.log("\n=== SALES REPORT ===");
  if (transactions.length === 0) {
    console.log("No sales yet.");
  } else {
    transactions.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.productName} | Qty: ${
          item.quantity
        }}`
      );
    });
  }
  menuOption();
}
