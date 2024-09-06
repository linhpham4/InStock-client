import './SelectedWarehouse.scss'


function SelectedWarehouse({ selectedWarehouse }) {

    return (
        <div>
            <div className="selectedWarehouse">

                <div className="selectedWarehouse__location">
                    <h5 className="selectedWarehouse__location-heading">WAREHOUSE ADDRESS</h5>
                    <div className="selectedWarehouse__full-address">
                        <p className="selectedWarehouse__address">{selectedWarehouse.address},</p>
                        <p className="selectedWarehouse__city">{selectedWarehouse.city},</p>
                        <p className="selectedWarehouse__country"> {selectedWarehouse.country}</p>
                    </div>

                </div>
                <div className="selectedWarehouse__point-info">
                    <div className="selectedWarehouse__point">
                        <h5 className="selectedWarehouse__point-heading">CONTACT NAME:  </h5>
                        <p className="selectedWarehouse__contact-name">{selectedWarehouse.contact_name}</p>
                        <p className="selectedWarehouse__contact-title">{selectedWarehouse.contact_position}</p>
                    </div>
                    <div className="selectedWarehouse__info">
                        <h5 className="selectedWarehouse__info-heading">CONTACT INFORMATION</h5>
                        <p className="selectedWarehouse__phone">{selectedWarehouse.contact_phone}</p>
                        <p className="selectedWarehouse__email">{selectedWarehouse.contact_email}</p>
                    </div>
                </div>


            </div>

        </div>


    )
}

export default SelectedWarehouse