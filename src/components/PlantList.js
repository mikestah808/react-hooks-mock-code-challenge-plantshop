import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((plantItems) => setPlants(plantItems))
  }, [])

  const plantElements = plants.map((plant) => {
    return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />
  })

  


  return (
    <ul className="cards">{plantElements}</ul>
  );
}

export default PlantList;
