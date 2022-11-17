import { useDispatch } from 'react-redux'
import loginService from '../services/loginService';
import { loginUser } from '../reducers/UserReducer';
import { useField } from '../hooks';
import { Button, Input } from '@mui/material';

const LoginForm = () => {
  const username = useField('text')
  const password = useField('password')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    loginService
      .login({
        username: username.fields.value,
        password: password.fields.value,
      })
      .then((user) => {
        dispatch(loginUser(user));
      })
  }

  return (
    <div>
      <h2>Log in to application</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <Input style={{ paddingLeft: 5 }} {...username.fields} />
        </div>
        <div>
          password
          <Input style={{ paddingLeft: 5 }} {...password.fields} />
        </div>
        <Button id="login-button" type="submit">
          login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm