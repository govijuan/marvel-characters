import React, { Component } from 'react';
import  md5 from 'md5';
import logo from './resources/logo.svg';
import './App.css';
import List from './components/List'
import CharacterFilter from './components/CharacterFilter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      searchTerm: '',
      orderBy: 'name'
    }
  }
  
  changingSearchTerm(recievedSearchString){
    this.searchInApi(recievedSearchString, this.state.orderBy);
    this.setState({searchTerm: recievedSearchString});
  }
  changingListOrder(){
    this.state.orderBy = this.state.orderBy === 'name' ? '-name': 'name'
    this.searchInApi(this.state.searchTerm, this.state.orderBy);
  }

  componentDidMount() {
    this.searchInApi(this.state.searchTerm, this.state.orderBy );
    
  }
  
  searchInApi(searchTerm, orderByString){
    searchTerm === undefined || searchTerm === '' ? searchTerm = ''
                                                  : searchTerm = 'nameStartsWith=' + searchTerm  + '&';
    let privateKey = '25e4eb76f20df1b299bbe279a518afdc0bcb9557';
    let publicKey = '6c8dae1243d2a9fa52571c5b631cd19a';
    let timeStamp = Date.now().toString();
    let orderBy = 'orderBy=' + orderByString;
    let itemsLimit = 12;

    fetch('http://gateway.marvel.com/v1/public/characters?' + searchTerm + orderBy + '&limit=' + itemsLimit + '&ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + md5(timeStamp + privateKey + publicKey))
    .then()
    .then( results => {
      return results.json();
    })
    .then( jsonResponse =>{
      this.setState({
        isLoaded: true,
        items: jsonResponse,
      }); 
    })
  }

  render() {
    let contentToDisplay;
    if (!this.state.isLoaded){
      contentToDisplay = 
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>Carregando informações...</div>
        </div>  
      </div>
    }else{
      contentToDisplay =
      <div className='characters-search-wrap container'>
        <CharacterFilter  changeSearchTerm={this.changingSearchTerm.bind(this)} changeListOrder={this.changingListOrder.bind(this)} sortString={this.state.orderBy} />
        <List resultsObj={ this.state.items }/>
      </div>
    }          
    return (
      <div className="App">
        <header className="App-header">
          <nav className='nav'><div className='container-fluid'><img src={logo} className='App-logo' alt='Marvel Logo'/></div>
          </nav>
        </header>
        
        <div className='main-content'>
          {contentToDisplay}
        </div>
      </div>
    );  
  }
}

export default App;
