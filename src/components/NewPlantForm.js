import React, { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")


  function handleInput(e){
    const plantData = {
      name: name,
      image: image,
      price: price
    }

    
    console.log(plantData)

    setName(e.target.value)
    setImage(e.target.value)
    setPrice(e.target.value)
    console.log(e.target.value)
  }

//add PATCH request here 
function handleSubmit(e){
  e.preventDefault()

}
//fetch()

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleInput} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleInput} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

//adding a new plant to the plant lists will have to use a PATCH request to partially modify the data 
