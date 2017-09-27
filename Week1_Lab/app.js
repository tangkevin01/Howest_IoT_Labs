var serialport = require('serialport');

var portname = "COM3"

var myPort = new serialport(portname, {
	bauttRate: 9600,
	parser:serialport.parsers.readline("\r\n")
})


myPort.on('open', onOpen);
myPort.on('data', onrecieveData);
myPort.on('error', showError)
 

function onOpen()
{
	console.log("Connection to device");
	myPort.write("OK\n");
}

function onrecieveData(data)
{
	console.log("Status LED: " + data);
}

function showError(error) 
{
   console.log('Serial port error: ' + error);
}