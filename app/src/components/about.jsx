/* eslint-disable react/no-unescaped-entities */
import './main.css'
import me from '/Moi.jpg'

function About() {
    return (
        <div className='section'>
            <h1 className='subTitle'>About me</h1>
                    <img src={me} alt="my pic" className='pic' />
                    <p className='content'>I'm Dieudonne, a frontend designer passionate about creating clean, user-friendly interfaces.
                        My main focus is on crafting responsive and visually appealing web experiences.
                        While my expertise lies in frontend development, I also work on backend projects, ensuring seamless integration and functionality.
                        I'm always excited to take on new challenges and continue growing in the world of web development.
            </p>
            <button className='btn'>Resume</button>
        </div>
    )
}

export default About