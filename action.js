var tipAmount = 0;
var billAmount, billTotal ;


function calculateTip (i) {
    billAmount = document.getElementById("billAmount").value; 
  	if(billAmount>=0){
	  	tipAmount = billAmount * i;
	    document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
	    
	    billTotal = parseFloat(tipAmount) + parseFloat(billAmount);
	    
	    document.getElementById("totalBill").innerHTML = "$" + billTotal.toFixed(2);
  	}
  	else{
  		document.getElementById("tipAmount").innerHTML = "Enter a valid Amount";
  		document.getElementById("totalBill").innerHTML = "Enter a valid Amount";
  	}    
   
}