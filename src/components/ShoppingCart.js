<<<<<<< HEAD
import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from '../actionCreators';
import {connect} from 'react-redux';
=======
import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


<<<<<<< HEAD
const ShoppingCart = ({cart,removeFromCart}) => {

=======
class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    };

    store.subscribe(()=> {
      this.setState({
          cart: store.getState().cart
      });
    });
  }

  render() {
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
<<<<<<< HEAD
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
=======
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
<<<<<<< HEAD
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
=======
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
<<<<<<< HEAD
  );

}

const mapStateToProps = state => {
  return{
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return{
      removeFromCart(product){
        dispatch(removeFromCart(product));
    }  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
=======
    )
  }

  removeFromCart(product) {
    store.dispatch({
      type: "REMOVE_FROM_CART",
      product: product
    });
  }
}

export default ShoppingCart;
>>>>>>> 3fa72d2220967320beaffe4effd2d0b2c2ed2190
