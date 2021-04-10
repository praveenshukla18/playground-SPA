const Search = ({value, onSearch}) => {
    return (
        <div>
            <label htmlFor="searchInput">Search: </label>
            <input id="searchInput" 
                   type="text" 
                   value={value}
                   onChange={onSearch}/>
        </div>
    );
}
export default Search;