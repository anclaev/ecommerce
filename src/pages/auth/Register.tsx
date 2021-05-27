import { useRef, useState } from 'react'
import { auth } from '../../firebase'

import Toast from '../../components/Toast'

import { IPropsWithHistory } from '../../types/components'
import { genPassword } from '../../functions'

const Register: React.FC<IPropsWithHistory> = ({ history }) => {
  const [email, setEmail] = useState('')
  const input = useRef<HTMLInputElement>(null)

  const registerHandler = async () => {
    const valid = input.current?.classList.contains('valid')

    if (!valid || email === '') return null

    try {
      await auth.createUserWithEmailAndPassword(email, genPassword(12))

      try {
        await auth.sendSignInLinkToEmail(email, {
          url: process.env.REACT_APP_REGISTER_REDIRECT_URL ?? '/',
          handleCodeInApp: true,
        })

        Toast(`Email is send to ${email}`, 'toast-success')

        window.localStorage.setItem('emailForRegistration', email)
        setEmail('')

        history.push('/')
      } catch (e) {
        Toast(e.message, 'toast-error')
      }
    } catch (e) {
      Toast(e.message, 'toast-error')
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
