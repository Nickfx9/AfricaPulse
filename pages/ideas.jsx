import React, { useEffect, useState } from "react";
import styles from "../components/PulseYourIdea.module.css";
import Link from "next/link";

const IdeasPage = () => {
  const [ideas, setIdeas] = useState([]);

  // Load ideas from localStorage on mount
  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(storedIdeas);
  }, []);

  // Handle upvote
  const handleVote = (id) => {
    const updatedIdeas = ideas.map((idea) =>
      idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
    );
    setIdeas(updatedIdeas);
    localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
  };

  // Handle delete
  const handleDelete = (id) => {
    const updatedIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(updatedIdeas);
    localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
  };

  return (
    <section className={styles.pulseSection}>
      <h2 className={styles.sectionTitle}>Community Ideas 💡</h2>
      <p className={styles.description}>
        See what others have shared — vote and delete as you like!
      </p>

      <div className={styles.ideasGrid}>
        {ideas.length > 0 ? (
          ideas
            .sort((a, b) => b.votes - a.votes) // sort by votes descending
            .map((idea) => (
              <div key={idea.id} className={styles.ideaCard}>
                <p className={styles.ideaText}>
                  <strong className={styles.username}>{idea.username}</strong>: {idea.text}
                </p>
                <div className={styles.voteSection}>
                  <button
                    className={styles.voteButton}
                    onClick={() => handleVote(idea.id)}
                  >
                    👍 {idea.votes}
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(idea.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
        ) : (
          <p style={{ color: "white" }}>
            No ideas submitted yet. Be the first!
          </p>
        )}
      </div>

      {/* Back to submit page */}
      <Link href="/">
        <button className={styles.backButton}>⬅️ Back to Submit</button>
      </Link>
    </section>
  );
};

export default IdeasPage;
