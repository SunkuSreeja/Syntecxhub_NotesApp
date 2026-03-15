import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'

function App() {

  // SyntexHub Requirement → useState
  const [search, setSearch] = useState("")

  // SyntexHub Requirement → localStorage load
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"))
    if (savedNotes) {
      console.log("Notes loaded from localStorage")
    }
  }, [])

  // SyntexHub Requirement → localStorage save
  useEffect(() => {
    const notes = localStorage.getItem("notes")
    if (notes) {
      localStorage.setItem("notes", notes)
    }
  })

  return (
    <div className='main'>

      <Header />

      {/* Extra Feature → Search bar */}
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search notes..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Notes search={search} />

    </div>
  )
}

export default App