import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // Controlled input for name
  const [itemCategory, setItemCategory] = useState("Produce"); // Controlled input for category with default value

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem); // Pass the new item to the parent component
    setItemName(""); // Reset the form
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)} // Update state on change
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)} // Update state on change
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
