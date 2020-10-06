import React from 'react'

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

handleInput(event){
  this.setState({[event.target.name]: event.target.value});
}

  render() {
    const subtotal = this.props.order.reduce((acc, item) => {
      return acc + item.price
    }, 0);
    const order = this.props.order.map((item, index) =>
    <li className="list-group-item list-group-item-dark list-style" key={index}>
    {item.name}
    ${item.price}
    <button className="btn btn-danger"type="button" onClick={() => this.props.removeOrder(item)}>X</button>
    <textarea row='20' name="instructions" id="instructions" placeholder="Custom instructions" value={this.state.instructions} onChange={this.handleInput}/>
    </li>)
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
