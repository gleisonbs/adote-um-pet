import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import * as actions from '../../../store/actions';

class SignIn extends Component {
  submitHandler = (event) => {
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    this.props.onAuth(email, password);
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            {/* <Image src='/logo.png' /> Log-in to your account */}
          </Header>
          <Form size="large" onSubmit={this.submitHandler}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="name"
                iconPosition="left"
                placeholder="Nome"
                name="name"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail"
                name="email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Senha"
                type="password"
                name="password"
              />
              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Primeiro acesso? <a href="#">Registre-se</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
