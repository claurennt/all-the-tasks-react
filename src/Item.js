// import react from "react";

export default function Item({
  itemText,
  itemId,
  toggleChecked,
  itemChecked,
  deleteItem,
}) {
  return (
    <article className="item">
      <div
        className={
          itemChecked ? "item-textfield checked-item" : "item-textfield"
        }
      >
        {itemText}
      </div>
      <div className="button-wrapper">
        <button className="edit item-button">
          <i className="far fa-edit"></i>
        </button>
        <button
          className="check item-button"
          onClick={() => {
            toggleChecked(itemId);
          }}
        >
          <i className="far fa-check-square"></i>
        </button>
        <button
          className="delete item-button"
          onClick={() => {
            deleteItem(itemId);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </article>
  );
}
