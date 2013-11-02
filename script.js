$(document).ready(function() {

	$("#submit").click(function() {

		var username;

		username = document.getElementById("username").value;

		if(username == "monty" || username == "jacob") {
			$("#login").submit();
		} else {
			alert("Woops, this feature isn't available yet.");
		}

	});

});