import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./PulseYourIdea.module.css";

const PulseYourIdea = () => {
  const [newIdea, setNewIdea] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newIdea.trim() === "" || username.trim() === "") return;

    // Check if we're in the browser before using localStorage
    if (typeof window !== "undefined") {
      const existingIdeas = JSON.parse(localStorage.getItem("ideas")) || [];

      const newIdeaObject = {
        id: Date.now(),
        username: username,
        text: newIdea,
        votes: 0,
      };

      const updatedIdeas = [...existingIdeas, newIdeaObject];
      localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
    }

    setNewIdea("");
    setUsername("");

    router.push("/ideas");
  };

  return (
    <section className={styles.pulseSection}>
      <h2 className={styles.sectionTitle}>Pulse Your Idea</h2>
      <p className={styles.description}>
        Submit your blockchain idea and vote on others. Let’s pulse innovation together!
      </p>

      <form onSubmit={handleSubmit} className={styles.ideaForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className={styles.ideaInput}
        />
        <input
          type="text"
          value={newIdea}
          onChange={(e) => setNewIdea(e.target.value)}
          placeholder="Your brilliant idea..."
          className={styles.ideaInput}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <div className={styles.viewIdeasLink}>
        <Link href="/ideas">
          <button className={styles.submitButton}>View All Ideas</button>
        </Link>
      </div>
    </section>
  );
};

export default PulseYourIdea;
