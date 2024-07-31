import { lenguajes_prog } from '../../data/data';

export default function Languages() {
  return (
    <>
      <div className='language_content'>
        <h3 className='language_title'>Lenguajes de Programación</h3>
        <div className='language_box'>
            {
              lenguajes_prog.map((lenguaje) => (
                <div className='language_data' key={lenguaje.nombre}>
                  <div className=''>
                    <img src={lenguaje.logo} title={lenguaje.nombre} />
                    {/* <h3 className='language_name'>{lenguaje.nombre}</h3> */}
                    <span className='language_level'>{lenguaje.nivel}</span>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </>
  )
}
