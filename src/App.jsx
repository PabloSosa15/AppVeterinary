import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListingPatient from "./components/ListingPatient"

function App() {
  const [patients, setPatients] = useState(() => JSON.parse(localStorage.getItem('patients')) || []);  const [patient, setPatient] = useState({})

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const patientUpdated = patients.filter(patient => patient.id !== id);
    setPatients(patientUpdated)
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatients}
        />
        <ListingPatient
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>

    </div>
  )
}

export default App
