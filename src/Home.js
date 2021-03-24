import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

function Home(props) {
    const [formData,setFormData] = useState({
        username: '',
        password: ''
    })
    const history = useHistory();
    const [error,setError] = useState('');
    const handleChange = e => {
        e.preventDefault();        
        const { name,value } = e.target;
        if(value && value.length > 0) setError('');
        switch (name){
            case 'username':
                setFormData({...formData,username: value})
                return;
            case 'password':
                setFormData({...formData,password: value})
                return;
            default:
                return;
        }
    }
    function checkAdmin(data){
        if(data && data.length > 0 && data === 'admin') return true;
    }
    const handleSubmit = e => {
        e.preventDefault();
        let formInfo = {...formData}
        const { username,password } = formInfo;
        if(checkAdmin(username) && checkAdmin(password)) {
            history.push({
                pathname: '/welcome-user'
            })
        } else {
            if(!username || !password) return setError('Fields cannot be empty')
            setError('Username or Password are not admin,please try again')
        }
    }
    return (
        <div  className='home'>
            <div className='username'>
                <label for='username'>Username</label>
                <input required type='text' id='username' placeholder={'Type username here'} name='username' onChange={handleChange} />
            </div>
            <div className='password'>
                <label for='password'>Password</label>
                <input required type='password' id='password' placeholder={'Type password here'} name='password' onChange={handleChange} />
            </div>
            <div className='submit button'>
                <button type='button' onClick={handleSubmit}>Submit</button>
            </div>
            <div className='error'>
                {
                    error &&
                    <span>{error}</span>
                }
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home

// manish@kalanos.xyz

