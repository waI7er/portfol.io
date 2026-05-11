import { useState } from "react";
import "../../styles/stylesComponents/stylesMorpion.css";

export default function Morpion({ onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const status = winner
    ? `Gagnant: ${winner}`
    : board.every((square) => square !== null)
      ? "Match nul!"
      : `Prochain joueur: ${isXNext ? "X" : "O"}`;

  return (
    <section className="section-panel project-detail-page">
      <div className="center-container">
        <div className="section-head">
          <p className="eyebrow">Projet Formation</p>
          <h2>Jeu de Morpion</h2>
        </div>
        <p>
          Jeu de morpion interactif, l'un de mes premiers projets développés
          durant ma première année d'étude informatique en alternance de 6 mois
          en 2024. Avec donc les langages de base de programmation HTML, CSS,
          JavaScript. Ce projet m'a permis de bien maitrser et comprendre les
          langages de base.
        </p>
        <div className="mission-block">
          <p className="eyebrow">Mission</p>
          <p>
            L'objectif est très simple et intuitif : deux joueurs s'affrontent
            sur une grille de 3x3 cases, en alternant leurs coups. Le but est
            d'aligner trois de ses symboles (X ou O) avant son adversaire.
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
                href="https://portfolio3-roan-six.vercel.app/site/Morpion/Morpion.html"
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
          fondamentaux de React comme la gestion d'état et les interactions
          utilisateur.
        </p>
        <div className="morpion-game">
          <div className="game-status">{status}</div>
          <div className="board">
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
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
