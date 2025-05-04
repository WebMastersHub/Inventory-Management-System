const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let products = [];
let transactions = []
let idnum = 1;

menuOption();
function menuOption(){
    console.log("\nWelcome to the inventory System")
    console.log("\n1. Add Products")
    console.log("\n2. View Products")
    console.log("\n3. Exit")

    rl.question('Choose an option(1-3): ', hello)
    
} 
function hello(choice){
    switch (choice) {
        case '1':
            addProducts();
            break;
        case '2':
            viewProducts();
            
            break;            
        case '3':
            console.log("Goodbye👋.....See you later")
            rl.close();
            break;                   
        default:
            console.log("Invalid Choice❌")
            rl.close();
            break;
    }
}

function addProducts(){
    rl.question("Product name: ", function(name){
        rl.question("Price: ", function(price){
            rl.question("Category: ", function(category){
                rl.question("Stock: ", function(stock){
                    const newProduct = {
                        id: idnum++,
                        name: name.trim(),
                        price: parseFloat(price),
                        category: category.trim(),
                        stock: parseInt(stock)
                      };
                    products.push(
                       newProduct
                    )
                    console.log(`Added ${newProduct.name} to productList`)
                    menuOption();

                })
            })
        })
    })   
}
function viewProducts() {
    console.log('\n=== PRODUCTS ===');
   
    if (products.length === 0) {
      console.log('No products yet!');
    } else {
      products.forEach(item => {
        console.log(`${item.id}. ${item.name} - $${item.price} (${item.stock} available)`);
      });
    }
    menuOption();
  }