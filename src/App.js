import Main from './components/Main';
import './App.css';
const food = [
  {
    img:'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/cate-thumb-640-burgers_SH__0023_Big-Mac.png',
    text:'Bic Mac',
    price:2.5

  },
  {
    img:'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/cate-thumb-640-Big-Mac-Bacon-Low-202101.png',
    text:'Bic Mac Bacon',
    price:3.5

  },
  {
    img:'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/cate-thumb-640-burgers_SH__0020_Quarter-Pounder-Double_1.png',
    text:'Double Quater Pounter',
    price:3

  },
  {
    img:'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/cate-thumb-640-burgers_SH__0014_Cheeseburger-Triple_2.png',
    text:'Triple CheeseBuger',
    price:5

  }

]



function App() {
  
  return (
    <div className="App">
      
      <Main data = {food}/>
      
      

      
    </div>
  );
}

export default App;
