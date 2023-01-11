import React from "react";
import "./SearchListItem.css";
const SearchListItem = (props) => {
  return (
    <div className="search-item">
      <span className="search-item__img">
        <img src={props.item.image_url} alt="" />
      </span>
      <div className="search-item__content">
        <div className="search-item__content__header">
          <h3>{props.item.name}</h3>
          <p>{props.item.rate_text}</p>
          <span>{props.item.rate}</span>
        </div>
        <p className="distance">{props.item.distance} from center</p>
        <p className="tag">{props.item.tag}</p>
        <p className="description">{props.item.description}</p>
        <div className="types">
          <p className="type">{props.item.type}</p>
          <span>{props.item.price} $</span>
        </div>
        <div className="first-remark">
          <h4>Free Cancellation</h4>
          <p>Include taxes and fees</p>
        </div>
        <div className="second-remark">
          <p>You can cancel later, so lock in this great price today!</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
