import React, { useState } from "react";

const BASE_URL = "http://localhost:6001/plants"
const initialNewPlant = {
  name: "", 
  image: "",
  price: 0
}

function NewPlantForm({ setPlants }) {
const [newPlant, setNewPlant] = useState(initialNewPlant)
console.log(newPlant)


function handleChange(e){
  console.log(e.target)
  setNewPlant((currentNewPlantState) => ({
    ...currentNewPlantState, 
    [e.target.name] : e.target.value,
  }))
}
  

//add PATCH request here 
function handleSubmit(e){
  e.preventDefault()

    fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((r) => r.json())
    .then((newPlantItem) => setPlants((currentPlants) => [...currentPlants ,newPlantItem]));
    
    setNewPlant(initialNewPlant)
}



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={newPlant.name}/>
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={newPlant.image}/>
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

//adding a new plant to the plant lists will have to use a PATCH request to partially modify the data 
