import React from 'react';





/*
// api 이용할 경우
const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 5
    }, {
        id: 2,
        name: "Samgyeopsal",
        image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSf" +
                "HS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.8
    }, {
        id: 3,
        name: "Bibimbap",
        image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_120" +
                "0x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 4.7
    }, {
        id: 4,
        name: "Doncasu",
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 4.5
    }, {
        id: 5,
        name: "Kimbap",
        image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512" +
                "295.jpg",
        rating: 4.4
    }
];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />;
}
전과 같은방법 이지만 새로운 함수 생성


function Food({ name, picture, rating }){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number // isRequired 필수적으로 판단
};



function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} />
      ))}
    </div>
  );
}
// <Food name="kimchi" /> jsx
// value = kimchi, fav = props
export default App;


*/
/*
// class component로 변경
class App extends React.Component{
  state = {
    count: 0,
  };
  add = () => {
    this.setState(current => ({count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={ this.add }>Add</button>
        <button onClick={ this.minus }>Minus</button>
      </div>
    );
  }

}


export default App;
*/

class App extends React.Component{
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 6000);
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;