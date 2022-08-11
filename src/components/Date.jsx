import '../styles/form.scss';
import support from '../assets/apoyo-tecnico.png';
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export const Date = () => {
    const { 
        date,
        setDate,
        hasDate,
        setHasDate,
        hasName,
        setStyle } = useContext(UserContext);

    const onSubmit = (e) => {
        e.preventDefault();
        setHasDate(true)
        setStyle('bar-large')
    }
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        const newDate = {
            ...date,
            [name]: value,
        }
        setDate(newDate);
    }
    return (
        <div className={hasName ? 'item' : 'hidden'}>
            <div className={hasDate ? 'hidden' : 'form'}>
                <img src={support} />
                <div className='inputs'>
                    <h1>Cual es tu fecha de nacimiento?</h1>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            placeholder='Dia'
                            name='dia'
                            value={date.dia}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Mes'
                            name='mes'
                            value={date.mes}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder='Anio'
                            name='anio'
                            value={date.anio}
                            onChange={handleChange}
                        />
                        <button type='submit'/>
                    </form>
                </div>
            </div>
            <div className={hasDate ? 'show' : 'hidden'}>
                <h2>{date.dia} de {date.mes} de {date.anio}</h2>
            </div>
        </div>

    )
}

