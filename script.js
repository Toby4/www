$(document).ready(function() {

	$("#submit").click(function() {

		var username;
		var password;

		username = document.getElementById("username").value;
		password = document.getElementById("password").value;

		$.ajax({
  			url: "http://dev.montyanderson.co.uk/zenco/login.php",
  			data: {username: username, password: password},
  			type: "GET"
		}).done(function(data) {

			$("#modal > div > div > div > pre").text(data);
			$("#modal").modal();
			//$("#modal").draggable();

  		});

  		$("a").click(function() {
  			var href;

  			href = $(this).attr("data-href");
  			alet(href);

  			$.ajax({
  				url: href
  			}).done(function(data) {

  				alert(data);

  			});
  		});



	});

});