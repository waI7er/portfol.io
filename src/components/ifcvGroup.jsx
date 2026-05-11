import "../../styles/stylesComponents/stylesIfcvGroup.css";

export default function IfcvGroup({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="section-head">
        <p className="eyebrow">Projet Entreprise</p>
        <h2>Site Groupe IFCV</h2>
      </div>
      <p>
        Site Web du groupe IFCV, réalisé en collaboration avec le groupe IFCV et
        leurs partenaires l'Agence DANKA. Ce projet a été développé avec
        WordPress et intègre des principes d'UX Design.
      </p>
      <p>
        Le site web du groupe IFCV présente l'ensemble des établissements du
        réseau, leurs formations et leurs valeurs communes. L'accent a été mis
        sur une navigation fluide et une présentation cohérente de l'offre
        éducative.
      </p>

      <div className="project-details">
        <div className="project-info">
          <h3>Technologies utilisées</h3>
          <div className="tag-list">
            <span className="tag-pill">WordPress</span>
            <span className="tag-pill">UX Design</span>
          </div>
        </div>

        <div className="project-links">
          <a
            href="https://www.ifcv.fr/"
            className="button primary"
            target="_blank"
            rel="noreferrer"
          >
            Voir le projet
          </a>
          <button className="button secondary" onClick={onBack}>
            Retour au portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
