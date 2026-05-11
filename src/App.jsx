import { useEffect, useState, useRef } from "react";
import logoImg from "./assets/logo.svg";
import BtsSio from "./components/bts-sio.jsx";
import Veille from "./components/veilleTechnologique.jsx";
import PointMatch from "./components/pointMatch.jsx";
import BiblioBus from "./components/biblioBus.jsx";
import FoodProject from "./components/foodProject.jsx";
import MyName from "./components/myName.jsx";
import IfcvParis from "./components/ifcvParis.jsx";
import Morpion from "./components/morpion.jsx";
import Puissance from "./components/puissance4.jsx";
import Photo from "./assets/img/Photo.PNG";
import ImgCloud from "./assets/img/miniature-certif-cloud.png";
import ImgV3 from "./assets/img/miniature-certif-V3.png";
import ImgCisco from "./assets/img/miniature-certif-cisco.png";
import PdfCloud from "./assets/pdf/IBM CC0101EN Certificate _ Cognitive Class.pdf";
import PdfV3 from "./assets/pdf/IBM CC0103EN Certificate Essentials V3_ Cognitive Class.pdf";
import PdfCisco from "./assets/pdf/Certificate Introduction to Cybersecurity.pdf";
import PdfE5 from "./assets/pdf/Tableau de synthèse - Epreuve E5 - BTS SIO 2026.pdf";
import CV from "./assets/pdf/GOMA TCHITEMBO Lovson - CV.pdf";
import "../styles/App.css";

const parcours = [
  {
    title: "BAC TECHNOLOGIQUE - STI2D",
    period: "2021 - 2022",
    ecole: "Lycée Saint Erembert -",
    location: "Saint Germain-en-Laye (78)",
    description:
      "Spécialité en innovation technologique et éco-conception, avec des projets en électronique, mécanique et développement de solutions durables.",
    compétences: "(SolidWorks, Meca3D, Arduino, Python)",
  },
  {
    title: "TEK-1",
    period: "Promo 2022 - 2027",
    ecole: "Epitech Paris -",
    location: "Kremlin bicêtre (94)",
    description:
      "Piscine d'immersion intensive de 4semaines, axée sur la découverte du langage C et de l'environnement linux. Suivis de plusieurs minis projets bootcamps seul ou en équipe.",
    compétences: "(C, Linux, Git, Shell, Algorithmie)",
  },
  {
    title: "BTS SIO SLAM - 1ère année",
    period: "2023 - 2024",
    ecole: "IMIE Paris -",
    location: "Levallois-Perret (92)",
    description:
      "(Alternance) Formation globale sur la gestion du patrimoine, la réponse aux incidents, la gestion de données et la programmation web.",
    compétences: "(HTML, CSS, JavaScript, PHP, MySQL, Git, GLPI)",
  },
  {
    title: "BTS SIO SLAM - 2ème année",
    period: "2024 - 2025",
    ecole: "IMIE Paris -",
    location: "Levallois-Perret (92)",
    description:
      "(Alternance) Formation spécialisée sur la gestion de données, la cybersécurité, la conception et le développement d'applications web/mobile.",
    compétences: "(React, Symfony, MySQL, API REST, React Native, Postman)",
  },
  {
    title: "BTS SIO SLAM - 2ème année",
    period: "2025 - 2026",
    ecole: "IPSSI -",
    location: "Saint Quentin-en-Yvelines (78)",
    description:
      "(Alternance) Formation spécialisée sur la gestion de données, la cybersécurité, la conception et le développement d'applications web/mobile.",
    compétences: "(React, Symfony, MySQL, API REST, React Native, Postman)",
  },
];

const projects = [
  {
    title: ".Match",
    type: "Projet BTS",
    description:
      "Plateforme de réservation de séances de coaching sportif, développée avec React/Native et Symfony.",
    tags: ["React", "React Native", "Symfony", "MySQL"],
    link: "https://pointmatchfront.vercel.app",
  },
  {
    title: "BiblioBus",
    type: "Projet BTS",
    description:
      "Plateforme web permettant la gestion d'emprunts de collections de livre depuis sa platerforme.",
    tags: ["HTMLTWIG", "JAVA FX", "MONGODB"],
    link: "#",
  },
  {
    title: "Food Project",
    type: "Formation",
    description:
      "Site de recettes de cuisine avec fonctionnalités de recherche, filtrage et gestion de favoris.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://food-projet.vercel.app/",
  },
];

