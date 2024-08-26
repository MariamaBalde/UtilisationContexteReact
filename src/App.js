import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { useContext } from 'react';
import './App.css';
import ThemeContext, { ThemeProvider } from './ThemeContext';
import Header from './Header';
import ThemeChanger from "./ThemeChanger";
function App() {
  // Dans "App.js" (ou tout autre composant racine de votre application), enveloppez le contenu de l'application
  //  avec le contexte de thème que vous avez créé.
  const theme = useContext(ThemeContext);

  return (
    //  vérifier que le contexte fonctionne correctement.
    <div className="App">
      <ThemeProvider>
        <div style={{ color: theme.couleurPrincipale, fontFamily: theme.police }}>
          <h1>Thème : {theme.couleurPrincipale} - Police : {theme.police}</h1>
        </div>
        <Header/>
        <ThemeChanger/>
      </ThemeProvider>
    </div>
  );
}

export default App;
