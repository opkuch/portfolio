import projects from '../db/projectsDB.json'
import skills from '../db/skillsDB.json'

export const appService = {getProjects, getSkills, getSkillById}

function getProjects() {
    return projects
}

function getSkills() {
    return skills
}

function getSkillById(id) {
    return skills.find(skill => skill.id === id)
}