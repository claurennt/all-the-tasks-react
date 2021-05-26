// import logo from "./logo.svg";
import React, { useState } from "react";
// import "./App.css";
import Item from "./Item";
import { nanoid } from "nanoid";

function App() {
  const [items, addItem] = useState([
    {
      itemId: nanoid(),
      itemText: "Drink water",
      itemChecked: false,
    },
    {
      itemId: nanoid(),
      itemText: "Drink wine",
      itemChecked: false,
    },
  ]);

  const addTask = (e) => {
    e.preventDefault();
    const newItem = {
      itemId: nanoid(),
      itemText: e.currentTarget.newItem.value,
      itemChecked: false,
    };
    addItem([...items, newItem]);
  };

  const toggleChecked = (itemId) => {
    const editedItems = items.map((item) => {
      if (item.itemId === itemId) {
        item.itemChecked = !item.itemChecked;
      }
      return item;
    });

    addItem(editedItems);
  };

  const deleteItem = (itemId) => {
    const filteredItems = items.filter((item) => itemId != item.itemId);
    addItem(filteredItems);
  };

  return (
    <main className="list-wrapper">
      <section className="list">
        <h1>Remember me :</h1>

        <div className="popup">
          <span className="popuptext" id="myPopup">
            Missing item!
          </span>
        </div>
        <form className="submitForm" onSubmit={addTask}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Add Item..."
              className="input-item"
              name="newItem"
            />
            <button id="input-button" className="input-button" type="submit">
              +
            </button>
          </div>
        </form>
        <div className="item-wrapper">
          {items.map((item) => {
            return (
              <Item
                key={item.itemId}
                itemText={item.itemText}
                itemId={item.itemId}
                toggleChecked={toggleChecked}
                deleteItem={deleteItem}
                itemChecked={item.itemChecked}
              />
            );
          })}
        </div>
        <div className="reset-local-storage">Reset list</div>
      </section>
    </main>
  );
}

export default App;
