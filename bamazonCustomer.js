var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw (err);
    queryAllProducts();
    customerPurchase();
    connection.end();
});

function queryAllProducts() {
    console.log(" Compiling all products for sale...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw (err);
        console.log(res);
        connection.end();
    });
};

function customerPurchase() {
    inquirer
        .prompt([
            name: "purchase",
            type: "list",
            message: "What is the item ID of the product would you like to purchase?",
            choices: ["1", "2", "3", "4", "5", "6,", "7", "8", "9", "10", "exit"]
        ])
        .then(function (answer) {
            switch (answer.purchase) {
                case "1":
                    purchaseQuantity();
                    break;
                // get price of item
                // store in var?
                case "2":
                    purchaseQuantity();
                    break;
                case "3":
                    purchaseQuantity();
                    break;
                case "4":
                    purchaseQuantity();
                    break;
                case "5":
                    purchaseQuantity();
                    break;
                case "6":
                    purchaseQuantity();
                    break;
                case "7":
                    purchaseQuantity();
                    break;
                case "8":
                    purchaseQuantity();
                    break;
                case "9":
                    purchaseQuantity();
                    break;
                case "10":
                    purchaseQuantity();
                    break;
            }
        })
}

function purchaseQuantity() {
    inquirer
        .prompt([
            {
                name: "quantity",
                type: "number",
                message: "How much of this product would you like to purchase?",
            }
        ])
        .then(function (answer) {
            switch (answer.quantity) {
                case "Quantity":
                // if - answer.quantity is < stock_quantity {
                    // UPDATE products
                    // SET stock_quantity = stock_quantity - answer.quantity
                    // var customerTotal = answer.quantity * PRICE
                    // SELECT * FROM products
                    // console.log("Your total is: " + customerTotal)
                // };
                    break;

                case "insufficient quantity":

                // else - {
                    // If answer.quantity > stock_quantity    
                        // prevent order from going through
                        // console.log("We're sorry, we do not carry the quantity you requested.");
                        // customerPurchase();
                    break;
            // }
            }
        })
}