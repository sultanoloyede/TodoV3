import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`

function App() {
  return (
    <TodoApp>
      <TodoList />
    </TodoApp>
  );
}

export default App;
