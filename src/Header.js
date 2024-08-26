import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Header() {
    // utilisez le contexte de thème pour afficher le texte "Thème : [couleurPrincipale] - Police : [police]".
    const theme = useContext(ThemeContext);
    return (
        <div style={{ color: theme.couleurPrincipale, font: theme.police }}>
            <h4>Thème : {theme.couleurPrincipale} - Police : {theme.police}</h4>
        </div>
    );
}

export default Header;

// Créez un composant fonctionnel nommé "Header.js".
// Dans "Header.js", utilisez le contexte de thème pour afficher le texte "Thème : [couleurPrincipale] - Police : [police]".

