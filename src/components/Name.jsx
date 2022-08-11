import { useContext, useEffect  } from 'react';
import '../styles/form.scss';
import support from '../assets/apoyo-tecnico.png';
import { UserContext } from '../context/UserContext';

export const Name = () => {
    const { 
        userName,
        setUserName,
        hasName,
        setHasName,
        setStyle} = useContext(UserContext);

    const onSubmit = (e) =>{
        e.preventDefault();
        setHasName(true)
        setStyle('bar-mid')
    }
    const handleChange = (e) =>{
        const {target} = e;
        const {name, value} = target;
        const newValues ={
            ...userName,
            [name]: value,
        }
        setUserName(newValues);
    }
    return (
        <div className='item'>
            <div className={hasName ? 'hidden' : 'form'}>
                <img src={support} />
                <div className='inputs'>
                    <h1>Cual es tu nombre?</h1>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder='Nombre'
                            name='nombre'
                            value={userName.nombre}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Segundo nombre'
                            name='segNombre'
                            value={userName.segNombre}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Apellido paterno'
                            name='apellidoP'
                            value={userName.apellidoP}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Apellido materno'
                            name='apellidoM'
                            value={userName.apellidoM}
                            onChange={handleChange}
                        />
                        <button type='submit'/>
                    </form>
                </div>
            </div>
            <div className= {hasName ? 'show' : 'hidden'}>
                <h2>{userName.nombre} {userName.segNombre} {userName.apellidoP} {userName.apellidoM}  </h2>
            </div>
        </div>

    )
}
