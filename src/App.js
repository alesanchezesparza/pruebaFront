import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import SelectedCharacter from "./components/SelectedCharacter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSelectCharacter = character => {
    setSelectedCharacter(character);
  };

  const handleClearSelectedCharacter = () => {
    setSelectedCharacter(null);
  };

  const handleSearchTermChange = term => {
    setSearchTerm(term);
  };

  const filteredCharacters = characters.filter(character => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return character.name.toLowerCase().includes(lowerCaseTerm);
  });

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            
            {loading ? (
              <p>Loading...</p>
            ) : (
              <CharacterList characters={filteredCharacters} onCharacterSelect={handleSelectCharacter} />
            )}
          </div>
          <div className="col-md-6">
            {selectedCharacter ? (
              <SelectedCharacter character={selectedCharacter} onClose={handleClearSelectedCharacter} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
