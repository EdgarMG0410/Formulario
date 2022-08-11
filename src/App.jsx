import { useContext } from 'react';
import {
    Contact,
    Name,
    Date,
    Resume,
    Save
} from './components';
import { UserContext } from './context/UserContext';
import './styles/App.scss';

export function App() {
    const {
        style,
        hasComplete,
    } = useContext(UserContext);

    const logged = localStorage.getItem('Logged');
    const login = JSON.parse(logged);
    console.log({login});
    return (
        <div className='App'>
            <div className='title'>
                <h1>Titulo del formulario</h1>
                <h3>En menos de 5 minutos</h3>
            </div>
            <div className='progress'>
                <div className={style}></div>
            </div>
            {   
                login  ? <Resume/> : [
                hasComplete ? <Save /> : (
                <>
                    <Name />
                    <Date />
                    <Contact />
                </>
            )]}
        </div>
    )
}
