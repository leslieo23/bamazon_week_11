var mysql= require('mysql');
var prompt= require('prompt');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '',
 database:'bamazon'
});

connection.connect(function(err) {
 if (err) {
   console.error('error connecting: ' + err.stack);
   return;
 }


});
prompt.start();
prompt.get(['ID','ProductName'])
function customer(id,ProductName){
	this.id=id;
	this.ProductName=ProductName;
	this.customerInput=function(){
		if((this.ProductName==ProductName)&&(this.id==id)){
	
	connection.query("SELECT * FROM products where DepartmentName='"+ ProductName + "'",function(err,res){
	if (err)throw err;
	console.log(res.length + ' items returned')
	console.log(res)
});
		}
	}
}


