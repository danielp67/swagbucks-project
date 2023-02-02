
let button = document.getElementById('button')

let db = ['aide','chef','enfant','garde','gauche','geste','gosse','livre','merci','mort','ombre','part','poche','professeur','tour','fois','madame','paix','voix','affaire','année','arme','armée','attention','balle','boîte','bouche','carte','cause','chambre','chance','chose','classe','confiance','couleur','cour','cuisine','dame','dent','droite','école','église','envie',
    'épaule','époque','équipe','erreur','espèce','face','façon','faim','famille','faute','femme','fenêtre','fête','fille','fleur','force','forme','guerre','gueule','habitude','heure','histoire','idée','image','impression','jambe','joie','journée','langue','lettre','lèvre','ligne','lumière','main','maison','maman','manière','marche','merde','mère','minute','musique','nuit',
    'odeur','oreille','parole','partie','peau','peine','pensée','personne','peur','photo','pièce','pierre','place','police','porte','présence','prison','putain','question','raison','réponse','robe','route','salle','scène','seconde','sécurité','semaine','situation','soeur','soirée','sorte','suite','table','terre','tête','vérité','ville','voiture','avis','bois','bras','choix',
    'corps','cours','gars','mois','pays','prix','propos', 'sens','temps','travers','vieux','accord','agent','amour','appel','arbre','argent','avenir','avion','bateau','bébé','besoin','bonheur','bonjour','bord','boulot','bout','bruit','bureau','café','camp','capitaine','chat','chemin','chéri','cheval','cheveu','chien','ciel','client','cœur','coin','colonel','compte','copain',
    'côté','coup','courant','début','départ','dieu','docteur','doigt','dollar','doute','droit','effet','endroit','ennemi','escalier','esprit','état','être','exemple','fait','film','flic','fond','français','frère','front','garçon','général','genre','goût','gouvernement','grand','groupe','haut','homme','honneur','hôtel','instant','intérêt','intérieur','jardin','jour','journal',
    'lieu','long','maître','mari','mariage','matin','médecin','mètre','milieu','million','moment','monde','monsieur','mouvement','moyen','noir','nouveau','numéro','oeil','oiseau','oncle', 'ordre','papa','papier','parent','passage','passé','patron','père','petit','peuple','pied','plaisir','plan','point','pouvoir','premier','présent','président','prince','problème','quartier',
    'rapport','regard','reste','retard','retour','rêve','revoir','salut','sang','secret','seigneur','sentiment','service','seul','siècle','signe','silence','soir','soldat','soleil','sourire','souvenir','sujet','téléphone','tout','train','travail','trou','truc','type','vent','ventre','verre','village','visage','voyage','fils','gens']

let url = "https://www.swagbucks.com/?q="

let nIntervId;
let count = 0
let nb = 50

function openInNewTab(url) {
    console.log(url)
    window.open(url);
}

function stop() {
    clearInterval(nIntervId);
    nIntervId = null;
    count=0;
}

function searchManyWords(nb)
{
        let j = Math.floor(Math.random()*297)
        let h = Math.floor(Math.random()*297)
   // openInNewTab(url + db[j] + "+" + db[h])
    openInNewTab(url + db[j])
    count++

    if(count===nb)
    {
        stop()
    }
}

button.addEventListener('click', () => {
    nIntervId = setInterval(()=> {searchManyWords(nb)}, 2000);
})