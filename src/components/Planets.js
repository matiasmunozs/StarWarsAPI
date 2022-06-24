import React from 'react'

const Planets = ({ data }) => {
    return (
        <>
            <h1>Planets</h1>
            {data.map((planet, i) => {

                return (

                    <div key={i} className="card" style={{ width: '18rem' }} >
                        <div className="card-body">
                            <h5 className="card-title">Name: {planet.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Terrain: {planet.terrain}</h6>
                            <p className="card-text">Population: {planet.population}</p>
                            <a href="#" className="btn btn-primary"   >Add to Favorites</a>
                          </div>
                    </div>
                    

                )
            }
            )}
        </>
    );
}

export default Planets;