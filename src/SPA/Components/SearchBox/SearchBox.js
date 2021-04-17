import React from 'react';

class SearchBox extends React.Component{

    constructor(props){
        super();
        this.props = props;
        this.state = {
            searchQuery: ""
        };

        this.onQueryChange =  this.onQueryChange.bind(this);
        this.searchClicked = this.searchClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    onQueryChange(event){
        this.setState({
            searchQuery: event.target.value
        });
    }

    clearClicked(){
        this.setState({searchQuery: ""}, () => this.searchClicked());
    }

    searchClicked(){
        this.props.onSearch.call(null, this.state.searchQuery.toLocaleLowerCase());
    }

    render(){
        return (
            <div className='search-box-component'>
                <input className='search-text' onChange={this.onQueryChange} type='text' value={this.state.searchQuery} placeholder='Search..'/>
                <div className='search-box-btns'>
                    <button className='clear-btn' onClick={this.clearClicked}>Clear</button>
                    <button className='search-btn' type='submit' onClick={this.searchClicked}>Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBox;