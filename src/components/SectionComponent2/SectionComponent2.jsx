import "./SectionComponent2.scss";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

// pass as props when you call this component from the parent component:
// title="<header title>"
// backLink="</route to go when back arrow is clicked>"
// buttonDisplay="hidden" if you need to hide the button, don't pass anything if you don't need to hide

function SectionComponent({ title, backLink, buttonDisplay }) {
  return (
    <>
      <div className="washington-header">
        <div className="washington-header__location">
          <Link to={backLink} className="washington-header__link">
            <img className="washington-header__back-icon" src={backArrow} alt="" />
          </Link>
          <h2 className="washington-header__heading">{title}</h2>
        </div>

        <button className={`washington-header__button2 washington-header__button2--${buttonDisplay}`}>
          <img src={editIcon} alt="" className="washington-header__btn-icon" />
          <p className="washington-header__btn-text">Edit</p>
        </button>
      </div>
      <hr className="divider"></hr>
    </>
  );
}

export default SectionComponent;
