import Project from "../components/Project"
import calculator from '../images/calculator_image.png'
import toDo from '../images/To_Do_List_image.png'
import logo from '../images/logo.png'

// The following objects are used to populate the Project components 
const calc = {
    url: 'https://htmlpreview.github.io/?https://github.com/TopherHook/calculator/blob/main/index.html',
    lang: "HTML, CSS, JS",
    image: calculator,
    title: 'Calculator',
    desc: 'A working calculator styled to resemble a familiar calculator app.'
}

const todo = {
    url: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/TopherHook/to-do-list/main/index.html',
    lang: "HTML, CSS, JS",
    image: toDo,
    title: 'To Do List',
    desc: 'A simple yet effective tool to help with productivity.'
}

const portSite = {
    lang: "React, JSX, CSS",
    image: logo,
    title: 'Portfolio Website',
    desc: 'A Portfolio Website. You are already here.'
}


const Portfolio = () => {

    return (
        <div>
            <h1 className="pageTitle">Portfolio Projects</h1>
            <div className="projects">
                <a href={calc.url} target="blank"><Project {...calc} /></a>
                <a href={todo.url} target="blank"><Project {...todo} /></a>
                <a href="/"><Project {...portSite} /></a>
            </div>
        </div>
    )
}

export default Portfolio
