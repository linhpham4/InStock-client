import "./SectionComponent.scss";
import { Link } from "react-router-dom";

// pass as props when you call this component from the parent component:
// title="<header title>"
// buttonText="+<button text>"
// buttonLink="+</route>"

function SectionComponent({ title, buttonText, buttonLink }) {
  return (
    <div className="warehouse-header">
      <h2 className="warehouse-header__heading">{title}</h2>

      <div className="warehouse-header__inputs">
        <input
          type="text"
          placeholder="Search..."
          className="warehouse-header__field"
        />

        <Link to={buttonLink} className="warehouse-header__link">
          <button className="warehouse-header__button2">
            <p className="warehouse-header__btn-text">{buttonText}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionComponent;
