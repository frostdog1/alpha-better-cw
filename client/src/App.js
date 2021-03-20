//import logo from './logo.svg';
import './App.css';

//function App() {
function App() {
  function countClicks() {
    alert('button was clicked');
    fetch('/clicked', {method: 'POST'})
      .then(function(response){
        if(response.ok){
          alert('click recorded');
          return;
        }
        throw new Error('Request Failed');
      })
      .catch(function(error){
        alert(error);
      });

  }
  return (
    <div className="App">
      <h1>Test Button Clicks</h1>
      <p id="counter">loading</p>
      <button onClick={countClicks}>Click me!</button>
      
    </div>
    
  );
  

}

export default App;
