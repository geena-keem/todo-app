import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">TO DO</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
