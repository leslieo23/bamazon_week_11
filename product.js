var mysql= require('mysql');
var prompt= require('prompt');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '',
 database:'Bamazon'
});

prompt.start();
connection.connect(function(err){
	if (err)
		return (err);


});
connection.query('SELECT * FROM Products',function(err,res){
	if(err)
		throw err
	for(var i=0;i<res.length;i++){
		console.log(res[i].ItemID +' = 'res[i].ProductName+'|Price: '+' |Quantity: ' +res[i].StockQuantity);
	}
}); 

var item=[];
var StockQuantity='';
var ItemID='';

prompt.get(['Choose a product by Product Name','How many do you want?'],function(err,res){
	var product=res.ProductName
	var quantity=res.StockQuantity
	var info='SELECT StockQuantity FROM products where ProductName='+ProductName;
	connection.query(info,function(err,res){
		if(res[0].Stockquantity>quantity){
			console.log('We have the item!')
			var addingItem={
				id:itemID
				
			};
		item.push(addingItem);

		}else{
			console.log('we do not have enough')
		}

	})
})
function finishOrder(){

}
