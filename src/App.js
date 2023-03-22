import './App.css';
import Countries from './componants/Countries/Countries';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
       <Countries></Countries>
       <Footer></Footer>
    </div>
  );
}

// function LoadCountries (){
//   const [countries,setCountries] =useState([]);
// useEffect( () =>{
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data =>  setCountries(data))
// }, [])

//   return(
//     <div>
//       <h1>Visiting Every Country of the World</h1>
//         <h3>Avilable Country :{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country> )
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//  <h2>Name : {props.name}</h2>
//   <h4>Population : {props.population}</h4>
//     </div>
//   )
// }

export default App;
