import React from 'react';
import FoodItem from './FoodItem.js'
import Order from './Order.js'
import './App.css';


class FoodList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    foodList: [],
    order: [],
    }
  }
  componentDidMount(){
    const foodList = [{
    name: 'Spaghetti',
    price:15.49,
    descripion: 'Spaghetti with house made Meat Sauce which is prepared fresh daily with garlic and herbs.',
    url: 'https://cmx.weightwatchers.co.uk/assets-proxy/weight-watchers/image/upload/t_WINE_EXTRALARGE/mkc4dqbjgfrnuarawox8.jpg',
    },
    {
    name: 'Mediterranean Baked Halibut',
    price: 19.99,
    descripion: 'Halibut and veggies, tossed in a bright Mediterranean sauce with lots of citrus, olive oil, fresh garlic and spices.',
    url: 'https://www.themediterraneandish.com/wp-content/uploads/2016/05/One-Pan-Baked-Halibut-Recipe-7.jpg',
    },
    {
    name: 'Ribeye',
    price: 29.99,
    descripion: '14oz CAB Ribeye grilled to order.',
    url: 'https://foremangrillrecipes.com/wp-content/uploads/2013/06/featured-ribeye-steak-foreman-grill.jpg',
    },
    {
    name:'New York Strip',
    price:25.00,
    descripion:'12oz New York Strip grilled to order.',
    url:'https://theviewfromgreatisland.com/wp-content/uploads/2020/01/new-york-strip-steak-sliced-scaled.jpg',
    },
  ];
  this.setState({foodList});

  this.addOrder = this.addOrder.bind(this);
  }

  addOrder(food){
    const order = [...this.state.order, food];
    this.setState({order: order});
  }


  render(){
    //console.log(this.state.order);
    return(
      <React.Fragment>
       <nav className="navbar navbar-dark bg-dark">
       <p className="webName">Wild Thyme Gourmet</p>
       </nav>
      <div className='container'>
        <div className='row'>
          <FoodItem foodList={this.state.foodList} addOrder={this.addOrder}/>
          <Order order={this.state.order}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default FoodList;
