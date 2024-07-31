/* This is your JavaScript file. You will use this file to create actions in your HTML pages */
/* Contact form - faq page */
var url = "faq.html";
var message = "Submission successful, " ;
var fullstop = ".";

function contact_form(){  
	let name = document.getElementById("name").value; /* Retrives the value from the form */
	alert(message + name + fullstop);  /* Sets the message for the alert */
}

function create(){  
	window.location=url;  /* Sets which page the alert is */
}  

/* Register form - regpay page */
var fullstop2 = ". ";
var url2 = "regpay.html";
var message21 = "Account successfully registered, ";
var message22 = "Username is ";
var message23 = "Email address is ";
var message24 = "Contact number is ";

function reg_form(){
	let name = document.getElementById("name").value;
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	// Call variables to make alert message
	alert(message21 + name + fullstop2 + message22 + username + fullstop2 + message23 + email + fullstop2 + message24 + phone + fullstop2);

}

function create(){  
	window.location=url2;  /* Sets which page the alert is */
} 

/* Pay form - regpage page */
var message3 = " you have been charged $";
var message_else = " payment successful.";

function pay_form(){
	// Call variables
	let username2 = document.getElementById("username2").value;
	let type = document.getElementById("type").value;
	let hours = document.getElementById("hours").value;
	
	// Set prices variables
	let road = 17;
	let mount = 22;
	let electric = 30;
	let scooters = 37;
	let helmets = 12;
	
	// If statements checking for all of the options
	if (type == "road bike"){
		var price = road * parseInt(hours); // Calculates the message based on what the user is hiring and how long they want it for.
		alert(username2 + message3 + price); // Constructs the message for the alert
	}
	
	else if (type == "mountain bike"){
		var price = mount * parseInt(hours);
		alert(username2 + message3 + price);
	}
	
	else if (type == "e-bike"){
		var price = electric * parseInt(hours);
		alert(username2 + message3 + price);
	}
	
	else if (type == "scooter"){
		var price = scooters * parseInt(hours);
		alert(username2 + message3 + price);
	}
	
	else if (type == "helmet"){
		alert(username2 + message3 + helmets);
	}
	
	else{
		alert(username2 + message_else);
	}
}

function create(){  
	window.location=url2;  /* Sets which page the alert is */
} 