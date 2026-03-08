1. import { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
      />
    </div>
  );
}

export default App;

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук постів..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

2. const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

{filteredPosts.map((post) => (
  <Post key={post.id} post={post} />
))}

3. Якщо після фільтрації не знайдено жодного елемента, користувачу відображається повідомлення про відсутність результатів пошуку.

Це реалізовано через перевірку довжини масиву filteredPosts.

{filteredPosts.length === 0 ? (
  <p>Нічого не знайдено</p>
) : (
  filteredPosts.map((post) => (
    <Post key={post.id} post={post} />
  ))
)}

Таким чином, система повідомляє користувача, якщо жоден елемент не відповідає введеному пошуковому запиту.