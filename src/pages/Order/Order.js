import React from "react";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import MainFooter from "../../components/Footers/MainFooter/MainFooter";
import "./Order.scss";

class Order extends React.Component {
  state = {
    orderList: [],
    checked: false,
  };
  searchHandler = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = "";
        let extraAddr = "";
        if (data.userSelectType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + " )";
          }
          document.getElementById("sample6_extraAddress").value = extraAddr;
        } else {
          document.getElementById("sample6_extraAddress").value = "";
        }

        document.getElementById("sample6_postcode").value = data.zonecode;
        document.getElementById("sample6_address").value = addr;
        document.getElementById("sample6_datailAddress").focus();
      },
    }).open();
  };

  checkHandler = (e) => {
    const {
      target: { checked },
    } = e;
    this.setState({ checked });
  };

  // componentDidMount() {
  //   fetch("api 주소")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  //     .then(res => this.setState({ orderList : res }));

  // }

  render() {
    return (
      <>
        <MainHeader />
        <div className="Order">
          <section className="orderHeader">
            <h2>ORDER</h2>
            <div className="currentLocation">
              <span className="this current">Order</span>
              <i className="fas fa-angle-down"></i>
              <span className="end">Order confirmed</span>
            </div>
          </section>
          <div className="tableWrap">
            <h3 className="tableTitle">Product</h3>
            <section className="productTable">
              <table>
                <thead>
                  <tr>
                    <th className="productN">Product</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="productImageName">
                      <div className="infoWrap">
                        <div className="productImg">
                          <img
                            alt="Powerbeats"
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNX2?wid=800&hei=800&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1586808416047"
                          />
                        </div>
                        <div className="productInfo">
                          <span>Powerbeats</span>
                        </div>
                      </div>
                    </td>
                    <td className="taC productColor">
                      <div className="colorCircle2"></div>
                    </td>
                    <td className="taC productQuantity">1</td>
                    <td className="taC productPrice">$149.95</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <div className="priceBox">
              <div className="priceWrap">
                <span>Subtotal</span>
                <span className="subPrice">$ 149.95</span>
                <span className="priceCarculate">+</span>
                <span>Shipping</span>
                <span className="subPrice">$ 6.00</span>
                <span className="priceCarculate">=</span>
                <span>Order Total</span>
                <span className="totalPrice">$ 155.95</span>
              </div>
            </div>
          </div>
          <section className="customerInfo">
            <h3>Customer Info</h3>
            <div className="infoTable">
              <table>
                <tbody>
                  <tr>
                    <th className="nameTitle">Name</th>
                    <td>
                      <div className="inputWrap">
                        <input type="text" name="orderName" value="yun" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="nameTitle">E-mail</th>
                    <td>
                      <div className="inputWrap">
                        <input
                          type="text"
                          name="orderName"
                          value="asd@gmail.com"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="nameTitle">Address</th>
                    <td className="addressArea">
                      <div className="addressSearch">
                        <span>
                          <input
                            type="text"
                            id="sample6_postcode"
                            placeholder="Post Code"
                          />
                        </span>
                        <button onClick={this.searchHandler}>Search</button>
                      </div>
                      <div className="addressDetail">
                        <span>
                          <input
                            type="text"
                            id="sample6_address"
                            placeholder="Address"
                          />
                        </span>
                        <span>
                          <input
                            type="text"
                            id="sample6_datailAddress"
                            placeholder="Detail"
                          />
                        </span>
                        <span>
                          <input
                            type="text"
                            id="sample6_extraAddress"
                            placeholder="extra"
                          />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="howToOrder">
            <h3 className="payTitle">Payment</h3>
            <div className="checkPay">
              <div className="checkWrap">
                <div className="checkTitle">Choice</div>
                <div className="selection">
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit Card</span>
                  </div>
                  {/* <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit Card</span>
                  </div>
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit Card</span>
                  </div>
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit Card</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="lastBuy">
              <div className="priceBox">
                <div className="priceWrap">
                  <span>Total price</span>
                  <span className="totalPrice">$ 155.95</span>
                </div>
              </div>
              <div className="requiredCheck">
                <span className="checkWrap">
                  <input
                    type="checkbox"
                    className="checkbox require"
                    checked={this.state.checked}
                    onChange={this.checkHandler}
                  />
                  <strong>(Required)</strong>
                  <p>
                    I checked the payment information for the product. I want to
                    purchase, and I agree to proceed with the purchase.
                  </p>
                </span>
              </div>
              <div className="buyBtn">
                <button className="buyButton">Buy</button>
              </div>
            </div>
          </section>
        </div>
        <MainFooter />
      </>
    );
  }
}

export default Order;
