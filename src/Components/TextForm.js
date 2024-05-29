import React, { useState } from 'react';

export default function TexthtmlhtmlForm(props) {
  const [text, setText] = useState('hello');
  const [count, setCount] = useState(0);
  const [myStyle, setStyle] = useState({
    background: 'white '
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const upper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('Converted to UpperCase', 'success');
    const timeout = setTimeout(() => {
      setCount(count + 1);
      props.setAlert(null);
    }, 3000);
  };
  const lower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('Converted to Lower', 'success');
    const timeout = setTimeout(() => {
      setCount(count + 1);
      props.setAlert(null);
    }, 3000);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showalert('Content Cleared', 'success');
    const timeout = setTimeout(() => {
      setCount(count + 1);
      props.setAlert(null);
    }, 3000);
  };

  const toggleVioletMode = () => {
    if (myStyle.background === 'violet') {
      setStyle({ background: 'white' });
    } else {
      setStyle({ background: 'violet' });
    }
  };
  

  return (
    <><div className='full' style={myStyle}>
            <div className="mb-3" >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.txt}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange} style={myStyle}></textarea>
      </div>
      <div className='hey'>
        <button className='mybtn' onClick={upper}>Convert to UPPERCASE</button>
        <button className='mybtn' onClick={lower}>Convert to LOWERCASE</button>
        <button className='mybtn' onClick={clear}>Clear</button>
      </div>
      <div className="hey">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter(word => word !== "").length} Words, {text.length} Characters
        </p>
      </div>
    
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" onChange={toggleVioletMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Violet Mode</label>
      </div>
      </div>
    </>
  );
}
