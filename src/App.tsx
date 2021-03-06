import React, {useRef} from 'react';
import Editor from './Editor';

import logo from './logo.svg';
import './App.scss';

function App() {
  const editor = useRef<any>(null);

  const onSaveClick = async () => {
    if (editor.current) {
      const { current: editorRef} = editor;
      const data = await editorRef.save();
      console.log(data);
    }
  }

  return (
    <div>
      <div>
        <Editor instanceRef={editor} />
      </div>
      {/* <div>
        <input type="button" onClick={onSaveClick} value="Save" />
      </div> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
