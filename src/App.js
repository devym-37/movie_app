import React from 'react';

function Food({ fav }){
  return <h4>I like { fav }</h4>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="rice" />
      <Food fav="hambuger" />
      <Food fav="ramen" />
    </div>
  );
}
// <Food name="kimchi" /> jsx
// value = kimchi, fav = props
export default App;
