import { useState } from 'react'; // Importing useState hook from React library for managing state
import './App.css'; // Importing CSS file for styling

function App() {
  const [Link, setLink] = useState(""); // Declaring state variable 'Link' and its setter function 'setLink' using useState hook, initial value is an empty string
  const [rem, setRem] = useState(""); // Declaring state variable 'rem' and its setter function 'setRem' using useState hook, initial value is an empty string

  return (
    <>
      <div className="centered-box"> {/* Opening div with class name 'centered-box' for styling */}
        <input 
          type="text" 
          placeholder="Enter the link here" 
          value={Link} // Binding input value to state variable 'Link'
          onChange={(e) => setLink(e.target.value)} // Setting state variable 'Link' to the value entered in the input field
        />
        <br />
        <button onClick={() => {}}>Enter</button> {/* Button with onClick event handler, currently empty */}
        <br />
        <input 
          type="text" 
          placeholder="" 
          value={rem} // Binding input value to state variable 'rem'
          onChange={(e) => setRem(e.target.value)} // Setting state variable 'rem' to the value entered in the input field
        />
      </div>
    </>
  );
}

export default App; // Exporting the App component as default

