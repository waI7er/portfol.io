import "../../styles/stylesComponents/stylesVeilleTechnologique.css";
import Veile from "../assets/pdf/Veille Technologique.pdf";

export default function VeilleTechnologique({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="center-container">
        <div className="section-head">
          <p className="eyebrow">Veille Technologique</p>
          <h2>L'IA : Une Révolution ?</h2>
        </div>

        <p>
          La veille technologique est une activité qui consiste à s'informer de
          façon continue sur les nouveautés du secteur informatique. Mon sujet
          de veille porte sur l'Intelligence Artificielle Générative, une
          technologie capable de créer du contenu (texte, image, code) à partir
          de directives simples, prompts.
        </p>

        <div className="mission-block">
          <p className="eyebrow">Sujet de Veille</p>
          <p>
            Mon sujet explore comment l'IA transforme la création numérique. Le
            sujet principal que j'aborde est l'évolution rapide positif ou
            négatif des modèles de langage comme GPT-4 et leur intégration dans
            les outils quotidiens des développeurs. Ma veille se concentre aussi
            sur trois axes : l'assistance au développement (comme GitHub
            Copilot), la génération d'images ainsi que les enjeux éthiques liés
            au droit d'auteur.
          </p>

          <div className="project-details">
            <div className="project-info">
              <h3>Outils de Veille Utilisés</h3>
              <div className="tag-list">
                <span className="tag-pill">Google Alerts</span>
                <span className="tag-pill">Feedly</span>
              </div>
            </div>

            <div className="project-links">
              <div className="secondary-links-row">
                <a
                  href="https://www.google.fr/alerts"
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Alertes
                </a>
                <a
                  href="https://feedly.com/i/board/content/user/63fb47af-b6d6-467a-a637-24728c678e1f/tag/global.saved"
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Feedly
                </a>

                <a
                  href={Veile}
                  className="button secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sujet de Veille
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième bloc d'information sans changer le style */}
        <div className="mission-block" style={{ marginTop: "40px" }}>
          <p className="eyebrow">Organisation de la Veille</p>
          <p>
            Pour organiser cette veille, j'ai mis en place une méthode de Push &
            Pull. Google Alerts (Push) m'envoie automatiquement les actualités
            sur le mot-clé "IA Générative" par mail. Feedly (Pull) me permet de
            consulter quotidiennement les flux RSS de sites spécialisés
            (TechCrunch, Le Monde Informatique).
          </p>
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
