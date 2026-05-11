import "../../styles/App.css";

export default function MyName({ onBack }) {
  return (
    <section className="section-panel project-detail-page">
      <div className="section-head">
        <p className="eyebrow">Projet Entreprise</p>
        <h2>MyName</h2>
      </div>
      <p>
        MyName est un site web et une application permettant de générer des
        prénoms aléatoires pour son nouveau né. Réalisé en 2026, en duo avec mon
        collègue d'entreprise, pendant mon alternance en télétravail de 2 mois.
        J'ai donc pu utiliser les technologies React, Next.js et Directus.
      </p>
      <p className="eyebrow">Mission</p>

      <p>
        MyName est une plateforme ludique et utile pour les futurs parents
        souhaitant trouver l'inspiration pour le prénom de leur enfant.
        L'application propose des suggestions personnalisées et une interface
        moderne et intuitive.
      </p>

      <div className="project-details">
        <div className="project-info">
          <h3>Technologies utilisées</h3>
          <div className="tag-list">
            <span className="tag-pill">React</span>
            <span className="tag-pill">Next.js</span>
            <span className="tag-pill">Directus</span>
          </div>
        </div>

        <div className="project-links">
          <a
            href="https://name.nivo-app.com/"
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
