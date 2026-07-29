import React, { Component } from "react";

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export class Item extends Component {
  render() {
    const { item, inCart, onAdd } = this.props;

    return (
      <article className={`item ${inCart ? "in-cart" : ""}`}>
        <div
          className="item-photo"
          style={{ backgroundImage: `url(${item.img})` }}
          role="img"
          aria-label={item.title}
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="item-footer">
          <span className="price">{formatPrice(item.price)}</span>
          <button
            type="button"
            className="add-to-cart"
            disabled={inCart}
            onClick={() => onAdd(item)}
            aria-label={inCart ? "Уже в корзине" : "Добавить в корзину"}
          >
            {inCart ? "✓" : "+"}
          </button>
        </div>
      </article>
    );
  }
}

export default Item;
