import { useState } from 'react'
import './App.css'
import languages from "./data/languages";

function App() {
  // Stato: parte dal primo linguaggio
  const [selectedId, setSelectedId] = useState(languages[0].id);

  // Oggetto selezionato
  const selected = languages.find(l => l.id === selectedId);

  return (
    <main className="app">
      <h1>Learn Web development</h1>

      {/* Lista bottoni */}
      <div className="buttons">
        {languages.map(lang => (
          <button
            key={lang.id}
            onClick={() => setSelectedId(lang.id)}
            className={selectedId === lang.id ? "btn active" : "btn"}
          >
            {lang.title}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="card">
        <h2>{selected.title}</h2>
        <p>{selected.description}</p>
      </div>
    </main>
  );
}


export default App