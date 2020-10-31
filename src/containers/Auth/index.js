import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../store/actions';

class Auth extends Component {
  componentDidMount() {
    this.props.onAuth('meu_email@gmail.com', '123456')
  }

  render() {
    return <p>Auth...</p>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password))
  }
}

export default connect(null, mapDispatchToProps)(Auth);