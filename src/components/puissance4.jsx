import { useState } from "react";
import "../../styles/stylesComponents/stylesPuissance4.css";

export default function Puissance4({ onBack }) {
  const ROWS = 6;
  const COLS = 7;
  const [board, setBoard] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(null)),
  );
  const [isRedNext, setIsRedNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (currentBoard, row, col, player) => {
    const directions = [
      [0, 1], // Horizontal
      [1, 0], // Vertical
      [1, 1], // Diagonale descendante
      [1, -1], // Diagonale montante
    ];

    for (let [dr, dc] of directions) {
      let count = 1;

      // Direction positive
      for (let i = 1; i < 4; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        if (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          currentBoard[r][c] === player
        ) {
          count++;
        } else break;
      }

      // Direction négative
      for (let i = 1; i < 4; i++) {
        const r = row - dr * i;
        const c = col - dc * i;
        if (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          currentBoard[r][c] === player
        ) {
          count++;
        } else break;
      }

      if (count >= 4) return true;
    }
    return false;
  };

  const dropPiece = (col) => {
    if (winner) return;

    const newBoard = board.map((row) => [...row]);
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        const currentPlayer = isRedNext ? "red" : "yellow";
        newBoard[row][col] = currentPlayer;

        if (checkWinner(newBoard, row, col, currentPlayer)) {
          setWinner(currentPlayer);
        }

        setBoard(newBoard);
        setIsRedNext(!isRedNext);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(
      Array(ROWS)
        .fill()
        .map(() => Array(COLS).fill(null)),
    );
    setIsRedNext(true);
    setWinner(null);
  };

  const status = winner
    ? `Gagnant : ${winner === "red" ? "Rouge" : "Jaune"}`
    : board.flat().every((cell) => cell !== null)
      ? "Match nul !"
      : `Prochain joueur : ${isRedNext ? "Rouge" : "Jaune"}`;

  return (
    <section className="section-panel project-detail-page">
      <div className="center-container">
        <div className="section-head">
          <p className="eyebrow">Projet Formation</p>
          <h2>Jeu de Puissance 4</h2>
        </div>
        <p>
          Jeu de Puissance 4 interactif, l'un de mes premiers projets développés
          durant ma première année d'étude informatique en alternance de 6 mois
          en 2024. Avec donc les langages de base de programmation HTML, CSS,
          JavaScript. Ce projet m'a permis de bien maitrser et comprendre les
          langages de base.
        </p>

        <div className="mission-block">
          <p className="eyebrow">Mission</p>
          <p>
            L'objectif est très simple et intuitif : deux joueurs s'affrontent
            sur une grille de 7x6 cases, en alternant leurs coups. Le but est
            d'aligner quatre pièces de leur couleur avant son adversaire.
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
                href="https://portfolio3-roan-six.vercel.app/site/Puissance4/Puissance_4.html"
                className="button primary"
                target="_blank"
                rel="noreferrer"
              >
                Voir le projet
              </a>
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
        <p>
          Deux ans après, j'ai décidé de recréer ce projet en utilisant React.
          Ce projet m'a permis cette fois ci de savoir gérer les concepts
          fondamentaux de React comme la gestion d'état complexe et les
          algorithmes de jeu et les interactions utilisateur.
        </p>

        <div className="puissance4-game">
          <div className={`game-status ${winner ? "winner-announcement" : ""}`}>
            {status}
          </div>

          <div className="board">
            {board.map((row, rowIndex) => (
              <div key={rowIndex} className="board-row">
                {row.map((piece, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`cell ${piece || ""}`}
                    onClick={() => dropPiece(colIndex)}
                  />
                ))}
              </div>
            ))}
          </div>

          <button className="button secondary" onClick={resetGame}>
            Recommencer
          </button>
        </div>

        <div className="project-details">
          <div className="project-info">
            <h3>Technologies utilisées</h3>
            <div className="tag-list">
              <span className="tag-pill">React</span>
              <span className="tag-pill">JavaScript</span>
              <span className="tag-pill">CSS</span>
            </div>
          </div>

          <div className="project-links">
            <button className="button secondary" onClick={onBack}>
              Retour au portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
