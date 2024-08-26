import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeChanger() {
    const {couleurPrincipale,police,setTheme}=useContext(ThemeContext);
    const [color,setColor]=useState(couleurPrincipale)
    const[font,setFont]=useState(police);

    return(
        <div className="container col-lg-6 m-auto col-12 border">
            <form className="my-3" onSubmit={(e)=>{
                e.preventDefault();
                setTheme({couleurPrincipale:color,police:font})
            }}>
                <div className="mb-3">
                    <label  className="form-label">Couleur</label>
                    <input type="text" 
                    value={color}
                    onChange={(e)=>{
                        setColor(e.target.value)
                    }}
                    className="form-control"/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Police</label>
                    <input type="text"
                    value={font}
                    onChange={(e)=>{
                        setFont(e.target.value)
                    }}
                     className="form-control"
                     />
                </div>
                <button type="submit" className="btn btn-primary w-100">Modifier le théme</button>
            </form>
        </div>
    )
}


export default ThemeChanger;


// Créez un composant fonctionnel nommé "ThemeChanger.js".
//Dans "ThemeChanger.js", utilisez le contexte de thème pour afficher un formulaire simple permettant de modifier la couleur principale et la police.
// Lorsque l'utilisateur soumet le formulaire, mettez à jour les propriétés du contexte avec les nouvelles valeurs saisies.
// Assurez - vous que les modifications du contexte sont répercutées dans l'ensemble de l'application, y compris dans le composant "Header.js".