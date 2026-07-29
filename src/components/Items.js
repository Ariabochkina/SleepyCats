import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    const orderedIds = new Set(this.props.orders.map((o) => o.id));

    return (
      <main>
        <h1 className="catalog-title">Наши котята</h1>
        <div className="items-grid">
          {this.props.items.map((el) => (
            <Item
              key={el.id}
              item={el}
              inCart={orderedIds.has(el.id)}
              onAdd={this.props.onAdd}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Items;
