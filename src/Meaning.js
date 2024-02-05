import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong>
      <div className="definition">{props.meaning.definition}</div>

      <strong>Example:</strong>

      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      <strong>Synonyms:</strong>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
