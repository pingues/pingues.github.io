		/* Genere un nombre entre min inclus et max inclus */
		
		function entierAleatoire(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		
		function rendReponseOuiNon(carte){
			if (cartesOuiNon[carte]["ouiNon"] == 0){
				return "non";
			}
			else if (cartesOuiNon[carte]["ouiNon"] == 1){
				return "oui";
			}
			else if (cartesOuiNon[carte]["ouiNon"] == 2){
				return "peut-&ecirc;tre";
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
		var resultat = "<h2>Interprétation de votre tirage</h2>"
			+ "<img class=\"carte\" src=\"" + cartesOuiNon[numCarte]["image"] + "\"><br>"
			+ cartesOuiNon[numCarte]["nom"] + ": la r&eacute;ponse est : <strong>" + reponseOuiNon + "</stong><br>"
			+ cartesOuiNon[numCarte]["interpretation"];    
		    
		$("#reponse").toggle( "slow", function(){
			$("#reponse").replaceWith('<div id="reponse">' + resultat + '</div>');
			$("#reponse").fadeIn( "slow" );
		});
	}
