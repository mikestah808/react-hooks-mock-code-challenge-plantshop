import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [newPlant, setNewPlant] = useState([])



  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
