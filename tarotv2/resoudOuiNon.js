		/* Genere un nombre entre min inclus et max inclus */
		
		function entierAleatoire(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		
		function rendReponseOuiNon(carte){
			if (cartesOuiNon[carte]["ouiNon"] == 0){
				return "NON";
			}
			else if (cartesOuiNon[carte]["ouiNon"] == 1){
				return "OUI";
			}
			else if (cartesOuiNon[carte]["ouiNon"] == 2){
				return "PEUT-&Ecirc;TRE";
			}
		}
		
	    function resoudOuiNon(){
		var numCarte = entierAleatoire(0, 21);
		var reponseOuiNon = rendReponseOuiNon (numCarte);
		var bouton = "<center>"+
			"<button type=\"button\" class=\"btn btn-primary\" onclick=\"location.reload();\">"+
   				"<i class=\"fa fa-repeat\" aria-hidden=\"true\"></i>"+
   				" Refaire un tirage"+
			"</button>"+
			"</center>";

		var pub ="<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>"+
			"<ins class=\"adsbygoogle\""+
     			"style=\"display:inline-block;width:728px;height:90px\""+
     			"data-ad-client=\"ca-pub-5872858147264773\""+
     			"data-ad-slot=\"3077370541\"></ins>"+
			"<script>"+
     			"	(adsbygoogle = window.adsbygoogle || []).push({});"+
			"</script>";

		var resultat = "<h2>Interprétation du tirage</h2>"
			+ "<br><img class=\"img-responsive\" src=\"" + cartesOuiNon[numCarte]["image"] + "\"><br><br>"
			+ pub + "<br><br>"
			+ "<span style=\"text-transform:capitalize; font-size:150%\">" + cartesOuiNon[numCarte]["nom"] 
			+ "</span> <span style=\"font-size:150%\">: la r&eacute;ponse est <strong>" + reponseOuiNon + "</strong></span><br><br>"
			+ cartesOuiNon[numCarte]["interpretation"]
			+ "<br><br>" + bouton;    
		    
		$("#reponse").toggle( "slow", function(){
			$("#reponse").replaceWith('<div id="reponse">' + resultat + '</div>');
			$("#reponse").fadeIn( "slow" );
		});
	}
