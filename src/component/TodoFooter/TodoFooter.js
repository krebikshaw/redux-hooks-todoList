import React from 'react';
import styled from 'styled-components';

const TodoFooterBar = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: lighter;
  color: #777;
  padding: 10px;
  & ul {
    display: flex;
    margin: 0;
    & li {
      a {
        color: #777;
        margin: 3px;
        padding: 3px 7px;
        border: 1px solid transparent;
        border-radius: 3px;
      }
      .selected {
        border: 0.5px solid rgba(175, 47, 47, 0.2);
      }
    } 
  }
  & button {
    margin-right: 5px;
    color: #777;
  }
`;

const TodoCount = styled.div`
  display: flex;
  align-items: center;
  font-weight: lighter;
  color: $lightColor_02;
  margin-left: 20px;

  & strong {
    margin: 5px;
    font-weight: lighter;
  }

  & p {
    margin: 0;
  }
`;

const TodoFooter = ({ calc, handleChangeFilt, handleClearComplete }) => {
  return (
    <TodoFooterBar>
      <TodoCount>
        <strong>{calc.active}</strong>
        <p>items left</p>
      </TodoCount>
      <ul>
        <li onClick={() => { handleChangeFilt('all') }}>
          <a>All</a>
        </li>
        <li onClick={() => { handleChangeFilt('active') }}>
          <a>Active</a>
        </li>
        <li onClick={() => { handleChangeFilt('complete') }}>
          <a>Completed</a>
        </li>
      </ul>
      <button onClick={ handleClearComplete }>Clear completed</button>
    </TodoFooterBar>
  )
}

export default TodoFooter;