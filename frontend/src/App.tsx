import './App.css'
import Card from './Card';
import logo from './assets/JR.png'
function App() {
  return (
    <main>
      <img src={logo} alt="App logo" />
      <h1>JohnMichael Ross</h1>

      <Card title="About Me">
        <p>
        Hello! I am a Computer Science major with minors in cybersecurity 
        and game development and design. I enjoy delving into other worlds, whether it be
        through music, games, or reading. My hope in my career is that I can make a
        difference someday by doing something that has meaning. 
        </p>
      </Card>

      <Card title="Senior Capstone Production Platform">
        <p>
          This site will present my software projects, engineering decisions,
          and production systems.
        </p>
      </Card>

    </main>
  )
}

export default App
