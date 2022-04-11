import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [newPlant, setNewPlant] = useState([])

function updateNewPlant(newPlantItem){
  setNewPlant(newPlantItem)
}



  return (
    <div className="app">
      <Header />
      <PlantPage onNewPlant={updateNewPlant}/>
    </div>
  );
}

export default App;
