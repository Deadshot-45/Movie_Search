import './searchbox.css';
export default SearchBox;

function SearchBox({ HandleInputChange }) {
    return (
        <div className="search-box">
            <input
                type="search"
                onChange={(event) => HandleInputChange(event.target.value)}
                placeholder="Type keywords here"
                className="search-bar"
            />
        </div>
    );
}
