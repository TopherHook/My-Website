

const Project = ({ image, title, lang, desc }) => {

    return (
        <div className="card" >
            <h2>{title}</h2>
            <h5 className='langs'>{lang}</h5>
            <div className='cardImage'>
                <img  src={image} alt='project' />
            </div>
            <p className="description">{desc}</p>
        </div>
    )
}

export default Project
