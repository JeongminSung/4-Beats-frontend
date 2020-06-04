import React from "react";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import MainFooter from "../../components/Footers/MainFooter/MainFooter";
import { API } from "../../config";
import "./Order.scss";
import OrderList from "./OrderList/OrderList";
import CustomerInfo from "./CustomerInfo";

class Order extends React.Component {
  inputValueRef = React.createRef();
  state = {
    orderList: [],
    fullAddr: "",
    Postcode: "",
    cardCheck: false,
    RChecked: false,
  };

  fullAddress;
  searchHandler = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;
        let extraAddress = "";
        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== ""
                ? `, ${data.buildingName}`
                : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        // console.log(this.fullAddress);
        // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        // console.log(data.zonecode);
        // this.setState({
        //   fullAddr: fullAddress,
        //   Postcode: data.zonecode,
        // });
        document.getElementById("sample6_postcode").value = data.zonecode;
        document.getElementById("sample6_address").value = fullAddress;

        document.getElementById("sample6_datailAddress").focus();
      },
    }).open();
  };

  cardHandler = () => {
    this.setState({ cardCheck: true });
  };

  requiredHandler = () => {
    this.setState({ RChecked: true });
  };

  changePostCode = (e) => {
    this.setState({
      Postcode: e.target.value,
    });
  };
  test = () => {
    this.setState({ Postcode: this.fullAddress });
  };
  componentDidMount() {
    fetch(`${API}/`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => this.setState({ orderList: res }));
  }

  orderHandler = () => {
    this.props.history.push("/order/check");
  };

  render() {
    const orderL =
      this.state.orderList &&
      this.state.orderList.map((post, idx) => (
        <OrderList key={idx} name={post.name} />
      ));
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
            {orderL}
            <section className="customerInfo">
              <h3>Customer Info</h3>
              <div className="infoTable">
                <table>
                  <tbody>
                    <CustomerInfo />
                    <tr>
                      <th className="nameTitle">Address</th>
                      <td className="addressArea">
                        <div className="addressSearch">
                          <span>
                            <input
                              type="text"
                              id="sample6_postcode"
                              placeholder="Post Code"
                              ref={this.inputValueRef}
                              onChange={this.changePostCode}
                              value={this.state.Postcode}
                            />
                          </span>
                          <button onClick={this.props.search}>Search</button>
                        </div>
                        <div className="addressDetail">
                          <span>
                            <input
                              type="text"
                              id="sample6_address"
                              placeholder="Address"
                              onChange={this.changeAddress}
                            />
                          </span>
                          <span>
                            <input
                              type="text"
                              id="sample6_detailAddress"
                              placeholder="Detail"
                              onChange={this.changeDetail}
                            />
                          </span>
                          <span>
                            <input
                              type="text"
                              id="sample6_extraAddress"
                              placeholder="Extra"
                              onChange={this.changeExtra}
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
                  <div className="checkTitle">Payment</div>
                  <div className="selection">
                    <div className="checkForm">
                      <input
                        type="radio"
                        name="creditCard"
                        className="radio"
                        checked={this.state.cardCheck}
                        onChange={this.cardHandler}
                      />
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
                      checked={this.state.Rchecked}
                      value={this.state.Postcode}
                      onChange={this.requiredHandler}
                    />
                    <strong>(Required)</strong>
                    <p>
                      I checked the payment information for the product. I want
                      to purchase, and I agree to proceed with the purchase.
                    </p>
                  </span>
                </div>
                <div className="buyBtn">
                  <button className="buyButton" onClick={this.orderHandler}>
                    Buy
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <MainFooter />
      </>
    );
  }
}

export default Order;
