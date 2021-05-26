// import react from "react";

export default function Item(props) {
  return (
    <article class="item">
      <div class="item-textfield">{props.itemText}</div>
      <div class="button-wrapper">
        <button class="edit item-button">
          <i class="far fa-edit"></i>
        </button>
        <button class="check item-button">
          <i class="far fa-check-square"></i>
        </button>
        <button class="delete item-button">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </article>
  );
}
