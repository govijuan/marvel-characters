import React, { Component } from 'react';
import './List.css';
import  md5 from 'md5';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      requestCode: '',
      errorMessage: ''
    }
  }
  componentDidMount() {
    let privateKey = '25e4eb76f20df1b299bbe279a518afdc0bcb9557';
    let publicKey = '6c8dae1243d2a9fa52571c5b631cd19a';
    let timeStamp = Date.now().toString();
    fetch('http://gateway.marvel.com/v1/public/characters?ts=' + timeStamp + '&apikey=' + publicKey + '&hash=' + md5(timeStamp + privateKey + publicKey))
    .then()
    .then( results => {
      return results.json();
    })
    .then( jsonResponse =>{
      if(jsonResponse.code == 200){
        this.setState({
          isLoaded: true,
          items: jsonResponse.data.results,
          requestCode: jsonResponse.code
        });
        console.log(this.state.items);
      }else{
        this.setState({
          isLoaded: true,
          requestCode: jsonResponse.code,
          errorMessage: jsonResponse.message
        });
        console.log('Código de Erro:' + this.state.requestCode + " -- Mensagem de Erro: " + this.state.errorMessage);
      }
        
    })
  }
  render() {
    var { isLoaded, items, requestCode, errorMessage } = this.state;
    if (!isLoaded){
      return (<div>Carregando informações...</div>);
    }else{
      if(requestCode == 200){
        return(
          <div className='characters-list-wrap row'>
            <div className='col-md-12'>Carregando items</div> 
          </div>
        );
      }else{
        return (
          <div className='error-msg-wrap row'>
            <div className='col-md-12 '>
              <div className='alert alert-danger'>Houve um erro na requisição. Código: '{requestCode}'.<br/>
              Mensagem: '{errorMessage}'.
              </div>
            </div> 
          </div>
        );
      }
        
    }; 
  }
}

export default List;