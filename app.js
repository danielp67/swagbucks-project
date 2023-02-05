
let button = document.getElementById('button')

let db = ['aide','chef','enfant','garde','gauche','geste','gosse','livre','merci','mort','ombre','part','poche','professeur','tour','fois','madame','paix','voix','affaire','année','arme','armée','attention','balle','boîte','bouche','carte','cause','chambre','chance','chose','classe','confiance','couleur','cour','cuisine','dame','dent','droite','école','église','envie',
    'épaule','époque','équipe','erreur','espèce','face','façon','faim','famille','faute','femme','fenêtre','fête','fille','fleur','force','forme','guerre','gueule','habitude','heure','histoire','idée','image','impression','jambe','joie','journée','langue','lettre','lèvre','ligne','lumière','main','maison','maman','manière','marche','merde','mère','minute','musique','nuit',
    'odeur','oreille','parole','partie','peau','peine','pensée','personne','peur','photo','pièce','pierre','place','police','porte','présence','prison','putain','question','raison','réponse','robe','route','salle','scène','seconde','sécurité','semaine','situation','soeur','soirée','sorte','suite','table','terre','tête','vérité','ville','voiture','avis','bois','bras','choix',
    'corps','cours','gars','mois','pays','prix','propos', 'sens','temps','travers','vieux','accord','agent','amour','appel','arbre','argent','avenir','avion','bateau','bébé','besoin','bonheur','bonjour','bord','boulot','bout','bruit','bureau','café','camp','capitaine','chat','chemin','chéri','cheval','cheveu','chien','ciel','client','cœur','coin','colonel','compte','copain',
    'côté','coup','courant','début','départ','dieu','docteur','doigt','dollar','doute','droit','effet','endroit','ennemi','escalier','esprit','état','être','exemple','fait','film','flic','fond','français','frère','front','garçon','général','genre','goût','gouvernement','grand','groupe','haut','homme','honneur','hôtel','instant','intérêt','intérieur','jardin','jour','journal',
    'lieu','long','maître','mari','mariage','matin','médecin','mètre','milieu','million','moment','monde','monsieur','mouvement','moyen','noir','nouveau','numéro','oeil','oiseau','oncle', 'ordre','papa','papier','parent','passage','passé','patron','père','petit','peuple','pied','plaisir','plan','point','pouvoir','premier','présent','président','prince','problème','quartier',
    'rapport','regard','reste','retard','retour','rêve','revoir','salut','sang','secret','seigneur','sentiment','service','seul','siècle','signe','silence','soir','soldat','soleil','sourire','souvenir','sujet','téléphone','tout','train','travail','trou','truc','type','vent','ventre','verre','village','visage','voyage','fils','gens']


