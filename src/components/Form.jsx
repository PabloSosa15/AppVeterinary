import { useState, useEffect } from "react"; 
import Fixs from "./Fixs";

const Form = ({patients , setPatients, patient}) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [fixs, setFixs] = useState(false)

  useEffect(() => {
    if( Object.keys(patient).length > 0 ) {
    setName(patient.name)
    setOwner(patient.owner)
    setEmail(patient.email)
    setDate(patient.date)
    setSymptoms(patient.symptoms)
    } 
}, [patient])

  
  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
  
    return random + date
  }
  const handleSubmit =  (e) => {
    e.preventDefault();

    //Form Validation

    if ([name, owner, email, date, symptoms].includes('')) {  
      setFixs(true)
      return;
    } 
    setFixs(fixs)


    //Patient Obj
    const objPatient = {
      name,
      owner,
      email,
      date,
      symptoms,
    }

    if (patient.id) {
      // Editing the record
      objPatient.id = patient.id
      id: generateId()

      const patientsUpdated = patients.map(patientState => patientState.id === patient.id ? objPatient : patientState)

      setPatients(patientsUpdated)
      setPatients({})

    } else {
      //New registration
      objPatient.id = generateId();
      setPatients([...patients, objPatient]);
    }
      
    //Restart the form
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptoms('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Follow-Up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md roundex-lg py-10 px-5 mb-10">
        {fixs && <Fixs>All fields are required</Fixs>
        }
        <div className="mb-5">
          <label  htmlFor="pet" className="block text-gray-700 uppercase font-bold">Pet Name
          </label>

          <input
            id="pet"
            type="text"
            placeholder="Pet's name"
            className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label  htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner's Name
          </label>

          <input
            id="owner"
            type="text"
            placeholder="Owner's Name"
            className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
            value={owner}
            onChange={(e)=> setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label  htmlFor="email" className="block text-gray-700 uppercase font-bold">Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Owner's contact email"
            className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label  htmlFor="medical" className="block text-gray-700 uppercase font-bold">Medical discharge
          </label>

          <input
            id="medical"
            type="date"
            className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label  htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={(e)=> setSymptoms(e.target.value)}
          />
        </div>

        <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={ patient.id ? 'Edit Patient': 'Add Patient'}
        />
      </form>
    </div>
  )
}

export default Form
