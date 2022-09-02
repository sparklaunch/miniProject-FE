import { RegisterContainer, FormContainer, Logo, Form, FormField, LoginLink } from './styles';
import logo from '../../image/mainlogo.png';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { v4 as uuidV4 } from 'uuid';

const Register = () => {
  const [email, setEmail, resetEmail] = useInput();
  const [password, setPassword, resetPassword] = useInput();
  const [passwordConfirmation, setPasswordConfirmation, resetPasswordConfirmation] = useInput();
  const [username, setUsername, resetUsername] = useInput();
  const [introduction, setIntroduction, resetIntroduction] = useInput();
  const register = () => {};
  return (
    <RegisterContainer>
      <FormContainer>
        <Logo>
          <img src={logo} alt='Logo' />
        </Logo>
        <Form>
          <FormField>
            <input type='email' placeholder={'이메일'} required value={email} onChange={setEmail} />
            <button>중복확인</button>
          </FormField>
          <FormField>
            <input type='password' placeholder={'비밀번호'} required value={password} onChange={setPassword} />
          </FormField>
          <FormField>
            <input type='password' placeholder={'비밀번호 확인'} required value={passwordConfirmation} onChange={setPasswordConfirmation} />
          </FormField>
          <FormField>
            <input type='text' placeholder={'이름'} required value={username} onChange={setUsername} />
          </FormField>
          <FormField>
            <textarea placeholder={'자기소개'} value={introduction} onChange={setIntroduction} />
          </FormField>
        </Form>
        <LoginLink>
          <Link to={'/login'}>
            <p>이미 도토리이신가요?</p>
          </Link>
        </LoginLink>
        <button onClick={register}>도토리되기</button>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
