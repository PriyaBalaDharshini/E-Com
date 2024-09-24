import React from 'react'

const SearchBar = ({ searchItem, setSearchItem }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Search products..."
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </div>
    )
}

export default SearchBar