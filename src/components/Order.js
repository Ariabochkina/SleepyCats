import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export class Order extends Component {
  render() {
    const { item, onDelete } = this.props;

    return (
      <div className="cart-item">
        <div
          className="cart-item-photo"
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="cart-item-info">
          <h2>{item.title}</h2>
          <p>{formatPrice(item.price)}</p>
        </div>
        <button
          type="button"
          className="delete-icon"
          onClick={() => onDelete(item.id)}
          aria-label={`Удалить ${item.title}`}
        >
          <FaTrash />
        </button>
      </div>
    );
  }
}

export default Order;
