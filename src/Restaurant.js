import React from 'react';
import './App.css';


class Restaurant extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    foodList: []
    }
  }
  componentDidMount(){
    const foodlist = [{
    name: 'Spaghetti',
    price:'15.49',
    descripion: 'Spaghetti with house made Meat Sauce which is prepared fresh daily with garlic and herbs',
    url: 'https://cmx.weightwatchers.co.uk/assets-proxy/weight-watchers/image/upload/t_WINE_EXTRALARGE/mkc4dqbjgfrnuarawox8.jpg',
    },
    {
    name: 'Mediterranean Baked Halibut',
    price: '19.99',
    descripion: 'Halibut and veggies, tossed in a bright Mediterranean sauce with lots of citrus, olive oil, fresh garlic and spices',
    url: 'https://www.themediterraneandish.com/wp-content/uploads/2016/05/One-Pan-Baked-Halibut-Recipe-7.jpg',
    },
    {
    name: 'Ribeye',
    price: '29.99',
    descripion: '14oz CAB Ribeye grilled to order',
    url: 'https://foremangrillrecipes.com/wp-content/uploads/2013/06/featured-ribeye-steak-foreman-grill.jpg',
    },
    {
    name:'New York Strip',
    price:'32.00',
    descripion:'12oz New York Strip grilled to order ',
    url:'https://aandmfarmsbeef.com/wp-content/uploads/2017/02/grass-fed-ny-strip.jpeg',
    },
  ];
  this.setState({foodlist});
  }
  render(){
    return(
      <div>Hello</div>
    )
  }
}

export default Restaurant;
