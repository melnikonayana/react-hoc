import React from 'react';
import './App.css';
import TaskHeader from './TaskHeader';
import VideoApp from './time/VideoApp';
import VideoAndArticleApp from './highlight/VideoAndArticleApp';

function App() {
  return (<React.Fragment>
    <div className="task-1">
      <TaskHeader title="Задача 1" />
      <VideoApp />
    </div>
    <div className="task-2">
      <TaskHeader title="Задача 2" />
      <VideoAndArticleApp />
    </div>
  </React.Fragment>);
}

export default App;
