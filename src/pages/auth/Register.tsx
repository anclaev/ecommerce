import { useRef, useState } from 'react'
import { auth } from '../../firebase'
import Toast from '../../components/Toast'

const Register = () => {
  const [email, setEmail] = useState('')
  const input = useRef<HTMLInputElement>(null)

  const registerHandler = async () => {
    const valid = input.current?.classList.contains('valid')
    Toast('Click!')
    if (!valid || email === '') return null

    try {
      await auth.sendSignInLinkToEmail(email, {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL ?? '/',
        handleCodeInApp: true,
      })

      Toast(`Email is send to ${email}.`)

      window.localStorage.setItem('emailForRegistration', email)
      setEmail('')
    } catch (e) {
      Toast('Something went wrong. Try later.')
    }
  }

  return (
    <div className="container sign-up">
      <div className="col sign-up-form">
        <h4>Sign Up</h4>
        <div className="input-field">
          <input
            ref={input}
            type="email"
            id="email"
            value={email}
            className="validate"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            onKeyPress={(e) => (e.key === 'Enter' ? registerHandler() : '')}
          />
          <label htmlFor="email">Your email</label>
        </div>
        <button onClick={registerHandler} className="btn">
          Join us
        </button>
      </div>
    </div>
  )
}

export default Register
