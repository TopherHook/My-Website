import Project from "./Project"
import calculator from '../images/calculator_image.png'
import toDo from '../images/To_Do_List_image.png'

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

const Portfolio = () => {
    return (
        <div>
            <h1 className="portTitle">Portfolio Projects</h1>
            <div className="projects">
                <Project {...calc} />
                <Project {...todo} />
            </div>
        </div>
    )
}

export default Portfolio
