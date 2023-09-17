import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import dummyjson from '../samples.json'
import './Card.css'

function Card({ id }) {
    const data = dummyjson.data
    // console.log(data)
    let temp = data.filter(el => (el.id)==id)
    // console.log(temp)
    temp = temp[0]
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={temp.thumbnail} className="card-img-top" alt={temp.title} />
                <div className="card-body">
                    <h5 className="card-title">{temp.title}</h5>
                    <p className="card-text">{temp.description}</p>
                    <h3>{temp.brand}</h3>
                </div>
            </div>
        </>
    )
}

export default Card