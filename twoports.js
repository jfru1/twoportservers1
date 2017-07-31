//require and import the http module
var http = require("http");
//define the listening port
var PORT1 = 7000;
var PORT2 = 7500;
//create a generic function to handle requests and responses
function handleRequest1(request, response){
	//this statement is triggered on the clientside of things when the user visits the server
	repsonse.end("You have a generally pleasing disposition.");
}
function handleRequest2(request, repsonse){
	response.end("You are a disappointment.")
}
//we're using the Node http package to create the server
//then we pass it to the handleRequest function to empower it with functionality
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handlerequest2);
//now we're gonna start our server do it can begin listening for client requests
server1.listen(PORT1, function(){
	//this statement is triggered (server-side) when a user visits the page
	console.log("Server listening on: http://localhost:%s", PORT1)
});
server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2)
})