import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import "./filters.css";

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                {/* <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select> */}
            </div>

            <input className="nav__searchBar" type="text" value={search} placeholder="What are you looking for?"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <svg className="nav__searchIcon" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6912 21.3812C13.0633 21.3807 15.367 20.5867 17.2355 19.1255L23.1103 25L25 23.1104L19.1252 17.2359C20.5872 15.3673 21.3818 13.0632 21.3824 10.6906C21.3824 4.79608 16.586 0 10.6912 0C4.79633 0 0 4.79608 0 10.6906C0 16.5851 4.79633 21.3812 10.6912 21.3812ZM10.6912 2.67265C15.1133 2.67265 18.7096 6.26871 18.7096 10.6906C18.7096 15.1125 15.1133 18.7086 10.6912 18.7086C6.26904 18.7086 2.6728 15.1125 2.6728 10.6906C2.6728 6.26871 6.26904 2.67265 10.6912 2.67265Z" fill="white"/>
            </svg>

            {/* <div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div> */}
        </div>
    )
}

export default Filters;
