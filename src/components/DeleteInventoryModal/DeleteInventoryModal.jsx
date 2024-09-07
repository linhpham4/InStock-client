
import React from 'react'
import './DeleteInventoryModal.scss'
import close from "../../assets/icons/close-24px.svg";

function DeleteInventoryModal() {

    const warehouse = "Washington";

    return (
        <div>

            <section className="delete-wm">
                <div className="delete-wm__container">
                    <div className="delete-wm__icon-lit-container">
                        <div className="delete-wm__icon-container">
                            <img
                                className="delete-wm__close-icon"
                                src={close}
                                alt="close tab"
                            />

                        </div>
                        <div className="delete-wm__lit">
                            <h1 className="delete-wm__title">Delete {warehouse} inventory item?</h1>
                            <p className="delete-wm__text">
                                Please confirm that you'd like to delete {warehouse} from the inventory list. 
                            </p>
                            <p>You won't be able to undo this action.</p>
                        </div>


                    </div>
                    <div className="delete-wm__button-container">
                        <button className="delete-wm__button-1">Cancel</button>
                        <button className="delete-wm__button-2">Delete</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DeleteInventoryModal
