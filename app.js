var eye = document.getElementById("eye");
var nezo = document.getElementById("nezo");
var forgo = document.getElementById("forgo");
var sugarzo = document.getElementById("sugarzo");
var sugarzo_pic = document.getElementById("sugarzo_pic");
var about_logo_iras  = document.getElementById("about_logo_iras");
var watching_eye_logo_iras = document.getElementById("watching_eye_logo_iras");
var streaming_waves_logo_iras = document.getElementById("streaming_waves_logo_iras");
var rolling_vinyl_logo_iras = document.getElementById("rolling_vinyl_logo_iras");
nezo.addEventListener("mouseenter",function(){
if(nezo_pic.className === "hide"){
	eye.className="hide";
	nezo_pic.className="";

}else{
nezo_pic.className="hide";
eye.className="";
}
});
nezo.addEventListener("mouseleave",function(){
	if(nezo_pic.className === ""){
		        eye.className="";
		        nezo_pic.className="hide";
		
	}else{
		nezo_pic.className="";
		eye.className="hide";
	}
});
forgo.addEventListener("mouseenter",function(){
if(forgo_pic.className==="hide"){
forgo_pic.className="";
eye.className="hide";
}
else{
forgo_pic.className="hide";
eye.className="";
}
});
forgo.addEventListener("mouseleave",function(){
	if(forgo_pic.className === ""){
	eye.className="";
        forgo_pic.className="hide";
	  }else{   
	 forgo_pic.className="";						                eye.className="hide";
       }
});
sugarzo.addEventListener("mouseenter",function(){
if(sugarzo_pic.className==="hide"){
sugarzo_pic.className="";
eye.className="hide";
}
else{
sugarzo_pic.className="hide";
eye.className="";
}
});
sugarzo.addEventListener("mouseleave",function(){
        if(sugarzo_pic.className === ""){
        eye.className="";
        sugarzo_pic.className="hide";
          }else{
         sugarzo_pic.className="";                                                                eye.className="hide";
       }
});
nezo.addEventListener("mouseleave",function(){
if(watching_eye_logo_iras.className === "hiden w3-panel  w3-right"){
       about_logo_iras.className="hiden w3-panel  w3-right";
        watching_eye_logo_iras.className="w3-panel  w3-right";

}else{
watching_eye_logo_iras.className="hiden w3-panel  w3-right";
about_logo_iras.className="w3-panel  w3-right";
}
});
nezo.addEventListener("mouseenter",function(){
        if(watching_eye_logo_iras.className === "w3-panel  w3-right"){
                        about_logo_iras.className="w3-panel  w3-right";
                        watching_eye_logo_iras.className="hiden w3-panel  w3-right";

        }else{
                watching_eye_logo_iras.className="w3-panel  w3-right";
                about_logo_iras.className="hiden w3-panel  w3-right";
        }
});
sugarzo.addEventListener("mouseleave",function(){
if(streaming_waves_logo_iras.className === "hiden w3-panel  w3-right"){
       about_logo_iras.className="hiden w3-panel  w3-right";
        streaming_waves_logo_iras.className="w3-panel  w3-right";

}else{
streaming_waves_logo_iras.className="hiden w3-panel  w3-right";
about_logo_iras.className="w3-panel  w3-right";
}
});
sugarzo.addEventListener("mouseenter",function(){
        if(streaming_waves_logo_iras.className === "w3-panel  w3-right"){
                        about_logo_iras.className="w3-panel  w3-right";
                        streaming_waves_logo_iras.className="hiden w3-panel  w3-right";

        }else{
                streaming_waves_logo_iras.className="w3-panel  w3-right";
                about_logo_iras.className="hiden w3-panel  w3-right";
        }
});
forgo.addEventListener("mouseleave",function(){
if(rolling_vinyl_logo_iras.className === "hiden w3-panel  w3-right"){
       about_logo_iras.className="hiden w3-panel  w3-right";
        rolling_vinyl_logo_iras.className="w3-panel  w3-right";

}else{
rolling_vinyl_logo_iras.className="hiden w3-panel  w3-right";
about_logo_iras.className="w3-panel  w3-right";
}
});
forgo.addEventListener("mouseenter",function(){
        if(rolling_vinyl_logo_iras.className === "w3-panel  w3-right"){
                        about_logo_iras.className="w3-panel  w3-right";
                        rolling_vinyl_logo_iras.className="hiden w3-panel  w3-right";

        }else{
                rolling_vinyl_logo_iras.className="w3-panel  w3-right";
                about_logo_iras.className="hiden w3-panel  w3-right";
        }
});
