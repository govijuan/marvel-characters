import React, { Component } from 'react';
import ListItem from './ListItem';
import './List.css';


class List extends Component {

  render(){
    let completeResponse = this.props.resultsObj;
    if(completeResponse.code === 200){
      return(
        <div className='characters-list-wrap row'>
            {completeResponse.data.results.map((character,index)=> <ListItem character={character} key={index} />)}
            
        </div>
      );
    }else{
      return (
        <div className='error-msg-wrap row'>
          <div className='col-md-12 '>
            <div className='alert alert-danger'>Houve um erro na requisição. Código: '{completeResponse.code}'.<br/>
            Mensagem: '{completeResponse.message}'.
            </div>
          </div> 
        </div>
      );
    }
    
  }
}

export default List;