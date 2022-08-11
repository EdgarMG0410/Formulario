import { Resume } from './Resume'
import '../styles/form.scss';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export const Save = () => {
    const {
        userName,
        date,
        contact,
        isLogin,
        setIsLogin
    } = useContext(UserContext);

    const handleLogin= () => {
        setIsLogin(true)
        localStorage.setItem('Nombre',(
            [userName.nombre + ' ' + 
             userName.segNombre + ' ' + 
             userName.apellidoP + ' ' +
             userName.apellidoM]
        ));
        localStorage.setItem('Fecha',(
            [date.dia + ' de ' + 
             date.mes + ' de ' + 
             date.anio]
        ));
        localStorage.setItem('Contacto',(
            ['Correo: ' + contact.email + 
             ' Telefono: ' + contact.tel]
        ));
        localStorage.setItem('Logged','true');
    }


    return (
        <div className='item' >
            {isLogin ? <Resume/> : (
                <div className='button'>
                <button
                    onClick={handleLogin}>
                    Iniciar
                </button>
            </div>
            )}

        </div>
    )
}
