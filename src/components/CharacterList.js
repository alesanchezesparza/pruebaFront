import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CharacterList = ({ characters, onCharacterSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(characters.length);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (character) => {
    onCharacterSelect(character);
  };

  return (
    <div className="character-list">
      <form className="character-list__form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="row row-cols-md-3 g-4 character-list__cards" style={{ height: "100vh" }}>
        <AnimatePresence initial={false}>
          {filteredCharacters.map((character, index) => (
            <motion.div
              key={index}
              className="character-card col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="character-card__image" onClick={() => handleCardClick(character)}>
                <img src={character.image} alt="character" />
              </div>
              <div className="character-card__content">
                <h5 className="character-card__name">{character.name}</h5>
                <hr className="character-card__hr" />
                <button className="character-card__button" onClick={() => handleCardClick(character)}>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CharacterList;
