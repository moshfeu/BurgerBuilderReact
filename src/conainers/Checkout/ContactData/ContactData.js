import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../../src/axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Angela Inniss",
        address: {
          street: "16 Test street",
          postcode: "M43 567",
          country: "England"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    // data that gets sent to to server (2nd argument)
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
        // this.orderCancelHandler();
      })
      .catch(error => {
        this.setState({ loading: false });
        this.orderCancelHandler();
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Enter your street name"
        />
        <Input
          inputtype="input"
          type="text"
          name="PostCode"
          placeholder="Enter your post code"
        />
        <Button clicked={this.orderHandler} btnType="Success">
          PLACE ORDER HERE
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Information </h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
