document.addEventListener("DOMContentLoaded", function() {
	var date = new Date();
    var copy = document.getElementById("copy");
    copy.innerHTML = copy.innerHTML + date.getFullYear();
});