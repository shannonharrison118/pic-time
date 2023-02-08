import './App.css';
import React, { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <header class="header">hiiii its me in digital form</header>
      <div class="body">
        <div class="box"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <div class="my-melody" data-url="me-and-melody.png">
            <pre>   ⌒ </pre>
            <pre> /        \   ⌒</pre>
            <pre>|    |     /    ヽ</pre>
            <pre> (⌒ｖ⌒)|/ |     |</pre>
            <pre>  {'>'} ○ {'<'}    ヽ___/</pre>
            <pre>  (＿人＿)　　   　＼</pre>
            <pre> |　  ／￣￣￣＼    ｜</pre>
            <pre> ヽ( ●   ｏ   ● )ﾉ</pre>
            <pre>      ＞―亠―＜</pre>
            <pre>      ＼_ノヽ_／ </pre>
          </div>
          {isShown && (
            <p>me and my melody have the same birthday<br></br><small>(jan 18)</small></p>
          )}
        </div>
          <div class="box" >
            <div id="checker"> 
              <p>heyyyy</p>
            </div>
          </div>
          <div class="box">
            <p>help! i put myself into the web</p>
          </div>
          <div class="box"><div id="checker"><p>hi</p></div></div>
          <div class="box"><p>testinggggg</p></div>
          <div class="box"><div id="checker"><p>seeing something</p></div></div>
          <div class="box"><p>hmmm working good</p></div>
      </div>
    </div>
  );
}

export default App;
