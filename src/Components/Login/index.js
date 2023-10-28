import { Component } from 'react';
import {
  Label,
  Input,
  LoginCon,
  LoginSubCon,
  Logo,
  Form,
  InputCon,
  ShowPassCon,
  Button,
  Err,
} from './StyledComponent';

class Login extends Component {
  state = {
    username: '',
    password: '',
    show: false,
    showErr: false,
  };

  submitCredentials = async (e) => {
    e.preventDefault();
    console.log('In Sumbit');
    console.log(this.username, this.password);
    if (this.state.username !== '' && this.state.password !== '') {
      console.log('In Sumbit1');
      // to API
    } else {
      console.log('In Sumbit 2');
      this.setState((prevState) => ({ showErr: !prevState.showErr }));
      console.log(this.state.showErr);
    }
  };

  render() {
    const { username, password, show, showErr } = this.state;
    console.log(showErr);
    return (
      <LoginCon>
        <LoginSubCon>
          <Logo
            src={
              'https://res.cloudinary.com/dywsrfqty/image/upload/v1698492046/ov6xlly2a3sh08y32jma.png'
            }
            alt="website logo"
          />
          <Form onSubmit={this.submitCredentials}>
            <InputCon className="input-con">
              <Label htmlFor="user">USERNAME</Label>
              <Input
                type="text"
                id="user"
                value={username}
                placeholder="Username"
                onChange={(e) => this.setState({ username: e.target.value })}
                onBlur={this.onBlurUsername}
              />
            </InputCon>
            <InputCon className="input-con">
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                type={show ? 'text' : 'password'}
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
                onBlur={this.onBlurPassword}
              />
            </InputCon>
            <ShowPassCon className="show-pass-con">
              <input
                type="checkbox"
                id="showPass"
                onChange={(e) => {
                  this.setState({ show: e.target.checked });
                }}
              />
              <Label htmlFor="showPass">Show Password</Label>
            </ShowPassCon>
            <Button type="submit">Login</Button>
          </Form>
          {showErr && <Err>*Please Enter All Details</Err>}
        </LoginSubCon>
      </LoginCon>
    );
  }
}

export default Login;
