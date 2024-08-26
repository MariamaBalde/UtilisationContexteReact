import { createContext, useState } from "react";
// Créez un contexte de thème en utilisant la fonction "createContext" de React, avec des valeurs par défaut pour "couleurPrincipale" et "police".
const ThemeContext = createContext({
    couleurPrincipale: 'darkviolet',
    police: 'Helvetica'
});

// Exportez le contexte pour pouvoir l'utiliser ailleurs dans l'application.
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        couleurPrincipale: "blue",
        police: 'Times New Roman',
    });

    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContext;



// Créez un fichier nommé "ThemeContext.js" pour définir le contexte du thème.
// Dans "ThemeContext.js", importez les modules nécessaires pour créer un contexte en React.
// Créez un contexte de thème en utilisant la fonction "createContext" de React, avec des valeurs par défaut pour "couleurPrincipale" et "police".
// Exportez le contexte pour pouvoir l'utiliser ailleurs dans l'application.
// Dans "App.js"(ou tout autre composant racine de votre application), enveloppez le contenu de l'application avec le contexte de thème que vous avez créé.
// Dans "App.js", affichez le texte "Thème : [couleurPrincipale] - Police : [police]" pour vérifier que le contexte fonctionne correctement.