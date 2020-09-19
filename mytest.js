var email = document.getElementById('email');

form.addEventListener('submit', (e) => {
	if(email.value === ''){
		e.preventDefault();
		alert('Email is Required');
	} else {
		localStorage.setItem("Email",email.value);
		// console.log(Email);
		window.location.href="mytest.html";
	}
})