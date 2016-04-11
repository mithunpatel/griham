function startProcess(){
	var hash = window.location.hash.split("/")[1];
	console.log(hash);
	switch(hash){
		 case "home":
		 	loadPage("home",hash);
		 	break;
		 case "why-join":
		 	loadPage("why_join",hash);
		 	break;
		 case "recruitment":
		 	loadPage("recruitment",hash);
		 	break;
		 case "apply-now":
		 	loadPage("apply",hash);
		 	break;
		 case "contact-us":
		 	loadPage("contact",hash);
		 	break;
		 case "agreements":
		 	loadPage("agreements",hash);
		 	break;
		 default:
		 	window.location.hash = "#/home";
		 	break;
	}
}

function loadPage(filename,value) {
	var menu_link = $(".menu-link");
	
	for (var i = 0; i < menu_link.length; i++) {
		var that = $(menu_link[i]);
		if(that.attr("href").split("/")[1] == value){
			that.parent().addClass("active");
		}else{
			that.parent().removeClass("active");
		}
		
	};;

	$("#content").load("view/"+filename+".html");
}


$(window).on('hashchange',function(){ 
    startProcess();
});

startProcess();