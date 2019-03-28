import React from 'react';
import img from "../assets/img/icon/category/butovay_texnika.svg";

function CategoryItem (props) {
    return (
        <div className="category-item-wrapper">
            <div className="category-item-content">
                <img src={props.category.img} alt="" />
                <a href="#">{props.category.title}-{props.category.id}</a>
            </div>
        </div>
    )
};

export default CategoryItem;