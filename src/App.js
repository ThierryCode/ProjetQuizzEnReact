import React, { useState } from 'react';
import './App.css'
import Formulaire from './component/Formulaire/Formulaire';
import Resultat from './component/Resultat/Resultat';

function App() {
  // Création des variables d'état
  const [userTabRes, setUserTabRes] = useState([]);
  const exactReps = ['c', 'a', 'b', 'a', 'c'];
  const [titleRes, setTitleRes] = useState("Cliquez sur valider pour voir les résultats");
  const [noteRes, setNoteRes] = useState("");
  const [aideRes, setAideRes] = useState("");
  const [verifTab, setVerifTab] = useState([]);
  const allQuest = document.querySelectorAll('.questionBlock');

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const userResponses = [];
    
    for (let i = 1; i < 6; i++) {
      userResponses.push(document.querySelector(`input[name=q${i}]:checked`).value);
    }

    setUserTabRes(userResponses);
    verifRes(userResponses);
  };

  // Vérification des réponses de l'utilisateur
  const verifRes = (tabRes) => {
    const tabValBool = [];

    for (let i = 0; i < 5; i++) {
      tabValBool.push(tabRes[i] === exactReps[i]);
    }

    setVerifTab(tabValBool);
    afficheRes(tabValBool);
    lesCouleurs(tabValBool);
  };

  // Affichage des résultats
  const afficheRes = (tabResCheck) => {
    const nbFautes = tabResCheck.filter((el) => !el).length;

    switch (nbFautes) {
      case 0:
        setTitleRes("✔️👍Bravo, vous avez fait un sans faute!!!👍✔️");
        setAideRes("");
        setNoteRes("5/5 T'es un génie, loin de Rajoelina qui a un œuf");
        break;
      case 1:
        setTitleRes("✨Bravo, vous avez presque fait un sans faute✨");
        setAideRes("Retente ta chance avec les cases en rouge et revalide le test ;)");
        setNoteRes("Tu es presque avec le score de 4/5");
        break;
      case 2:
        setTitleRes("👍C'est déjà bien!!!👍");
        setAideRes("Retente ta chance avec les cases en rouge et revalide le test ;)");
        setNoteRes("Au-dessus de la moyenne 3/5");
        break;
      case 3:
        setTitleRes("😭Mon Dieu, tu peux encore faire mieux que ça😭");
        setAideRes("Retente ta chance avec les cases en rouge et revalide le test ;)");
        setNoteRes("Le score est déjà assez ... 2/5");
        break;
      case 4:
        setTitleRes("👀Tu es presque comme Rajoelina👀");
        setAideRes("Retente ta chance avec les cases en rouge et revalide le test ;)");
        setNoteRes("Tu casses l'œuf avec un 1/5");
        break;
      case 5:
        setTitleRes("😭Lamentable, tu t'appelles Cédric ou quoi!!!😭");
        setAideRes("Retente ta chance avec les cases en rouge et revalide le test ;)");
        setNoteRes("T'as une note de 0/5");
        break;
      default:
        setTitleRes("Ce n'est plus rien!");
    }
  };

  // Appliquer les couleurs et les animations
  const lesCouleurs = (tabValBool) => {
    allQuest.forEach((item, index) => {
      if (tabValBool[index]) {
        item.style.background = "lightgreen";
      } else {
        item.style.background = "#ffb8b8";
        item.classList.add('echec');
        setTimeout(() => {
          item.classList.remove('echec');
        }, 500);
      }
    });
  };

  // Réinitialiser les couleurs
  allQuest.forEach((item) => {
    item.addEventListener('click', () => {
      item.style.background = "white";
    });
  });

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
        rel="stylesheet"
      ></link>
      <h1>Quizz Culture générale!</h1>
      <div className="container-global">
        <Formulaire handleSubmit={handleSubmit} />
        <Resultat titleRes={titleRes} aideRes={aideRes} noteRes={noteRes} />
      </div>
    </div>
  );
}

export default App;
