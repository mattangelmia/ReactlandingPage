import React from 'react';
import ReactLogo from './images/react-logo.svg'

export default function MainContent() {
  return <div className="main-content">
      <div className="main-content-first">
<h1>Say hello to <br/>ReactJS</h1>
<img  src={ReactLogo} alt="react logo"/>

</div>
<p>You will learn how to use</p>
<p>the most popular fronteend library</p>
<p>and become a super Ninja developer</p>

<button>Awesome!</button>

  </div>;
}
