import logo from "./logo.svg";
import { useState } from "react";
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
    console.log(e.currentTarget);
  };

  return (
    <main class="list-wrapper">
      <section class="list">
        <h1>Remember me :)</h1>

        <div class="popup">
          <span class="popuptext" id="myPopup">
            Missing item!
          </span>
        </div>
        <form class="submitForm" onSubmit={addTask}>
          <div class="input-wrapper">
            <input type="text" placeholder="Add Item..." class="input-item" />
            <button id="input-button" class="input-button" type="submit">
              +
            </button>
          </div>
        </form>
        <div class="item-wrapper">
          {items.map((item) => {
            return <Item key={item.itemId} itemText={item.itemText} />;
          })}
        </div>
        <div class="reset-local-storage">Reset list</div>
      </section>
    </main>
  );
}

export default App;
