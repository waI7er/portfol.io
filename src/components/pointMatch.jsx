import "../../styles/stylesComponents/stylesPointMatch.css";
// Ajout de l'extension .pdf et simplification des noms d'import
import pdfWeb from "../assets/pdf/Fiche E6- Point Match WEB.pdf";
import pdfApp from "../assets/pdf/Fiche E6- Point Match APP.pdf";
import Cahier from "../assets/pdf/Cahier_des_charges.docx.pdf";

export default function PointMatch({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="center-container">
        <div className="section-head">
          <p className="eyebrow">Projet Formation</p>
          <h2>.Match</h2>
        </div>

        <p>
          Point Match est une plateforme de réservation de séances de coaching
          sportif, développée avec React et Symfony. Ce projet de groupe a été
          réalisé dans le cadre de ma formation BTS SIO SLAM et démontre mes
          compétences en développement full-stack. Il est composé de deux
          parties : un site web et une application mobile.
        </p>

        {/* --- SECTION WEB --- */}
        <div className="mission-block">
          <p className="eyebrow">Mission Site WEB</p>
          <p>
            La Maison Des Ligues est un organisme qui accueille et organise des
            évènements sportifs de toutes disciplines. Cependant, La Maison Des
            Ligues rencontre des problèmes d'organisation et fait donc appel à
            nos services de développement. Afin de réaliser un site web “Point
            Match” en React, Symfony, MySL. Pour faciliter les disponibilités et
            les réservations des sessions de matchs entre les clubs et les
            coachs.
          </p>

          <div className="project-details">
            <div className="project-info">
              <h3>Technologies Utilisées</h3>
              <div className="tag-list">
                <span className="tag-pill">React</span>
                <span className="tag-pill">Symfony</span>
                <span className="tag-pill">MySQL</span>
              </div>
            </div>
            <div className="project-links">
              <a
                href="https://pointmatchfront.vercel.app"
                className="button primary"
                target="_blank"
                rel="noreferrer"
              >
                Voir le projet
              </a>
              <div className="secondary-links-row">
                <a
                  href={pdfWeb}
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Détails
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
                  href="https://github.com/Timotheehau/ProjetAp3Front"
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Front
                </a>
                <a
                  href="https://github.com/Timotheehau/ProjetAp3Symfony"
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Back
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr
          style={{
            margin: "40px 0",
            border: "0.1px solid rgba(255,255,255,0.1)",
            width: "100%",
          }}
        />

        {/* --- SECTION MOBILE --- */}
        <div className="mission-block">
          <p className="eyebrow">Mission APP Mobile</p>
          <p>
            La Maison Des Ligues est un organisme qui accueille et organise des
            évènements sportifs de toutes disciplines. Cependant, La Maison Des
            Ligues souhaite rendre le site web plus accessible et à portée de
            main des utilisateurs. Ainsi elle fait donc appel à nos services de
            développement. Afin de réaliser une interface mobile en React
            Native, Symfony, MySQL, qui va par la suite interagir avec l'API.
            Une application mobile “Point Match”.
          </p>

          <div className="project-details">
            <div className="project-info">
              <h3>Technologies Utilisées</h3>
              <div className="tag-list">
                <span className="tag-pill">React Native</span>
                <span className="tag-pill">Symfony</span>
                <span className="tag-pill">MySQL</span>
              </div>
            </div>
            <div className="project-links">
              <a
                href="https://pointmatchfront.vercel.app"
                className="button primary"
                target="_blank"
                rel="noreferrer"
              >
                Voir le projet
              </a>
              <div className="secondary-links-row">
                <a
                  href={pdfApp}
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Détails
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
                  href="https://github.com/Mokaioshin/PointMatchMobile"
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
