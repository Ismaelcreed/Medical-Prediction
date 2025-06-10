import SideBar from "../../Components/SideBar/SideBar";
import Card from "../../Components/Card/Card";
import MedicalForm from "../../Components/MedicalForms/MedicalForms";
import './Model.scss';

function Model() {
    return (
        <div className="model-container">
        <SideBar />
        <div className="content-modelMain">
          {/* Conteneur pour superposer Card et Form */}
          <div className="overlay-container">
            <Card
              className="card"
              title="Manuel d'utilisation du modèle MyDokoterako"
              content="Veuillez remplir les informations nécessaires pour que MyDokoterako puisse prédire votre maladie ou votre état de santé."
            />
            <MedicalForm />
          </div>
        </div>
      </div>
      
    )
}

export default Model;
