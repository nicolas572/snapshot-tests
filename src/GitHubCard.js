import defaultImage from './default.jpeg';
import './App.css';
import Button from 'react-bootstrap/Button';

function GitHubCard () {
    return (
        <div className='GitCard'>
            <header className='GitCard-header'>
                <img src={defaultImage} alt='Big Bear Mountain'/>
                <h2>Love to code and snowboard!</h2>
                <Button variant="dark" href='https://github.com/nicolas572'>See My GitHub Profile!</Button>
            </header>
        </div>
    );}

export default GitHubCard