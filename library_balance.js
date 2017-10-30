"use strict";

var transList = [];

var getTransaction = function(index) {
	
	if(index === undefined){
		
		return transList.length;
	}
	else{
		
	return transList[index];
	
	}
    
};

var addTransaction = function (type, amount, date) {
	
	if(date === undefined){
		
		date = new Date();
		date = date.toUTCString();
	}
	
	if(type == "deposit"){
		
		transList[transList.length] = ['deposit', amount, date];
	}
	else{
		amount = '-' + amount;
		
		transList[transList.length] = ['whitdrawal',amount, date];
		
	}
	
};

var calculateBalance = function (type, amount, total) {
		
	
	if(type == "deposit"){
		
	total = parseFloat(total) + parseFloat(amount);
	
	return total;
	
	}
	
	else{
		
		amount = amount.slice(1);
		
		total = parseFloat(total) - parseFloat(amount);
		
		return total;
		
	}
	
	
	
	
	
	
	
    
};