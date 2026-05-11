import { useState } from "react";
import "../../styles/stylesComponents/stylesBtsSio.css";

export default function BtsSio({ onBack }) {
  const [view, setView] = useState("bts");

  return (
    <section className="section-panel bts-page">
      {/* Toggle Switch en haut */}
      <div className="toggle-container">
        <div className="toggle-bg">
          <button
            className={`toggle-btn ${view === "bts" ? "active" : ""}`}
            onClick={() => setView("bts")}
          >
            BTS SIO
          </button>
          <button
            className={`toggle-btn ${view === "alternance" ? "active" : ""}`}
            onClick={() => setView("alternance")}
          >
            ALTERNANCE
          </button>
        </div>
      </div>

      {view === "bts" ? (
        <div className="animate-fade">
          <div className="section-head">
            <p className="eyebrow">BTS SIO</p>
            <h2>Qu'est ce que la formation BTS SIO ?</h2>
          </div>
          <p className="bts-intro">
            Le BTS SIO (Services Informatiques aux Organisations) est une
            formation de niveau Bac+2 qui prépare aux métiers de l'informatique
            à travers deux options :
          </p>

          <div className="bts-grid">
            <article className="project-card bts-spec-card">
              <div className="project-top">
                <p className="project-label">Option A</p>
              </div>
              <h3>BTS SIO SLAM</h3>
              <p>
                BTS SIO SLAM (Solutions Logicielles et Applications Métiers) est
                une formation orientée développement. Cette formation permet aux
                étudiants d'apprendre la programmation afin de pouvoir
                concevoir, sécuriser et développer des applications logicielles
                adaptées aux besoins des entreprises, que ce soit pour des
                applications de gestion, des sites web ou des applications
                mobiles. Les débouchés professionnels sont :
                <ul className="bts-card-list">
                  <li>Développeur Fullstack</li>

                  <li>Analyste programmeur</li>

                  <li>Chargé de projets</li>
                </ul>
              </p>
            </article>

            <article className="project-card bts-spec-card">
              <div className="project-top">
                <p className="project-label">Option B</p>
              </div>
              <h3>BTS SIO SISR</h3>
              <p>
                BTS SIO SISR (Solutions d'Infrastructures Systèmes & Réseaux)
                est une formation orientée Réseaux. Cette formation permet aux
                étudiants d'apprendre les principes de conception,
                d'installation, de sécurisation et de maintenance des parcs
                informatiques et réseaux. Les débouchés professionnels sont :
                <ul className="bts-card-list">
                  <li>Administrateurs Systèmes & Réseaux</li>
                  <li>Technicien Support</li>
                  <li>Expert Cybersécurité</li>
                </ul>
              </p>
            </article>
          </div>
        </div>
      ) : (
        <div className="animate-fade">
          <div className="section-head">
            <p className="eyebrow">Alternance</p>
            <h2>Mes Alternances</h2>
          </div>

          <article
            className="project-card clickable alternance-card"
            onClick={() => (window.location.hash = "#/myname")}
          >
            <div className="project-top">
              <p className="project-label">2026 - 2026</p>
            </div>
            <h3>Nivo Web</h3>
            <p>
              Au sein de l'entreprise Nivo Web, basée à Bordeaux, j'ai participé
              donc en télétravail, à la création d'une application web et mobile
              en utilisant React pour le frontend, Next.js pour le backend et
              Directus pour la base de données. Une application destinée à
              générer des prénoms aléatoires pour des utilisateurs parents qui
              recherchent des idées de prénoms pour leurs enfants. Ce projet de
              2 mois m'a permis de mettre en pratique mes compétences en
              développement, tout en découvrant les réalités du monde
              professionnel et les défis liés à la gestion de projets
              informatiques.
            </p>
            <div className="tag-list">
              <span className="tag-pill">React</span>
              <span className="tag-pill">Next.js</span>
              <span className="tag-pill">Directus</span>
            </div>
            <span className="project-link">Détails →</span>
          </article>

          <article
            className="project-card clickable alternance-card"
            onClick={() => (window.location.hash = "#/ifcvparis")}
          >
            <div className="project-top">
              <p className="project-label">2025 - 2025</p>
            </div>
            <h3>IFCV Alternance</h3>
            <p>
              Au sein de l'école IFCV Alternance, basée à Levallois Perret, j'ai
              participé avec l'aide des collaborateurs de l'Agence DANKA, à la
              création du site web de l'école, en utilisant pour ma partie
              WordPress, et l'Agence DANKA eux s'occupaient de toute la partie
              backend et base de données. Un site web destiné aux utilisateurs
              de l'école ainsi qu'aux futurs étudiants afin de pouvoir accéder
              au contenu de leurs formations,aux informations concernant la vie
              scolaire à IFCV, et d'autres éléments auxquels ils pourraient être
              intéressés. Ce projet de 6 mois m'a permis de découvrir
              l'utilisation de WordPress en entreprise, l'organisation du
              travail en collaboration en respectant des délais de livrables et
              en faisant face aux incidences à distance ainsi que les différents
              stratagèmes misent en oeuvre pour attirer l'attention des futurs
              utilisateurs.
            </p>
            <div className="tag-list">
              <span className="tag-pill">Wordpress</span>
              <span className="tag-pill">Gestion de Projet</span>
              <span className="tag-pill">UX/UI Design</span>
            </div>
            <span className="project-link">Détails →</span>
          </article>

          <article
            className="project-card clickable alternance-card"
            onClick={() => (window.location.hash = "#/morpion")}
          >
            <div className="project-top">
              <p className="project-label">2024 - 2024</p>
            </div>
            <h3>AMINUM</h3>
            <p>
              {" "}
              Au sein de l'entreprise AMINUM, basée à Garches, j'ai participé,
              principalement, à des installations de servers pour AMINUM et à la
              création de sites web, en utilisant le combo HTML/CSS/JavaScript.
              Ces sites web étaient destinées à des commercants locaux ou des
              clients particuliers d'AMINUM à des fins de vitrines en ligne pour
              mettre en avant leurs produits et services. Mais à côté de cela
              j'ai aussi réalisé avec mon formateurs des mini projets de
              découverte des langages informatiques de base (HTML, CSS,
              JavaScript, React), avec mes collégues d'alternances. Cette
              alternance de 6 mois m'a permis de découvrir les réalités du
              travail en entreprise, les attentes des clients, et les défis liés
              à la création de sites web pour des utilisateurs finaux avec des
              besoins spécifiques.
            </p>
            <div className="tag-list">
              <span className="tag-pill">React</span>
              <span className="tag-pill">HTML</span>
              <span className="tag-pill">CSS</span>
              <span className="tag-pill">JavaScript</span>
            </div>
            <span className="project-link">Détails →</span>
          </article>
        </div>
      )}

      <button
        className="button primary"
        onClick={onBack}
        style={{ marginTop: "50px" }}
      >
        Retour au portfolio
      </button>
    </section>
  );
}
