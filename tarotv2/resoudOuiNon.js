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


		var resultat = "<h2>Interprétation du tirage</h2>"
			+ "<img class=\"img-responsive\" src=\"" + cartesOuiNon[numCarte]["image"] + "\"><br>"
			+ "<span style=\"text-transform:capitalize; font-size:150%\">" + cartesOuiNon[numCarte]["nom"] 
			+ "</span> <span style=\"font-size:150%\">: la r&eacute;ponse est <strong>" + reponseOuiNon + "</strong></span><br>"
			+ cartesOuiNon[numCarte]["interpretation"]
			+ "<br><br>" + bouton;    
		    
		$("#reponse").toggle( "slow", function(){
			$("#reponse").replaceWith('<div id="reponse">' + resultat + '</div>');
			$("#reponse").fadeIn( "slow" );
		});
	}
