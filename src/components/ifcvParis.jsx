import "../../styles/App.css";

export default function IfcvParis({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="section-head">
        <p className="eyebrow">Projet Entreprise</p>
        <h2>Site IFCV Paris</h2>
      </div>
      <p>
        Site Web de l'école IFCV Paris, réalisé en collaboration avec le groupe
        IFCV et leurs partenaires l'Agence DANKA qui s'occupaient de la gestion
        des données. Avec ce projet j'ai découvert comment développer un site
        web avec WordPress et intègrer des principes d'UX Design.
      </p>
      <p className="eyebrow">Mission</p>
      <p>
        Le site web de l'IFCV Paris présente l'établissement éducatif, ses
        formations, ses valeurs et facilite l'inscription des étudiants.
        L'accent a été mis sur l'expérience utilisateur et l'accessibilité. Car
        le site est dédié aux étudiants actuels et futurs, ainsi qu'aux
        partenaires de l'école.
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
