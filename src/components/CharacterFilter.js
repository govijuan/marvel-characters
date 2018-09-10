import React, { Component } from 'react';
import './CharacterFilter.css';
import filterIcon from '../resources/filter.svg';
import downArrow from '../resources/arrow-down.svg';
import upArrow from '../resources/arrow-up.svg'
class CharacterFilter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchTermString: '',
      sortingText: 'A-Z',
    }

  }

  onChangeSearchTerm = e => {
      this.props.changeSearchTerm(e.target.value);
      this.changeSortingText();
  }
  changeTheListOrder = e => {
    this.props.changeListOrder();
    this.changeSortingText();
  }
  changeSortingText(){
    this.state.sortingText = this.state.sortingText === 'A-Z' ? 'Z-A' : 'A-Z';
  }
  render(){
    let arrow = this.state.sortingText === 'A-Z' ? <img src={upArrow} alt='Sorting Arrow' /> : <img src={downArrow} alt='Sorting Arrow' />;
    return(
      <div className='c-filter-wrap'>
        <h2>Character</h2>
        <div className='c-filter row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='search-input-wrap col-md-4'>
                <fieldset className='form-group'>
                  <input className='searchfilter-input form-control' onChange={this.onChangeSearchTerm} placeholder='Characters' />
                </fieldset>
              </div>
              <div className='search-sorting-wrap col-md-4'>
                <i className='filter-icon'>
                  <img src={filterIcon} alt=''/>
                </i>
                <span className='solting-text'>{this.state.sortingText}</span>
                <span  onClick={this.changeTheListOrder} className='sort-order-arrow'>
                  {arrow}
                </span>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterFilter;