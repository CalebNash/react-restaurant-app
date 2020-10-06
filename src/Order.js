import React from 'react'

class Order extends React.Component {
  render() {
    const subtotal = this.props.order.reduce((acc, item) => {
      return acc + item.price
    }, 0);
    const order = this.props.order.map((item, index) => <li className="list-group-item list-group-item-dark list-style" key={index}>{item.name} ${item.price}<button className="btn btn-danger"type="button" onClick={() => this.props.removeOrder(item)}>X</button></li>)
    return(
      <div className="col-12 col-md-6 order">
      <h1 className='order-title'>Order</h1>
      <ul className="list-group">
        {order}
      </ul>
      <div className='subtotal'>Subtotal ${subtotal}</div>
      </div>
    )
  }
}

export default Order;
