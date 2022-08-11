import '../styles/form.scss';
import support from '../assets/apoyo-tecnico.png';
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export const Contact = () => {
  const { contact,setContact, hasContact, setHasContact, setHasComplete, hasDate, setStyle } = useContext(UserContext);
  const onSubmit = (e) => {
    setHasContact(true)
    setHasComplete(true)
    setStyle('bar-complete')
  }
  const handleChange = (e) =>{
    const {target} = e;
    const {name, value} = target;
    const newValues ={
        ...contact,
        [name]: value,
    }
    setContact(newValues);
}
  return (
    <div className={hasDate ? 'item' : 'hidden'}>
      <div className={hasContact ? 'hidden' : 'form'}>
        <img src={support} />
        <div className='inputs'>
          <h1>Datos de contacto</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder='Correo electronico'
              name='email'
              value={contact.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder='Telefono celular'
              name='tel'
              value={contact.tel}
              onChange={handleChange}
            />
            <button type='submit'/>
          </form>

        </div>
      </div>
      <div className={hasContact ? 'show' : 'hidden'}>
        <h2> Telefono: {contact.tel} </h2>
        <h2> Email: {contact.email}</h2>
      </div>
    </div>

  )
}
