import React, { Component } from 'react';
import './List.css';
import  md5 from 'md5';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
    console.log
    console.log(md5('09062018045725e4eb76f20df1b299bbe279a518afdc0bcb95576c8dae1243d2a9fa52571c5b631cd19a'));
  }
  componentDidMount() {
    fetch('https://gateway.marvel.com/characters')
      .then(res => res.json())
      .then(json =>{
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    
  }
  /*render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded){
      return <div>Carregando informações...</div>;
    }else{
      <div className='characters-list-wrap row'>
      </div>;
    }
    
    
  }*/
  render(){
    return <div className='testando'>Testando funcionamento correto</div>
  }
}

export default List;