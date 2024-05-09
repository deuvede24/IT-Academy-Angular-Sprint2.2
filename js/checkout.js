
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");  
	let errorEmail = document.getElementById("errorEmail");  
	let errorPassword = document.getElementById("errorPassword");  
	let errorAddress = document.getElementById("errorAddress");  
	let errorPhone = document.getElementById("errorPhone"); 

	let isValid = true; //variable que verifica si el form es válido
	
		// Definir regular expressions 
		let letterRegex = /^[A-Za-z]+$/;
		let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		let passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9])/;
		let addressRegex = /^[a-zA-Z0-9\s/,-]+$/;
		let numberRegex = /^\d+$/;

		function validateField(input, errorElement, regex, minLength) {
			let inputValue = input.value.trim();
			if (inputValue.length < minLength || !regex.test(inputValue)) {
				errorElement.style.display = 'block';
				input.classList.add("is-invalid");
				isValid = false;
			} else {
				errorElement.style.display = 'none';
				input.classList.remove("is-invalid");
			}
		}
	
		// Validate first name
		validateField(fName, errorName, letterRegex, 3);
	
		// Validate last name
		validateField(fLastN, errorLastN, letterRegex, 3);
	
		// Validate email
		validateField(fEmail, errorEmail, emailRegex, 3);
	
		// Validate password
		validateField(fPassword, errorPassword, passwordRegex, 4);
	
		// Validate address
		validateField(fAddress, errorAddress, addressRegex, 3);
	
		// Validate phone number
		validateField(fPhone, errorPhone, numberRegex, 9);
	
		// Prevent errors
		if (!isValid) {
			event.preventDefault();
			event.stopPropagation();
			alert("Please correct the highlighted fields.");
		}
	}
	
	

	
	/*// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}
	

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
*/