let dbVerbes = [
    'être','avoir','faire','dire','voir','prendre','pouvoir','parler','aller','savoir','donner','passer','mettre','partir','trouver','rire','vivre','laisser','rendre','sourire','venir','comprendre','penser','chercher','croire','entendre','tenir','demander','souvenir','attendre','sortir','regarder','jouer','écrire','connaître','devenir','mourir','rester','retrouver','entrer',
    'manger','tomber','tirer','lire','suivre','répondre','obtenir','perdre','expliquer','assurer','servir','porter','montrer','éviter','arriver','vouloir','reconnaître','monter','boire','oublier','poser','aimer','arrêter','sentir','atteindre','revenir','devoir','changer','dormir','permettre','quitter','reprendre','appeler','dîner','diner','apprendre','empêcher','établir',
    'travailler','garder','marcher','imaginer','considérer','tendre','lever','tourner','gagner','recevoir','revoir','aider','créer','découvrir','compter','tuer','courir','rentrer','réaliser','toucher','finir','descendre','ajouter','présenter','essayer','coucher','occuper','asseoir','jeter','payer','définir','déjeuner','déjeûner','agir','choisir','distinguer','préparer',
    'apparaître','remettre','raconter','échapper','acheter','rejoindre','battre','écouter','offrir','glisser','conduire','paraître','exprimer','pleurer','étudier','retourner','accepter','défendre','maintenir','rappeler','continuer','disparaître','commencer','produire','officier','observer','apporter','former','admettre','retenir','fournir','déterminer','pousser',
    'rencontrer','fixer','construire','constater','remarquer','cacher','développer','prévoir','préciser','réduire','constituer','résoudre','crier','sauver','remonter','imposer','naître','envoyer','souffrir','tenter','juger','bouger','exercer','intervenir','supporter','mesurer','sauter','apercevoir','conserver','représenter','placer','traiter','appliquer','remplacer',
    'baiser','étendre','mener','affirmer','satisfaire','réfléchir','chanter','vendre','traverser','fier','décider','entraîner','entrainer','avancer','refuser','abandonner','protéger','noter','remplir','fermer','dégager','ramener','poursuivre','couper','embrasser','décrire','répéter','organiser','vérifier','danser','espérer','frapper','accomplir','exister','avouer',
    'couler','élever','parvenir','arracher','citer','provoquer','renoncer','approcher','lancer','séparer','transformer','examiner','justifier','installer','respirer','rêver','prévenir','taire','relever','plancher','livrer','pénétrer','détruire','rouler','discuter','modifier','participer','régler','engager','employer','profiter','concevoir','envisager','soutenir',
    'promener','conclure','nourrir','prouver','douter','laver','disposer','aboutir','dépasser','intéresser','prononcer','apprécier','rechercher','assister','marquer','lutter','effectuer','rompre','partager','supposer','accorder','procéder','casser','convaincre','éloigner','emporter','introduire','augmenter','évoquer','amener','enlever','designer','désigner','franchir',
    'réveiller','écarter','proposer','calculer','diriger','posséder','retirer','durer','voler','crever','résister','deviner','tromper','dresser','céder','craindre','prêter','couvrir','ménager','traîner','cesser','traduire','aborder','confondre','peindre','entreprendre','débarrasser','comparer','entretenir','amuser','plaindre','fabriquer','attaquer','combattre','accroître',
    'ignorer','reposer','attirer','songer','emmener','opposer','visiter','améliorer','annoncer','éprouver','accompagner','recommencer','conseiller','bruler','brûler','adresser','adapter','prétendre','rapprocher','confier','indiquer','nier','signaler','serrer','démontrer','réussir','soumettre','appuyer','surveiller','prier','éclater','acquérir','chasser','endormir',
    'attribuer','souligner','épouser','adopter','interroger','révéler','éclairer','limiter','demeurer','libérer','inventer','consacrer','faciliter','ranger','plaire','goûter','gouter','rocher','effacer','communiquer','exécuter','boucher','répartir','repartir','réunir','respecter','interpréter','forcer','contrôler','vaincre','ficher','lâcher','trembler','supprimer','identifier',
    'opérer','diminuer','imiter','manifester','insister','admirer','rétablir','filer','contenter','mêler','nommer','exposer','écraser','marier','achever','jouir','surprendre','soulever','fondre','dissimuler','allumer','consulter','briser','obéir','reconstituer','enfoncer','analyser','éliminer','étonner','terminer','procurer','contempler','peser','transporter','ressembler',
    'classer','éteindre','inscrire','déplacer','habiter','ramasser','attacher','accueillir','sonner','substituer','déceler','soigner','fumer','arranger','parcourir','reculer','claquer','veiller','compléter','publier','hésiter','téléphoner','contenir','dominer','transmettre','causer','situer','détacher','fonctionner','rassurer','avaler','associer','rassembler','saluer','briller',
    'commander','valoir','reproduire','recueillir','taper','isoler','mentir','rattraper','multiplier','orienter','user','affronter','enseigner','falloir','enfermer','dessiner','favoriser','retomber','recourir','pratiquer','abattre','baisser','bénéficier','fonder','exiger','réparer','risquer','percevoir','comporter','vider','accéder','composer','formuler','caresser','signer',
    'prolonger','varier','détourner','rapporter','consoler','éveiller','regagner','calmer','survivre','renforcer','réclamer','plonger','ressortir','attraper','négliger','figurer','corriger','chier','hurler','craquer','préserver','récupérer','accrocher','grandir','reprocher','habiller','tarder','déposer','assumer','évaluer','susciter','noyer','regretter','exploiter','remuer',
    'remercier','inviter','rejeter','déduire','charger','échanger','appartenir','persuader','planter','distraire','percer','tracer','guider','bâtir','combler','déranger','déclarer','interrompre','plier','inquiéter','secouer','bouffer','entrevoir','souffler','souhaiter','discerner','confirmer','allonger','grimper','pardonner','repérer','estimer','presser','creuser','lier',
    'clocher','boulanger','verser','refermer','repousser','piquer','obliger','pencher','informer','correspondre','conquérir','étouffer','déchiffrer','ressentir','sacrifier','mordre','désirer','excuser','encourager','subsister','explorer','nettoyer','délivrer','gêner','coller','avertir','ôter','élargir','intégrer','garantir','renouveler','oser','fouiller','répandre','résumer',
    'interdire','pisser','convenir','venger','surmonter','rédiger','contribuer','jaillir','emprunter','défiler','agiter','séduire','revivre','signifier','flotter','défaire','croître','concilier','émettre','concentrer','suffire','renvoyer','renverser','commettre','inspirer','troubler','chauffer','balancer','réserver','soucier','mentionner','enregistrer','réchauffer',
    'élaborer','assimiler','dénoncer','voyager','témoigner','précipiter','suggérer','embarquer','loger','régner','distribuer','sécher','enrichir','soupçonner','essuyer','dissoudre','compenser','grouper','cueillir','manier','caractériser','progresser','répartir','repartir','absorber','maîtriser','maitriser','basculer','compromettre','circuler','pécher','pêcher','déclencher',
    'alimenter','épargner','instruire','apaiser','remédier','accuser','cracher','heurter','enfiler','souper','redresser','nager','coudre','envahir','ennuyer','louer','évoluer','préférer','habituer','repasser','soustraire','baigner','consentir','condamner','négocier','guetter','protester','reporter','sembler','bondir','vibrer','dissiper','pendre','rattacher','moquer','trancher',
    'atténuer','déchirer','priver','voter','triompher','murmurer','repentir','pourvoir','édifier','exclure','renseigner','enterrer','parer','ordonner','gratter','diviser','frotter','déployer','rigoler','raisonner','tailler','bavarder','illustrer','capter','relire','mériter','émouvoir','revêtir','dérouler','étaler','dérober','fréquenter','abriter','promettre','blesser','approuver',
    'animer','cultiver','relier','célébrer','dévorer','résigner','hâter','contester','vanter','recouvrir','critiquer','croiser','doubler','conférer','réciter','restaurer','résulter','qualifier','promouvoir','attarder','gémir','bucher','bûcher','combiner','approfondir','succéder','coordonner','abaisser','cogner','imprimer','accélérer','jurer','contraindre','mouiller','déshabiller',
    'invoquer','ralentir','préoccuper','dépenser','déboucher','siffler','accumuler','restituer','retarder','décrocher','redouter','influencer','généraliser','entamer','balayer','simplifier','perfectionner','épuiser','épanouir','débarquer','redevenir','éclaircir','consommer','fendre','soulager','décourager','engendrer','fêter','renaître','affranchir','freiner','racheter','initier',
    'dater','raser','solliciter','errer','honorer','féliciter','entourer','dépouiller','exciter','tâcher','tacher','pleuvoir','insérer','accommoder','énumérer','incliner','convertir','exploser','redire','méconnaître','rallier','nouer','aménager','viser','débrouiller','sombrer','masquer','ressusciter','buter','mépriser','découper','proclamer','menacer','mater','contrarier','réjouir',
    'cerner','gouverner','dispenser','affecter','renier','virer','périr','plaider','gonfler','saigner','redonner','fourrer','hisser','photographier','expédier','étrangler','puiser','inciter','projeter','accentuer','sauvegarder','lasser','exagérer','méditer','insulter','choir','lécher','décoller','emplir','abuser', 'pourrir','rembourser','autoriser','gravir','frémir','débattre',
    'tisser','compliquer','cocher','dépendre','équilibrer','détendre','rater','déborder','reconstruire','redescendre','gâcher','copier','contredire','plaisanter','abîmer','abimer','évacuer','grossir','résonner','aggraver','conformer','hausser','administrer','dissocier','effondrer','pressentir','gueuler','disputer','coûter','fusiller','couter','coïncider','chialer','différencier',
    'recommander','modeler','foncer','équiper','décharger','inspecter','tousser','aligner','instituer','violer','énoncer','gérer','ébranler','assigner','émerger','planquer','liquider','réprimer','démarrer','frayer','effrayer','contourner','référer','tâter','retracer','différer','semer','commenter','camper','barrer','pâter','flatter','ranimer','confronter','confesser','retentir',
    'sursauter','incarner','anéantir','pater','détester','tremper','feindre','regrouper','doter','économiser','égarer','articuler','refroidir','brouiller','adhérer','recruter','attendrir','trier','tordre','ramper','aventurer','détailler','assassiner','restreindre','apprivoiser','défier','impressionner','pointer','engloutir','envelopper','ruiner','réconcilier','abolir','corner',
    'manipuler','esquisser','amorcer','dériver','incorporer','ronfler','disperser','replacer','rôder','roder','échouer','mélanger','dévoiler','détecter','raccrocher','applaudir','excéder','reparaître','financer','aspirer'
]

let url = "https://www.swagbucks.com/?q="

let nIntervId;
let count = 0
let nb = 25

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