import React from 'react'

const Vehicles = ({data}) => {
    return (
        <>
            <h1>Vehicles</h1>
            {data.map((vehicle, i) => {

                return (
                 
                    <div key={i} className="card" style={{width: '18rem'}} >
                        <div className="card-body">
                            <h5 className="card-title">Name: {vehicle.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
                            <p className="card-text">Capacity: {vehicle.capacity}</p>
                            <a href="#" className="btn btn-primary">Add to Favorites</a>

                        </div>
                    </div>
                    
                )
            }
            )}
        </>
    );
}
 
export default Vehicles;