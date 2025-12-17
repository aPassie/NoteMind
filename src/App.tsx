import './App.css'

function App() {
  return (
    <div className="loading-container">
      {/* Minimal morphing loader */}
      <div className="morph-loader">
        <div className="morph-circle"></div>
        <div className="morph-circle"></div>
        <div className="morph-circle"></div>
      </div>
    </div>
  )
}

export default App
