import Project from "../components/Project"
import calculator from '../images/calculator_image.png'
import toDo from '../images/To_Do_List_image.png'
import logo from '../images/logo.png'

const calc = {
    lang: "HTML, CSS, JS",
    image: calculator,
    title: 'Calculator',
    desc: 'A working calculator styled to resemble a familiar calculator app.'
}

const todo = {
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
                <Project {...calc} />
                <Project {...todo} />
                <Project {...portSite} />
            </div>
        </div>
    )
}

export default Portfolio
