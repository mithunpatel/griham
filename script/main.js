function startProcess(){
	var hash = window.location.hash.split("/")[1];
	console.log(hash);
	switch(hash){
		 case "home":
		 	loadPage("home");
		 	break;
		 case "why-join":
		 	loadPage("why_join");
		 	break;
		 case "recruitment":
		 	loadPage("recruitment");
		 	break;
		 case "apply-now":
		 	loadPage("apply");
		 	break;
		 case "contact-us":
		 	loadPage("contact");
		 	break;
		 case "agreements":
		 	loadPage("agreements");
		 	break;
		 default:
		 	window.location.hash = "#/home";
		 	break;
	}
}

function loadPage(filename) {
	$("#content").load("view/"+filename+".html");
}


$(window).on('hashchange',function(){ 
    startProcess();
});

startProcess();