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
			
			/*var resultat = "<h2>" + cartesOuiNon[numCarte]["nom"] 
				+ "</h2><img class=\"carte\" src=\"" + cartesOuiNon[numCarte]["image"] + "\"><br>"
				+ "La r&eacute;ponse est : " + reponseOuiNon + "<br>"
				+ cartesOuiNon[numCarte]["interpretation"];
*/
		var resultat = "<h2>Interprétation du tirage</h2>"
			+ "<img class=\"carte\" src=\"" + cartesOuiNon[numCarte]["image"] + "\"><br>"
			+ "<span style=\"text-transform:capitalize\">" + cartesOuiNon[numCarte]["nom"] 
			+ "</span> : la r&eacute;ponse est <strong>" + reponseOuiNon + "</strong><br>"
			+ cartesOuiNon[numCarte]["interpretation"];    
		    
		$("#reponse").toggle( "slow", function(){
			$("#reponse").replaceWith('<div id="reponse">' + resultat + '</div>');
			$("#reponse").fadeIn( "slow" );
		});
	}
