import React from 'react';
// Styles
import './Card.scss';

export function ItemCard(): JSX.Element {
  return (
    <div className="card-with-image">
      <img
        src="/assets/image.jpg"
        alt="Person avatar"
      />
      <div className="card-content">
        <button className="card-content__btn-float" type="button">
          <img src="/assets/icon-home.svg" alt="Icon home" />
        </button>
        <h4>lorem ipsum dolor</h4>
        <p className="card-content__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <ul>
          <li>
            <img src="/assets/icon-card.svg" alt="Icon card" />
            <span>Lorem ipsum dolor sit amet.</span>
          </li>
          <li>
            <img src="/assets/icon-card.svg" alt="Icon card" />
            <span>Lorem ipsum dolor sit amet.</span>
          </li>
        </ul>
        <button className="btn-custom secondary" type="button">lo quiero ya</button>
      </div>
    </div>
  );
}
