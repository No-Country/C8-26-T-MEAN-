import React  from "react";

const User = (props) => {
    return (
        <div>
            <h1>Nombre:{props.first_name}</h1>
            <h2>Apellido:{props.last_name}</h2>
            <h3>Puntos:{props.points}</h3>
        </div>

    )

}

export default User