import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        <CartContext.Consumer>
          {value => {
            const {cartList} = value
            let totalAmount = 0
            const cartValue = cartList.map(each => {
              totalAmount = totalAmount + each.price
              return totalAmount
            })
            const isEmpty = cartList.length === 0
            return (
              <>
                {isEmpty ? (
                  <div className="no-cart-view-container">
                    <img
                      src="https://kirti.skoozo.com/assets/img/empty-cart.png"
                      alt="no-cart"
                      className=""
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="cart-heading">My Cart</h1>
                    <CartListView />
                    <div className="cart-summary-container">
                      <h1>Total Amount: {totalAmount}</h1>
                      <p>{cartList.length} Items in Cart</p>
                      <button type="button">Checkout</button>
                    </div>
                  </>
                )}
              </>
            )
          }}
        </CartContext.Consumer>
      </div>
    </div>
  </>
)

export default Cart
