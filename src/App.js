import React, { useState } from "react";

import Item from "./Item";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [items, addItem] = useState([
    {
      itemId: nanoid(),
      itemText: "Drink water",
      itemChecked: false,
      editing: false,
    },
    {
      itemId: nanoid(),
      itemText: "Drink wine",
      itemChecked: false,
      editing: false,
    },
  ]);

  // function to add tasks
  const addTask = (e) => {
    e.preventDefault();
    const newItem = {
      itemId: nanoid(),
      itemText: e.currentTarget.newItem.value,
      itemChecked: false,
      editing: false,
    };
    addItem([...items, newItem]);
    e.currentTarget.newItem.value = "";
  };

  //function to toggle itemChecked property of clicked item based on id
  const toggleChecked = (itemId) => {
    const toggledItems = items.map((item) => {
      if (item.itemId === itemId) {
        item.itemChecked = !item.itemChecked;
      }
      return item;
    });

    addItem(toggledItems);
  };

  // function to delete clicked item
  const deleteItem = (itemId) => {
    // updates state with all filtered items but the one we are clicking on(identified by id)
    const filteredItems = items.filter((item) => itemId !== item.itemId);
    addItem(filteredItems);
  };

  // function to edit text
  const editItem = (itemId) => {
    /*shows toast if we click on more than one item
     (identified by the length of the array that filters the items by their editing property)
    */
    if (items.filter((i) => i.editing).length) {
      return toast.error("You are already editing a task!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    // find the item we want to edit when we click on the edit button by the id and make it's editing prop to true
    const targetItem = items.find((i) => i.itemId === itemId);
    targetItem.editing = true;
    addItem([...items.filter((i) => i.itemId !== itemId), targetItem]);
  };

  /*when we finish the editItem(onBlur in item.js), we set the editing property 
  back to false(this makes the contentEditable prop in the child = to false), 
  then we subsitute the itemText property of that item with event.target.innerText and reupdate the state*/
  const finishEditItem = (event, itemId) => {
    const targetItem = items.find((i) => i.itemId === itemId);
    targetItem.editing = false;
    targetItem.itemText = event.target.innerText;
    addItem([...items.filter((i) => i.itemId !== itemId), targetItem]);
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
                editItem={editItem}
                editing={item.editing}
                onFinishEditing={finishEditItem}
              />
            );
          })}
        </div>
        <div className="reset-local-storage">Reset list</div>
      </section>
      <ToastContainer />
    </main>
  );
}

export default App;
