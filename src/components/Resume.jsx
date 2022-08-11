import { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import '../styles/form.scss'

export const Resume = () => {
  const {
    isLogin,
    setIsLogin
} = useContext(UserContext);
  const contacto = localStorage.getItem('Contacto');
  const fecha = localStorage.getItem('Fecha');
  const nombre = localStorage.getItem('Nombre');
  const onReset = () => {
    localStorage.removeItem('Contacto');
    localStorage.removeItem('Fecha');
    localStorage.removeItem('Nombre');
    localStorage.removeItem('Logged');
    window.location.reload(true);
  }
  return (
    <div className='resume'>
      <h1>{nombre}</h1>
      <h1>{fecha}</h1>
      <h1>{contacto}</h1>
      <button onClick={onReset}>Reiniciar</button>
    </div>
  )
}
