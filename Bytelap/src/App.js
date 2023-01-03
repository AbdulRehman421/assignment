
import { useState } from 'react';
import './App.css';

function App() {
  const navItems = ["Home", 'Dropdown', 'Logout']
  const [showNav, setShowNav] = useState(true)
  const handleClick = () => {
    setShowNav(prev => !prev)
  }
  return (
    <section className="App">
      <header>
        {showNav ? <ul>
          {
            navItems.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))
          }
          <i className="fa-solid fa-xmark" onClick={handleClick}></i>
        </ul>
          : <i className="fa-solid fa-bars" onClick={handleClick}></i>
        }

      </header>
      <main>
        <input type="text" placeholder='Search' />
        <div className='filterDrop'>
          <h4>Dropdown</h4>
          <h4>Filter 1</h4>
          <h4>Filter 2</h4>
          <h4>Filter 3</h4>
          <h4>Dropdown 2</h4>
        </div>
        <div>
          <div className='cards'>
            <h2 className="labels">
              One
            </h2>
          </div>
          <div className='cards'>
            <h2 className="labels">
              Two
            </h2>
          </div>
          <div className='cards'>
            <h2 className="labels">
              Three
            </h2>
          </div>

        </div>
      </main>
    </section>
  );
}

export default App;
