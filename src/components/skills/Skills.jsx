import Frontend from './Frontend';
import Backend from './Backend';
import Languages from './Languages';
import '../skills/skills.css';

export default function Skills() {
  return (
    <>
      <section className='skills section' id='skills'>
        <h2 className='section_title'>Habilidades</h2>
        <span className='section_subtitle'>Mi nivel de conocimientos son:</span>
        <Languages />
        <br />
        <div className='skills_container container grid'>
          <Frontend />
          <Backend />
        </div>
      </section>
    </>
  )
}
