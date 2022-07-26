import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageFile } from "remove.bg";
import './productStyles.css'


import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  
  const handleAddToCart = () => onAddToCart(product.id, 1);
  return (
    <div class="wrapper">
  <div class="container">
    <div class="top"><img src = {product.media.source}></img></div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>Chair</h1>
          <p>£250</p>
        </div>
        <div class="buy"><i class="material-icons" onClick={handleAddToCart}><AddShoppingCart/></i></div>
      </div>
      <div class="right">
        <div class="done"><i class="material-icons">done</i></div>
        <div class="details">
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div class="remove"><i class="material-icons">clear</i></div>
      </div>
    </div>
  </div>
  <div class="inside">
    <div class="icon"><i class="material-icons">info_outline</i></div>
    <div class="contents">
      <table>
        <tr>
          <th>Width</th>
          <th>Height</th>
        </tr>
        <tr>
          <td>3000mm</td>
          <td>4000mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </div>
  </div>
</div>
  );
};

export default Product;

