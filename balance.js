"use strict";

var $ = function(id) { return document.getElementById(id); };

var updateDisplay = function () {
    var html = "<tr><th>Date</th><th>Amount</th><th>Balance</th></tr>";
    var html = html.concat("<tr><td></td><td></td><td>0</td></tr>");
    
    var count = getTransaction();
    var total = 0;
    
    for (var i = 0; i < count; i++) {
        var trans = getTransaction(i);
		
        total = calculateBalance(trans[0], trans[1], total);
        
        html = html.concat("<tr><td>", trans[2], "</td><td>", trans[1], "</td><td>", total, "</td></tr>");
    }
    $("transactions").innerHTML = html;

};

var add = function() {
    if ($("date").value === "") {
        addTransaction($("type").value, $("amount").value);
    } else {
        addTransaction($("type").value, $("amount").value, $("date").value);
    }
    updateDisplay();
};

window.onload = function () {
    $("add").onclick = add;
    updateDisplay();
};