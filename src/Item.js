export default function Item({
  itemText,
  itemId,
  toggleChecked,
  editItem,
  itemChecked,
  deleteItem,
  editing,
  onFinishEditing,
}) {
  // saved the conditional rendering expressions in a var for better redability
  const checked = itemChecked
    ? "item-textfield checked-item"
    : "item-textfield";
  const edit = editing && "item-visible";

  return (
    <article className="item">
      <div
        className={`${checked} ${edit}`}
        /* if we click the edit button down below, the contentEditable will become true 
        because inside the editItem changed the value of editing that we pass here from the parent 
        and we use that property to conditionally change the contentEditable attribute of the div */
        contentEditable={editing ? "true" : "false"}
        suppressContentEditableWarning={true}
        onBlur={(event) => onFinishEditing(event, itemId)}
      >
        {itemText}
      </div>
      <div className="button-wrapper">
        <button
          className="edit item-button"
          onClick={() => {
            editItem(itemId, itemText);
          }}
        >
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
