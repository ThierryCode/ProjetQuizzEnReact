import React from 'react';

export default function Resultat({ titleRes, aideRes, noteRes }) {
  return (
    <div>
      <div className="resultats">
        <h2>{titleRes}</h2>
        <p className="aide">{aideRes}</p>
        <div className="note">{noteRes}</div>
      </div>
    </div>
  );
}