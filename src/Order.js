import React from 'react'

class Order extends React.Component {
  render() {
    const order = this.props.order.map((item, index) => <li className="list-group-item list-group-item-dark list-style" key={index}>{item.name}</li>)
    return(
      <div className="col-12 col-md-4">
      <ul className="list-group">
        {order}
      </ul>
      </div>
    )
  }
}

export default Order;
