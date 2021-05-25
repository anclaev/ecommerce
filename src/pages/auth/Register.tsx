import { useRef, useState } from 'react'
import { toast } from 'materialize-css'
import { auth } from '../../firebase'
import { useForm } from 'antd/lib/form/Form'

const Register = () => {
  const [email, setEmail] = useState('')
  const input = useRef<HTMLInputElement>(null)

  const registerHandler = async () => {
    const valid = input.current?.classList.contains('valid')

    if (!valid || email === '') return null

    try {
      await auth.sendSignInLinkToEmail(email, {
        url: 'http://localhost:3000/reg/success',
        handleCodeInApp: true,
      })

      toast({
        html: `Email is send to ${email}.`,
      })

      window.localStorage.setItem('emailForRegistration', email)
      setEmail('')
    } catch (e) {
      toast({ html: 'Something went wrong. Try later.' })
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
