import { ContactMe } from './ContactMe'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'

export function About() {
  const skills = appService.getSkills()

  return (
    <div id="about" className="flex column justify-center about-container">
      <h1 className="page-headline">about me</h1>

      <section className="about-body">
        <div className="about-info flex column">
          <span>
            Passionate Fullstack Developer, fascinated by web technologies and
            everything that involves code.
          </span>
          <span>Experienced in creating web applications using</span>

          <div className="flex skills-about">
            {skills.map((skill) => (
              <SkillPreview key={skill.id} skillObj={skill} />
            ))}
          </div>
        </div>
      </section>
      <ContactMe />
    </div>
  )
}
