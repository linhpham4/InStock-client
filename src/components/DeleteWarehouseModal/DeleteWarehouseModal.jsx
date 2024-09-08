import "./DeleteWarehouseModal.scss";
import close from "../../assets/icons/close-24px.svg";

function DeleteWarehouseModal({ Warehouse }) {
  const warehouse = "Washington";

  return (
    <>
      <section className="delete-wml">
        <div className="delete-wml__container">
          <div className="delete-wml__icon-container">
            <img
              className="delete-wml__close-icon"
              src={close}
              alt="close tab"
            />
          </div>
          <h1 className="delete-wml__title">Delete {Warehouse} Warehouse?</h1>
          <p className="delete-wml__text">
            Please confirm that you'd like to delete {Warehouse} from the list
            of warehouses. You won't be able to undo this action.
          </p>
          <div className="delete-wml__button-container">
            <button className="delete-wml__button-1">Cancel</button>
            <button className="delete-wml__button-2">Delete</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteWarehouseModal;
