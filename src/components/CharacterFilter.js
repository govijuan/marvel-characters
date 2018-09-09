import React, { Component } from 'react';
import './CharacterFilter.css';

class CharacterFilter extends Component {

  state = {
    searchTermString: ''
  }

  onChangeSearchTerm = e => {
      this.props.changeSearchTerm(e.target.value);
  }

  render(){
    return(
      <div className='c-filter-wrap'>
        <h2>Character</h2>
        <div className='c-filter'>
          <div className='search-input-wrap col-md-4'>
            <div className='row'>
              <form>
                <fieldset className='form-group'>
                  <input className='searchfilter-input form-control' onChange={this.onChangeSearchTerm} placeholder='Characters' />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterFilter;