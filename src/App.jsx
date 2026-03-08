import Post from "./components/molecules/Post/Post";
import { postsData } from "./data";
import SearchBar from "./components/molecules/SearchBar/SearchBar";
import styles from "./App.module.css";
import { useState } from "react";
import { students } from "./studentsData";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category
      === activeCategory;
      return matchesSearch && matchesCategory;
    });

  const activeStudents = students.filter(
    student => student.active && student.score > 60
  );
  const averageScore =
    activeStudents.reduce((sum, student) => sum + student.score, 0) /
    activeStudents.length;

    
  
  return (
    <div className={styles.appContainer}>
      <h1>Стрічка новин</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <div className={styles.filters}>

      <h2>Усі студенти</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name} — {student.score}
            </li>
          ))}
        </ul>

    <h2>Активні студенти (бал більше 60)</h2>
      <ul>
        {activeStudents.map(student => (
          <li key={student.id}>
            {student.name} — {student.score}
          </li>
        ))}
      </ul>

    <h2>Середній бал активних студентів</h2>
      <p>{averageScore.toFixed(2)}</p>

      {['All', 'News', 'Updates'].map(cat => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={activeCategory === cat ? styles.active : ''}
        >
        {cat}
      </button>
      ))}
      </div>
        <div className={styles.feed}>
          {filteredPosts.length > 0 ? (
          filteredPosts.map(post => <Post key={post.id} {...post} />)
          ) : (
          <p className={styles.empty}>Нічого не знайдено за вашим
          запитом.</p>
          )}
        </div>
    </div>
    );
  }

export default App;
