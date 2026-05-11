import "../../styles/stylesComponents/stylesBiblioBus.css";
// Vérifie bien que ces fichiers existent ou remplace-les par les bons PDFs de BiblioBus
import Instruction from "../assets/pdf/Instructions-Bibliobus.pdf";
import Cahier from "../assets/pdf/Cahier-des-charges-bibliobus.pdf";

export default function BiblioBus({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="center-container">
        <div className="section-head">
          <p className="eyebrow">Projet Formation</p>
          <h2>BiblioBus</h2>
        </div>

        <p>
          Plateforme web et logicielle permettant la gestion d'emprunts de
          collections de livres. Ce projet a été réalisé en 2024 dans le cadre
          de ma formation BTS SIO avec les technologies HTML/TWIG, Java FX et
          MongoDB.
        </p>

        {/* --- SECTION MISSION --- */}
        <div className="mission-block">
          <p className="eyebrow">Mission</p>
          <p>
            Le projet Bibliobus vise à faciliter l'accès à la culture en
            modernisant la gestion d'un parc de bibliothèques mobiles permettant
            aux abonnés de la bibliothèque de réserver et d'emprunter des livres
            via une application numérique. Le bibliothécaire gère les prêts et
            retours ainsi que l'ajout de nouveaux ouvrages dans la base de
            données. Le projet impliquait donc la conception d'une base de
            données relationnelle flexible et performante (MongoDB), une
            application web (HTML / Twig) et une application desktop avec une
            API pour la gestion des livres et des utilisateurs (Java FX).
          </p>

          <div className="project-details">
            <div className="project-info">
              <h3>Technologies Utilisées</h3>
              <div className="tag-list">
                <span className="tag-pill">HTML / Twig</span>
                <span className="tag-pill">Java FX</span>
                <span className="tag-pill">MongoDB</span>
              </div>
            </div>

            <div className="project-links">
              {/* Ligne des boutons secondaires alignés horizontalement */}
              <div className="secondary-links-row">
                <a
                  href={Instruction}
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instructions
                </a>
                <a
                  href={Cahier}
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cahier des charges
                </a>
                <a
                  href="https://github.com/sakagnir/php_bibliobus" // À mettre à jour
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
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
