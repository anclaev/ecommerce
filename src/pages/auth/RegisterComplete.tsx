import { useState, useEffect } from 'react'
import { auth } from '../../firebase'

import Toast from '../../components/Toast'

import { IPropsWithHistory } from '../../types/components'

const RegisterComplete: React.FC<IPropsWithHistory> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    let currentEmail = window.localStorage.getItem('emailForRegistration')

    if (currentEmail) {
      setEmail(currentEmail)
    } else {
      Toast('Mail error, please try again.', 'toast-error')
      history.push('/reg')
    }
  }, [history])

  const clickHandler = async () => {
    if (password.length < 8) {
      Toast('Password cannot be less than 8 characters.', 'toast-error')
      return null
    }

    try {
      const res = await auth.signInWithEmailLink(email, window.location.href)

      if (res.user?.emailVerified) {
        window.localStorage.removeItem('emailForRegistration')
        let user = auth.currentUser

        await user?.updatePassword(password)
        //const idTokenResult = await user?.getIdTokenResult()

        // TODO: Redux store

        Toast('Registration completed successfully!', 'toast-success')
        history.push('/')
      }
    } catch (e) {
      setPassword('')
    }
  }

  return (
    <div className="container sign-up">
      <div className="col sign-up-form">
        <h4>Protect your account</h4>

        <div className="input-field mt3">
          <input type="text" value={email} disabled />
        </div>
        <div className="input-field mt3">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? clickHandler() : '')}
          />
          <label htmlFor="password">Your password</label>
        </div>
        <button onClick={clickHandler} className="btn">
          Complete registration
        </button>
      </div>
    </div>
  )
}

export default RegisterComplete
