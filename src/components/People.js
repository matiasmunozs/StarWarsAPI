import React from 'react'

const People = ({ data, addToFavorites }) => {
    return (
        <>
            <h1>People</h1>
            {data.map((people, id) => {

                return (
                 
                    <div key={id} className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Name: {people.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Hair Color: {people.hair_color}</h6>
                            <p className="card-text">Eye Color: {people.eye_color}</p>
                            <a href="#" className="btn btn-primary"
                            onClick={() => addToFavorites(people.name)}
                            >Add to Favorites</a>

                        </div>
                    </div>
                    
                )
            }
            )}
        </>
    );
}

export default People;