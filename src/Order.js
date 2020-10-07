import React from 'react'

class OrderItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      instructions:'',
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
  this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
    <li className="list-group-item list-group-item-dark list-style">
    {this.props.item.name}
    ${this.props.item.price}
    <button className="btn btn-danger"type="button" onClick={() => this.props.removeOrder(this.props.item)}>X</button>
    <textarea row='20' name="instructions" id="instructions" placeholder="Custom instructions" value={this.state.instructions} onChange={this.handleInput}/>
    <button onClick={() => this.props.editOrder(this.props.item, this.state.instructions)} className="btn btn-primary"type="button">Save</button>
    </li>
    )
  }
}


class Order extends React.Component {

  render() {
    const subtotal = this.props.order.reduce((acc, item) => {
      let total = acc + item.price
      return Math.round(total * 100)/ 100;
    }, 0);
    const order = this.props.order.map((item, index) =><OrderItem key={index} item={item} removeOrder={this.props.removeOrder} editOrder={this.props.editOrder}/>)
    // <li className="list-group-item list-group-item-dark list-style" key={index}>
    // {item.name}
    // ${item.price}
    // <button className="btn btn-danger"type="button" onClick={() => this.props.removeOrder(item)}>X</button>
    // <textarea row='20' name="instructions" id="instructions" placeholder="Custom instructions" value={this.state.instructions} onChange={this.handleInput}/>
    // </li>)

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
