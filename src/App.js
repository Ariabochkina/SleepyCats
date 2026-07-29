import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import louis from "./img/louis.jpg";
import leon from "./img/leon.jpg";
import mila from "./img/mila.jpg";
import oscar from "./img/oscar.jpg";

const CATALOG = [
  {
    id: 1,
    title: "Луи",
    description: "Рыжий, любит спать на кресле",
    price: 88005553535,
    img: louis,
  },
  {
    id: 2,
    title: "Леон",
    description: "Серый, с выразительным взглядом",
    price: 987654321,
    img: leon,
  },
  {
    id: 3,
    title: "Мила",
    description: "Белая, спит где угодно",
    price: 67676767,
    img: mila,
  },
  {
    id: 4,
    title: "Оскар",
    description: "Чёрный, король коробок",
    price: 9999999,
    img: oscar,
  },
];

const STORAGE_KEY = "sleepycats-orders";

class App extends React.Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem(STORAGE_KEY);
    this.state = {
      orders: saved ? JSON.parse(saved) : [],
      items: CATALOG,
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  persistOrders(orders) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items
          items={this.state.items}
          orders={this.state.orders}
          onAdd={this.addToOrder}
        />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    const orders = this.state.orders.filter((el) => el.id !== id);
    this.setState({ orders });
    this.persistOrders(orders);
  }

  addToOrder(item) {
    if (this.state.orders.some((el) => el.id === item.id)) return;
    const orders = [...this.state.orders, item];
    this.setState({ orders });
    this.persistOrders(orders);
  }
}

export default App;
