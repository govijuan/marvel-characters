import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

  render(){
    let character = this.props.character;
    let characterTbnUrl = character.thumbnail.path + '.' + character.thumbnail.extension;
    let characterDescription;
    if(character.description !== ''){ characterDescription = character.description}else{ characterDescription = 'No description available for this character yet.'}
    return(
            <div className='list-item-wrap col-sm-6 col-md-4 col-lg-3 text-center'>
              <div className='list-item'>
                <div className='tbnail-wrap'>
                  <img src={characterTbnUrl} alt=""/>
                </div>
                <div className='character-name'>{character.name}</div>
                <div className='character-alter'>Alter Ego</div>
                <div className='divide-line-wrap'><span></span></div>
                <div className='character-description'>{characterDescription}</div>
              </div>
            </div>
    );
  }
  
}

export default ListItem;