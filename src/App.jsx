import { useState } from 'react'
import './App.css'
import languages from "./data/languages";

function App() {
  // Tengo nello stato SOLO l'id del linguaggio selezionato.
  // Parto dal primo elemento dell'array così da mostrare subito qualcosa. (default)
  const [selectedId, setSelectedId] = useState(languages[0].id);

  // Dato derivato: ad ogni render, ricavo l'oggetto completo 
  // corrispondente all'id selezionato (mi serve per titolo + descrizione).
  const selected = languages.find((l) => l.id === selectedId);

  return (
    <main className="app">
      <h1>Learn Web development</h1>

      {/* Lista bottoni generata dai dati.
          - key: uso l'id per aiutare React a identificare gli elementi
          - onClick: aggiorno selectedId così React rifà il render
          - className: evidenzio il bottone attivo con la classe "active" */}
      <div className="buttons">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedId(lang.id)}
            className={selectedId === lang.id ? "btn active" : "btn"} // Aggiungo la classe "active" se il bottone è quello selezionato
            // Uso un operatore ternario per assegnare la classe corretta
            // Se selectedId è uguale a lang.id, assegno "btn active", altrimenti solo "btn"
          >
            {lang.title}
          </button>
        ))}
      </div>

      {/* Card che mostra titolo e descrizione del linguaggio selezionato: legge direttamente dall'oggetto "selected".
          Al cambio di selectedId, "selected" viene ricalcolato e la UI si aggiorna. */}
      <div className="card">
        <h2>{selected.title}</h2>
        <p>{selected.description}</p>
      </div>
    </main>
  );
}

export default App
