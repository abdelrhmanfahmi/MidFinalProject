var result = document.getElementById('res');
result.addEventListener('submit' , function(ev){
	ev.preventDefault();
	var nameCheck = document.getElementById('name');
	var emailCheck = document.getElementById('email');
	var subjectCheck = document.getElementById('subject');
	var msgCheck = document.getElementById('message');
    
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;

		var newObj = {
			name:name,
			email:email,
			subject:subject,
			message:message
		};

		fetch('https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us' , {
			method: 'POST',
			
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(newObj)
		})
		.then((res) => {
			if(res.ok){
				return res.json();
			}else{
				return Promise.reject({ status:res.status , statusText: res.statusText});
			}

		})
		
		.then((data) =>console.log(data))
		.catch(err => console.log('Error message' , err.statusText));
		$(nameCheck).val("");
		$(emailCheck).val("");
		$(subjectCheck).val("");
		$(msgCheck).val("");
		
});
