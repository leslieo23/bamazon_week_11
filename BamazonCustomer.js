var mysql= require('mysql');
var prompt= require('prompt');


var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '',
 database:'bamazon'
});

connection.query('SELECT * FROM products', function(err, res){
    // if error throw error.
    if (err) throw err;
	console.log('   Product Price and Quantity List')
 	for (var i = 0; i < res.length; i++) {
 		console.log(res[i].ProductName + ' | PRICE: '+res[i].Price+' | QUANTITY: '+res[i].StockQuantity);
    }
});
function getInfo(){

   
    var info = {
        properties: {
            product: {
                description: 'Please choose a product by entering it\'s line number',
                required: true
            },
            qty:{
                description: 'How many would you like to order?',
                required: true
            }
        }
    }; 
    prompt.start();             

 prompt.get(info, function(err,res){
        
        var database = 'SELECT StockQuantity FROM products WHERE ProductName = '+ProductName;
		var productID = res.product;
        var qty = res.qty;
        connection.query(database, function(err, res){
            if (res[0].StockQuantity > qty) {

               
                console.log('We Have It!')
                

            } else {
		 console.log('Insufficient Quantity')
         
            };
        });
    });
};
function updateDatabase(product,qty){

}

