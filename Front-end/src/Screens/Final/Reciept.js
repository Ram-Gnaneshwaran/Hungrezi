import React from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';

function Reciept() {
    const location = useLocation();
    const Total = location.state;

  return (
    <div>Reciept {Total}</div>
  )
}

export default Reciept