function compteCartes(nbCartesATirer, nom){

	/* compteur de cartes tirées */
	var nbClics = 0;

	/* Pour chaque element dont la classe est "bouge" (= chaque carte) et quand cet élément est cliqué,
	 * on efface la carte.
	 * Au bout de nbCartesATirer, on efface tout le jeu pour afficher l'interprétation du tirage
	 */
	$( ".bouge" ).click(function() {
	  /* On efface doucement la carte cliquée */ 
	 // $(this).fadeOut();
	$(this).toggle( "drop" );
	  /* on compte le nb de clics */
	  nbClics++;

	  /* si on atteint le nombre max de cartes à tirer, on efface le jeu et on affiche l'interpretation */
	  if (nbClics == nbCartesATirer) {
			
			$("#CartesEtalees").fadeOut( "slow", resoudOuiNon());
	  }
	});
}
