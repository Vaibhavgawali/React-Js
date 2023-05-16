import React,{Component} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import JSON from './components/db.json';
import ProductDisplay from './components/ProductDisplay';

class  App extends Component {
  constructor(){
    super();
    this.state={
        title:"Hii from React",
        productData:JSON,
        filteredData:JSON
      }
  }

  filtereData=(keyword)=>{
      let output= this.state.productData.filter((data)=>{
        return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      })
      this.setState({filteredData:output})
  }

  render() {
    console.log(JSON)
    return (
      <div className="App">
        <Header userInput={(data)=>this.filtereData(data)}/>
        <ProductDisplay products={this.state.filteredData}/>
        {/* <h1>{this.state.title}</h1> */}
        <Footer year="2023"/>
      </div>
    );
  }
}

export default App;
