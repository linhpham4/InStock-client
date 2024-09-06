import './SelectedWarehouse.scss'

import React from 'react'

function SelectedWarehouse({ selectedWarehouse }) {

    return (
        <div>
            <div className="selectedWarehouse">

                <div className="selectedWarehouse__location">
                    <h5 className="selectedWarehouse__location-heading">WAREHOUSE ADDRESS</h5>
                    <p className="selectedWarehouse__address">{SelectedWarehouse.address}</p>
                    <p className="selectedWarehouse__city">{SelectedWarehouse.city}</p>
                </div>
                <div className="selectedWarehouse__point">
                    <h5 className="selectedWarehouse__point-heading">CONTACT NAME:  </h5>
                    <p className="selectedWarehouse__contact-name">{SelectedWarehouse.contact_name}</p>
                    <p className="selectedWarehouse__contact-title">{SelectedWarehouse.contact_position}</p>
                </div>
                <div className="selectedWarehouse__info">
                    <h5 className="selectedWarehouse__info-heading">CONTACT INFORMATION</h5>
                    <p className="selectedWarehouse__phone">{SelectedWarehouse.contact_phone}</p>
                    <p className="selectedWarehouse__email">{SelectedWarehouse.contact_email}</p>
                </div>

            </div>

        </div>


    )
}





export default SelectedWarehouse



{/* id: 2, */ }
{/* warehouse_name: 'Washington', */ }
{/* address: '33 Pearl Street SW', */ }
{/* city: 'Washington', */ }
{/* country: 'USA', */ }
{/* contact_name: 'Greame Lyon', */ }
{/* contact_position: 'Warehouse Manager', */ }
{/* contact_phone: '+1 (646) 123-1234', */ }
{/* contact_email: 'glyon@instock.com', */ }
