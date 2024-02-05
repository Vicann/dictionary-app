import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <section>
      <div className="phonetics">
        <div>
          <h3>Phonetic:</h3>
          <h4> {props.phonetic} </h4>
        </div>
      </div>
    </section>
  );
}
