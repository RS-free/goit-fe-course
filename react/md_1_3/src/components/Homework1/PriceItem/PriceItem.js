import React from 'react';
import pricingPlanItems from './pricing-plan.json';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  <div className="pricing-item">
    <i className="icon" />
    <h2 className="label">{label}</h2>
    <p className="capacity">{capacity}</p>
    <p className="description">{description}</p>
    <p className="price">{price}</p>
    <button className="button">Get Started</button>
  </div>;
};

const PricingPlan = (props, { label }) => {
  <ul className="pricing-plan">
    <li className="item">{/* <!-- разметка из PricingItem --> */}</li>
    {/* <!--
    Произвольное кол-во li внутри которых разметка из PricingItem,
    в зависимости от кол-ва объектов в массиве
  --> */}
  </ul>;
};

export default pricingPlanItems;
