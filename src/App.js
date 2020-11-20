import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Contact
        name="Javier Willis"
        avatar="https://bit.ly/2UGRl8B"
        online="true"
      />
      <Contact
        name="Perry Shaw"
        avatar="https://bit.ly/3318nCR"
        online="false"
      />
      <Contact
        name="Richard Hill"
        avatar="https://bit.ly/3kWYwnT"
        online="true"
      />
    </div>
  );
}

export default App;
