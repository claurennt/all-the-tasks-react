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
  return (
    <article className="item">
      <div
        className={
          itemChecked ? "item-textfield checked-item" : "item-textfield"
        }
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
