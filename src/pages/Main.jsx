import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { main } from '../features/main/actions';
import { addSearchHistory } from '../features/main/slice';

const MainComponent = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.main.items);
    const postsCount = posts.length;
    const [query, setQuery] = useState('');
    const searchHistory = useSelector((state) => state.main.searchHistory);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        // Fetch all items initially
        dispatch(main());
    }, [dispatch]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const executeSearch = () => {
        if (query) {
            dispatch(main(query));
            dispatch(addSearchHistory(query));
        } else {
            dispatch(main());
        }
    };

    const handleFocus = () => {
        setShowHistory(true);
    };

    const handleBlur = () => {
        setTimeout(() => setShowHistory(false), 200); // Delay to allow click on history item
    };

    const handleHistoryClick = (searchTerm) => {
        setQuery(searchTerm);
        setShowHistory(false);
        executeSearch(); // Immediately execute search on history click
    };

    return (
        <div>
            <header>
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={query}
                    onChange={handleSearch}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <button onClick={executeSearch}>Search</button>
                {showHistory && searchHistory.length > 0 && (
                    <ul style={{ position: 'absolute', backgroundColor: 'gray', border: '2px solid black', listStyleType: 'none', }}>
                        {searchHistory.map((term, index) => (
                            <li key={index} onClick={() => handleHistoryClick(term)}>
                                {term}
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <footer>
                <p>Total Posts: {postsCount}</p>
            </footer>
        </div>
    );
};

export default MainComponent;
