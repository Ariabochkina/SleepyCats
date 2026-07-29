import React, { useState } from "react";
import { FaCat } from "react-icons/fa";
import Order from "./Order";

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export default function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);
  const total = orders.reduce((sum, item) => sum + item.price, 0);

  return (
    <header>
      <div className="header-bar">
        <span className="logo">SleepyCats</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
        <button
          type="button"
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
          onClick={() => setCartOpen((open) => !open)}
          aria-label="Открыть корзину"
        >
          <FaCat />
          {orders.length > 0 && (
            <span className="cart-badge">{orders.length}</span>
          )}
        </button>

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              <>
                {orders.map((el) => (
                  <Order onDelete={onDelete} key={el.id} item={el} />
                ))}
                <div className="cart-total">
                  <span>Итого</span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              </>
            ) : (
              <div className="empty">
                <p>Корзина пуста</p>
                <span>Добавьте котёнка из каталога</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="presentation" role="img" aria-label="Спящий котёнок">
        <p className="presentation-title">Никакого</p>
        <p className="presentation-subtitle">проснутия</p>
      </div>
    </header>
  );
}
