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
 		console.log(res[i].ProductName +' | PRICE: '+res[i].Price+' | QTY Availaible: '+res[i].StockQuantity);
    }
});

var product=res.product;
var quant=res.quant;

function getInput(){
	var info={
		properties:{
			product:{
				description:'Choose a product by Product Name'
			}
			quant:{
				description:'How many do you need?'
			}
		}
	}
}
prompt.get(info,function(err,res){
	var info='SELECT StockQuantity FROM products where ProductName='+ProductName;      
connection.query(info,function(err,res){
		if(res[0].Stockquantity>quant){
			console.log('We have the item!')
			}else{
			console.log('we do not have enough')
		}

	})
})
