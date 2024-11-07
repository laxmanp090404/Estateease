import Navbar from './components/navbar/Navbar'
import './layout.scss'
import Home from './routes/home/home'
function App() {


  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="body">
        <Home/>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
