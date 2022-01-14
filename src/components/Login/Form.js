import { Box } from '@material-ui/core';
import React, {useState} from 'react';
import Login from './Login';
import SignupSuccess from './SignupSuccess';

const Form = () => {
//to show submitted signup
const [signupSubmitted, setSignupSubmitted] = useState(false);
const submitForm = () => {
    setSignupSubmitted(true);
}
  return (
    <Box>
        {!signupSubmitted ? <Login submitForm={submitForm}/> : <SignupSuccess />}
    </Box>
  )
}

export default Form