const enterpriseProjects = [
  {
    title: "MyName",
    description:
      "Site web et Application permettant de générer des prénoms aléatoire à son nouveau né.",
    tags: ["React", "Next.js", "Directus"],
    link: "https://name.nivo-app.com/",
  },
  {
    title: "Site IFCV Paris",
    description:
      "Site Web de l'école IFCV Paris, (projet réalisé en collaboration avec le groupe IFCV et leurs partenaires l'Agence DANKA).",
    tags: ["WordPress", "UX Design"],
    link: "https://www.ifcv.fr/",
  },
  {
    title: "Projet Morpion",
    description:
      "Reproduction du célébre jeu de reflexion morpion en version web, avec une interface simple et intuitive.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://portfolio3-roan-six.vercel.app/site/Morpion/Morpion.html",
  },
  {
    title: "Projet Puissance 4",
    description:
      "Reproduction du célébre jeu de reflexion puissance 4 en version web, avec une interface simple et intuitive.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://portfolio3-roan-six.vercel.app/site/Puissance4/Puissance_4.html",
  },
];

const skillGroups = [
  {
    title: "Front-end",
    skills: ["React", "React Native", "JavaScript", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Symfony", "Python", "PHP", "GO"],
  },
  {
    title: "Base de données",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Outils",
    skills: ["Git", "VS Code", "Figma", "Postman"],
  },
];

// 2. Ta liste de données (à adapter avec tes vrais diplômes/certifs)
const certifications = [
  {
    title: "Certifation IBM Cloud",
    organisation: "Cognitive Class",
    date: "2024",
    tags: ["Cloud"],
    image: ImgCloud,
    link: PdfCloud,
  },
  {
    title: "Certification IBM Essentials V3",
    organisation: "Cognitive Class",
    date: "2024",
    tags: ["Cloud"],
    image: ImgV3,
    link: PdfV3,
  },
  {
    title: "Certification Introduction to Cybersecurity",
    organisation: "Cisco Networking Academy",
    date: "2025",
    tags: ["Cybersécurité"],
    image: ImgCisco,
    link: PdfCisco,
  },
];

const documents = [
  {
    title: "Tableau de synthèse E5",
    description:
      "Document de synthèse regroupant les projets et les compétences acquises durant la formation.",
    links: [
      {
        label: "Visualiser",
        href: PdfE5,
      },
    ],
  },
  {
    title: "Veille Technologique",
    description:
      "Veille technologique sur les tendances actuelles du développement web, avec des analyses et des ressources pour approfondir chaque sujet.",
    links: [{ label: "Visualiser", href: Veille }],
  },
];

function App() {
  const [showTop, setShowTop] = useState(false);
  const [route, setRoute] = useState(window.location.hash || "#/");
  const timelineRef = useRef(null);
  const enterpriseProjectsRef = useRef(null);
  const certificationsRef = useRef(null);

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = Math.max(
        timelineRef.current.clientWidth * 0.75,
        280,
      );
      timelineRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollEnterpriseProjects = (direction) => {
    if (enterpriseProjectsRef.current) {
      const scrollAmount = Math.max(
        enterpriseProjectsRef.current.clientWidth * 0.75,
        280,
      );
      enterpriseProjectsRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 320);
    };

    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
      window.scrollTo(0, 0); // ✅ Force le retour en haut de page lors d'un clic
    };

    window.addEventListener("hashchange", handleHashChange);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleScroll();
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-block">
          <img src={logoImg} alt="Logo Lovson GOMA" className="brand-logo" />
          <div>
            <p className="brand-name">Mon Portfolio</p>
            {/* <p className="brand-role">Développeur Web </p> */}
          </div>
        </div>
        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#home">Accueil</a>
          <a href="#parcours">Parcours</a>
          <a href="#/bts-sio">BTS-SIO</a>
          <a href="#projects">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#documentation">Veille Technologique</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {route === "#/bts-sio" ? (
          <BtsSio onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/pointmatch" ? (
          <PointMatch onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/bibliobus" ? (
          <BiblioBus onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/foodproject" ? (
          <FoodProject onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/myname" ? (
          <MyName onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/ifcvparis" ? (
          <IfcvParis onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/morpion" ? (
          <Morpion onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/puissance" ? (
          <Puissance onBack={() => (window.location.hash = "#/")} />
        ) : route === "#/veille" ? (
          <Veille onBack={() => (window.location.hash = "#/")} />
        ) : (
          <>
            <section id="home" className="hero-section">
              <div className="hero-copy">
                <p className="eyebrow">Bienvenue sur Mon Portfolio</p>
                <h1>
                  Je suis Lovson GOMA, <br />
                  <span>Développeur Web</span>
                </h1>

                <div className="hero-description">
                  <p>Étudiant en BTS SIO SLAM en alternance,</p>
                  <p>
                    passionné par l'informatique et ses nouvelles technologies,
                  </p>
                  <p>je développe des sites web et des applications mobiles.</p>
                </div>

                <div className="hero-actions">
                  <a className="button primary" href="#projects">
                    Découvrez mes projets
                  </a>
                  <a className="button secondary" href="#contact">
                    Me contacter
                  </a>
                </div>
              </div>

              <div className="hero-right">
                <div className="profile-card">
                  <div className="profile-img-container">
                    <img
                      src={Photo}
                      alt="Lovson GOMA"
                      className="profile-mini-img"
                    />
                  </div>

                  <div className="profile-socials-row">
                    <a
                      href="https://github.com/waI7er"
                      target="_blank"
                      rel="noreferrer"
                      className="social-btn-mini github"
                      title="GitHub"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lovson-goma-328b59277/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-btn-mini linkedin"
                      title="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                      href={CV}
                      target="_blank"
                      rel="noreferrer"
                      className="social-btn-mini cv"
                    >
                      <i className="fas fa-file-pdf"></i> Mon CV
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <br></br>

            <section id="parcours" className="section-panel parcours-section">
              <div className="section-head">
                <p className="eyebrow">Mon Parcours Scolaire</p>
                <h2>Mes Formations</h2>
              </div>
              <div className="timeline-container">
                <button
                  className="scroll-arrow left-arrow"
                  onClick={() => scrollTimeline(-1)}
                >
                  ‹
                </button>
                <div className="timeline-grid" ref={timelineRef}>
                  {parcours.map((item, index) => (
                    <article
                      key={`${item.title}-${index}`}
                      className="timeline-card clickable"
                      role="link"
                      tabIndex="0"
                      onClick={() => (window.location.hash = "#/bts-sio")}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          window.location.hash = "#/bts-sio";
                        }
                      }}
                    >
                      <div className="timeline-header">
                        <h3>{item.title}</h3>
                        <span className="timeline-date">{item.period}</span>
                      </div>
                      <p className="timeline-ecole">{item.ecole}</p>
                      <p className="timeline-location">{item.location}</p>
                      <p>{item.description}</p>
                      <p>{item.compétences}</p>
                    </article>
                  ))}
                </div>
                <button
                  className="scroll-arrow right-arrow"
                  onClick={() => scrollTimeline(1)}
                >
                  ›
                </button>
              </div>
            </section>

            <section id="projects" className="section-panel projects-section">
              <div className="section-head">
                <p className="eyebrow">Mes Projets</p>
                <h2>Réalisation En Formation</h2>
              </div>
              <div className="cards-grid">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="project-card clickable"
                    role="link"
                    tabIndex="0"
                    onClick={() => {
                      const routeMap = {
                        ".Match": "#/pointmatch",
                        BiblioBus: "#/bibliobus",
                        "Food Project": "#/foodproject",
                      };
                      window.location.hash = routeMap[project.title] || "#";
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        const routeMap = {
                          ".Match": "#/pointmatch",
                          BiblioBus: "#/bibliobus",
                          "Food Project": "#/foodproject",
                        };
                        window.location.hash = routeMap[project.title] || "#";
                      }
                    }}
                  >
                    <div className="project-top">
                      <p className="project-label">{project.type}</p>
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Voir le site →
                      </a>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section
              id="enterprise-projects"
              className="section-panel projects-section"
            >
              <div className="section-head">
                <p className="eyebrow">Mes Projets Professionnels</p>

                <h2>Réalisation en Entreprise</h2>
              </div>

              <div className="timeline-container">
                <button
                  className="scroll-arrow left-arrow"
                  onClick={() => scrollEnterpriseProjects(-1)}
                >
                  ‹
                </button>

                <div className="timeline-grid" ref={enterpriseProjectsRef}>
                  {enterpriseProjects.map((project) => (
                    <article
                      key={project.title}
                      className="project-card clickable"
                      role="link"
                      tabIndex="0"
                      onClick={() => {
                        const routeMap = {
                          MyName: "#/myname",

                          "Site IFCV Paris": "#/ifcvparis",

                          "Projet Morpion": "#/morpion",

                          "Projet Puissance 4": "#/puissance",
                        };

                        window.location.hash = routeMap[project.title] || "#";
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          const routeMap = {
                            MyName: "#/myname",

                            "Site IFCV Paris": "#/ifcvparis",

                            "Projet Morpion": "#/morpion",

                            "Projet Puissance 4": "#/puissance",
                          };

                          window.location.hash = routeMap[project.title] || "#";
                        }
                      }}
                    >
                      <div className="project-top">
                        <p className="project-label">Alternance</p>

                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Voir le site →
                        </a>
                      </div>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <button
                  className="scroll-arrow right-arrow"
                  onClick={() => scrollEnterpriseProjects(1)}
                >
                  ›
                </button>
              </div>
            </section>
            <section id="skills" className="section-panel skills-section">
              <div className="section-head">
                <p className="eyebrow">Mes Compétences</p>
                <h2>Langages et outils</h2>
              </div>
              <div className="skills-group-grid">
                {skillGroups.map((group) => (
                  <div key={group.title} className="skill-group-card">
                    <h3>{group.title}</h3>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section
              id="certifications"
              className="section-panel projects-section"
            >
              <div className="section-head">
                <p className="eyebrow">Mes Certifications</p>
                <h2>Certifications</h2>
              </div>

              <div className="timeline-container">
                <div className="timeline-grid" ref={certificationsRef}>
                  {certifications.map((cert) => (
                    <article
                      key={cert.title}
                      className="project-card clickable"
                    >
                      <div className="project-top">
                        <p className="project-label">{cert.date}</p>
                        <div className="certif-image-container">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="certif-preview"
                          />
                        </div>
                        <a
                          className="project-link"
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Voir le certificat →
                        </a>
                      </div>

                      <h3>{cert.title}</h3>
                      <p>{cert.organisation}</p>

                      <div className="tag-list">
                        {cert.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
            <section
              id="documentation"
              className="section-panel documentation-section"
            >
              <div className="section-head">
                <p className="eyebrow">Veille Technologique & Tableau E5</p>
                <h2>Tableau E5 & Veille Technologique</h2>
              </div>

              <div className="doc-grid">
                {documents.map((doc) => (
                  <article
                    key={doc.title}
                    className="project-card clickable"
                    onClick={() => {
                      // Condition : si le titre contient "Veille", on change le hash
                      // Sinon, on ouvre le lien du document (ex: PDF du Tableau E5)
                      if (doc.title.toLowerCase().includes("veille")) {
                        window.location.hash = "#/veille";
                      } else {
                        window.open(doc.links[0].href, "_blank");
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        if (doc.title.toLowerCase().includes("veille")) {
                          window.location.hash = "#/veille";
                        }
                      }
                    }}
                    tabIndex="0"
                  >
                    <h3>{doc.title}</h3>

                    <p
                      style={{
                        color: "var(--text)",
                        opacity: 0.8,
                        lineHeight: "1.6",
                      }}
                    >
                      {doc.description}
                    </p>
                    <div className="project-top">
                      <p className="project-label">{doc.category}</p>
                      <span className="project-link">{doc.links[0].label}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="contact" className="section-panel contact-section">
              <div className="section-head">
                <p className="eyebrow">ME CONTACTER</p>
                <h2>Me contacter & En Savoir Plus</h2>
                <p className="contact-desc">
                  N'hésite pas à me contacter via mes réseaux. Je suis toujours
                  ouvert à de nouvelles opportunités.
                </p>
              </div>

              <div className="contact-grid">
                {/* Carte LinkedIn */}
                <article
                  className="project-card clickable contact-card"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/lovson-goma-328b59277/",
                      "_blank",
                    )
                  }
                >
                  <div className="contact-icon">LinkedIn</div>
                  <div className="contact-info">
                    <h3>Mon Profil LinkedIn</h3>
                    <p>Restons connectés et échangeons sur nos projets.</p>
                  </div>
                  <span className="project-link">Me rejoindre →</span>
                </article>

                {/* Carte GitHub */}
                <article
                  className="project-card clickable contact-card"
                  onClick={() =>
                    window.open("https://github.com/waI7er", "_blank")
                  }
                >
                  <div className="contact-icon">GitHub</div>
                  <div className="contact-info">
                    <h3>Mon GitHub</h3>
                    <p>
                      Découvrez mes derniers dépôts et contributions
                      open-source.
                    </p>
                  </div>
                  <span className="project-link">Voir mes dépôts →</span>
                </article>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <span>Portfolio réalisé par Lovson en React et Vite.</span>
      </footer>

      <button
        className={`scroll-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
