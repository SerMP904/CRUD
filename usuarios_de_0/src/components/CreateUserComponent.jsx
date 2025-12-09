import React, { useState } from 'react'

const CreateUserComponent = () => {
    const {createUser, backToList} = props;
    const [newUser, setNewUser] = useState({})

    const newUserHandler = (propName, propValue) => {
        const aux = {
            ...newUser,
            [propName]: propValue,
        };
        setNewUser(aux);
    };

  return (
    <div>
        <h2>Crear nuevo usuario</h2>
        <div>
            <label>
                Nombre{''}
                <input type="text" onChange={(event) => {
                    newUserHandler('nombre', event.target.value)
                }} />
            </label>
        </div>
    <div>
    <label>
                Fecha nacimiento {''}
                <input type="text" onChange={(event) => {
                    newUserHandler('fechaDeNacimiento', event.target.value)
                }} />
            </label>
    </div>
    <div>
    <label>
                Nombre{''}
                <input type="text" onChange={(event) => {
                    newUserHandler('nombre', event.target.value)
                }} />
            </label>
    </div>
    <div>
    <label>
                Nombre{''}
                <input type="text" onChange={(event) => {
                    newUserHandler('nombre', event.target.value)
                }} />
            </label>
    </div>
    <div>
    <label>
                Nombre{''}
                <input type="text" onChange={(event) => {
                    newUserHandler('nombre', event.target.value)
                }} />
            </label>
    </div>
    </div>
  )
}

export default CreateUserComponent