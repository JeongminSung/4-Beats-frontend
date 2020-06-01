import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import BlackBorderButton from "../../../../components/Buttons/BlackBorderButton";

class ProductCard extends React.Component {
  render() {
    const { num, name, image, title, specLists, price } = this.props;
    return (
      <section className="productContent">
        <div className="contentWrapper">
          <div className="ProductInfoWrapper">
            <p className="subTitle">{name}</p>
            <div className="mainTitle">
              <p>{title}</p>
            </div>
            <div className={"item" + num}>
              <div className="colorCircle1">
                <div className="colorCircle2">&nbsp;</div>
              </div>
            </div>
            <ul className="productInfoList">
              {specLists.map((list, idx) => (
                <li>
                  <span key={idx}>{list.item_info}</span>
                </li>
              ))}
            </ul>
            <p className="price">
              <span>{price}</span>
            </p>
            <div className="buttonWrap">
              <Link to="/products/detail" className="btnWrapper">
                <BlackBorderButton text="Learn More" link="products/detail" />
              </Link>
            </div>
          </div>
          <div className="productImageWrapper">
            <img alt="powerbeats" src={image} />
          </div>
        </div>
        <div className="sectionSpacingEnd"></div>
      </section>
    );
  }
}

export default ProductCard;
