import './App.css'
import Card from './Card';
import logo from './assets/JR.png'

type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
}


function App() {

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  }


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

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <p>{sampleReport.text} ({sampleReport.kind})</p>
      </section>


    </main>
  )
}

export default App
