import React from "react";
import "./DeleteInventoryModal.scss";
import close from "../../assets/icons/close-24px.svg";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";

function DeleteInventoryModal({ ItemName, ItemId }) {
  const base_url = import.meta.env.VITE_APP_BASE_URL;
  const { itemName, itemId, warehouseId, warehouseName } = useParams();

  // logic to determine if we are on delete modal.  Scrolling is disabled when delete modal active.
  const location = useLocation();

  if (
    location.pathname === `/inventory/${ItemName}/${ItemId}/delete` ||
    location.pathname ===
      `/warehouse/${warehouseId}/${warehouseName}/${itemId}/${itemName}/delete`
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const deleteInventoryItem = async () => {
    try {
      await axios.delete(`${base_url}/stock/inventories/${itemId}`);
      alert(`${itemName} has been deleted`);
      goBack();
    } catch (error) {
      console.error(error);
    }
  };

  // function to return to whichever previous page user was on
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <section className="delete-wm">
        <div className="delete-wm__container">
          <div className="delete-wm__icon-container">
            <img
              className="delete-wm__close-icon"
              src={close}
              alt="close tab"
              onClick={() => goBack()}
            />
          </div>
          <h1 className="delete-wm__title">
            Delete {itemName} Inventory Item?
          </h1>
          <p className="delete-wm__text">
            Please confirm that you'd like to delete {itemName} from the
            inventory list. You won't be able to undo this action.
          </p>
          <div className="delete-wm__button-container">
            <a
              className="delete-wm__button-1--wrapper"
              onClick={() => goBack()}
            >
              <button className="delete-wm__button-1">Cancel</button>
            </a>
            <Link
              className="delete-wm__button-2--wrapper"
              onClick={() => {
                deleteInventoryItem();
              }}
            >
              <button className="delete-wm__button-2">Delete</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeleteInventoryModal;
