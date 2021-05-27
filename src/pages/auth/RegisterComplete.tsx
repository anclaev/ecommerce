import { useRef, useState, useEffect } from 'react'

import Toast from '../../components/Toast'

import { IRegisterComplete } from '../../types/components'

const RegisterComplete: React.FC<IRegisterComplete> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration') ?? 'null')
  }, [])

  const clickHandler = () => {
    if (password.length < 8) {
      Toast('Password cannot be less than 8 characters.', 'toast-error')
      return null
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
          Complete
        </button>
      </div>
    </div>
  )
}

export default RegisterComplete
