<<<<<<< HEAD
import React  from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../actionCreators';
import {connect} from 'react-redux';
=======
import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

<<<<<<< HEAD
const ProductList = ({ products, addToCart }) => {

    return (
      <div style={styles.products}>
        {products.map(product =>
=======
class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      ]
    }
  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map(product =>
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
<<<<<<< HEAD
                <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
=======
                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
              </p>
            </div>
          </div>
        )}
      </div>
    );
<<<<<<< HEAD
  };

  const mapStateToProps = state => {
    return{
      products: state.products
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return{
      addToCart(product){
        dispatch(addToCart(product));
      }  
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
=======
  }

  addToCart(product) {
      store.dispatch({
        type: "ADD_TO_CART",
        product
      })
  }
}

export default ProductList;
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
