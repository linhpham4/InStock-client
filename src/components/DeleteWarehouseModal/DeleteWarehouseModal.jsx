import "./DeleteWarehouseModal.scss";
import close from "../../assets/icons/close-24px.svg";

function DeleteWarehouseModal(Warehouse) {
  const warehouse = "Washington";

  return (
    <>
      <section className="delete-wm">
        <div className="delete-wm__container">
          <div className="delete-wm__icon-container">
            <img
              className="delete-wm__close-icon"
              src={close}
              alt="close tab"
            />
          </div>
          <h1 className="delete-wm__title">Delete {warehouse} Warehouse?</h1>
          <p className="delete-wm__text">
            Please confirm that you'd like to delete {warehouse} from the list
            of warehouses. You won't be able to undo this action.
          </p>
          <div className="delete-wm__button-container">
            <button className="delete-wm__button-1">Cancel</button>
            <button className="delete-wm__button-2">Delete</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteWarehouseModal;
