import "../../styles/stylesComponents/stylesFoodProject.css";
import Instruction from "../assets/pdf/Instructions-Bibliobus.pdf";
import Cahier from "../assets/pdf/Cahier-des-charges-bibliobus.pdf";

export default function FoodProject({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="center-container">
        <div className="section-head">
          <p className="eyebrow">Projet Formation</p>
          <h2>FoodProject</h2>
        </div>

        <p>
          Food Projet est un service de livraison de repas diététiques qui
          fonctionne sur abonnement avec des formules. Le service propose un
          large choix de plats adaptés à divers régimes alimentaires
          (végétarien, végan, sans gluten, etc.).
        </p>

        {/* --- SECTION MISSION --- */}
        <div className="mission-block">
          <p className="eyebrow">Mission</p>
          <p>
            Ce projet Food Projet a été réalisé en 2024 dans le cadre de ma
            formation en 1ère année. Réalisé avec les languages de base.
            FoodProject est un site web inspiré de Resto Saveur et m'a permis de
            mettre en pratique mes connaissances en responsives. Conçu en
            JavaScript et HTML avec les CSS contenants des responsives pour
            s'adapter aux différentes tailles d'écran.
          </p>

          <div className="project-details">
            <div className="project-info">
              <h3>Technologies Utilisées</h3>
              <div className="tag-list">
                <span className="tag-pill">HTML</span>
                <span className="tag-pill">CSS</span>
                <span className="tag-pill">JavaScript</span>
              </div>
            </div>

            <div className="project-links">
              <a
                href="https://food-projet.vercel.app/"
                className="button primary"
                target="_blank"
                rel="noreferrer"
              >
                Voir le projet
              </a>
            </div>
          </div>
        </div>

        <button
          className="button primary"
          onClick={onBack}
          style={{ marginTop: "50px", width: "fit-content" }}
        >
          Retour au portfolio
        </button>
      </div>
    </section>
  );
}
