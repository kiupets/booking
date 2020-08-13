import React, { useState } from 'react'
import CustomButton from './custom-button/CustomButton'
import FormInput from './form-input/FormInput'

const CheckIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {}
  return (
    <div style={{}}>
      <div className="title">
        <h1>Reserva Para:</h1>
        {/* <span>Sign In with your email and password</span> */}
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={(e) => setEmail(e.target.value)}
          name="Email"
          type="Email"
          value={email}
          label="Email"
          required
        />

        <FormInput
          handleChange={(e) => setPassword(e.target.value)}
          name="Password"
          type="Password"
          value={password}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">CheckIn</CustomButton>
          {/* <CustomButton onClick={() => {}}>Sign In with Google</CustomButton> */}
        </div>
      </form>
    </div>
  )
}

export default CheckIn
