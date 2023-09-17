import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useState } from 'react'
import './Search.css'
// import { FaSearch } from 'react-icons/fa'

function Search({setRes, list}) {
    const [inp, setInp] = useState('')

    function findRes() {
        let temp = list.filter(ele => ele[1].toLowerCase().includes(inp.toLowerCase()))
        setRes(temp)
    }

    function clickBtn(event) {
        if(event.key==='Enter'){
            findRes();
        }
        if(event.key=='Backspace' && inp==""){
            findRes();
        }
    }

    return (
        <div id='search-box'>
            <input id="search" type="text" placeholder="Search" value={inp} onChange={(new_val) => setInp(new_val.target.value)} onKeyDown={clickBtn} />
            <button id="btn-search" className="btn btn-outline-primary" onClick={findRes}>Search</button>
        </div>
    )
}

export default Search