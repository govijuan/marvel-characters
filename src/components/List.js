import React, { Component } from 'react';
import ListItem from './ListItem';
import './List.css';


class List extends Component {

  render(){
    let completeResponse = this.props.resultsObj;
    if(completeResponse.code === 200 && completeResponse.data.count > 0){
      return(
        <div className='characters-list-wrap row'>
            {completeResponse.data.results.map((character,index)=> <ListItem character={character} key={index} />)}
            
        </div>
      );
    }else if(completeResponse.code === 200 && completeResponse.data.count === 0 ){
      return(
        <div className='zero-results-wrap row'>
          <div className='col-md-12 text-center'>
            <div className='alert alert-warning'>
            <span>:(</span><br/>
            No results for that search term.</div>
          </div>
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