import React from "react";

const SelectedCharacter = ({ character, onClose }) => {
  if (!character) {
    return null;
  }

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "95%" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{character.name}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{ overflowY: "auto" }}>
            <img src={character.image} alt={character.name} className="img-fluid" />
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Location: {character.location.name}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCharacter;
