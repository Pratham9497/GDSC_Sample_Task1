import Card from "./Card"
import './Results.css'

function Result({res}) {
    // res.map(el => console.log(el[0]))
    return (
        <>
            <div className="box">
                {res.map(el => <Card key={el[0]} id={el[0]} />)}
            </div>
        </>
    )
}

export default Result