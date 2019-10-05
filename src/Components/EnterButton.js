import React from 'react';
import './Enter.css';
import { withRouter } from 'react-router-dom'
import './CancelComand.css'

const EnterButton = ({ history }) => (
  <button
    type="button"
    onClick={() => history.push('/select')}
  >
    Enter
  </button>
);

export default withRouter(EnterButton);