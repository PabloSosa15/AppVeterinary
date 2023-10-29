import Patient from "./Patient"

const ListingPatient = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:2/5 md:h-screen" >

      {patients && patients.length ? (
        <>
      <h2 className="font-black text-3xl text-center">Patient List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
      You Manage Your {''}
        <span className="text-indigno-600 font-bold">Patients and Appointments</span>
      </p>

      {patients.map( patient => (
        <Patient
          key={patient.id}
          patient={patient}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
    ))}
        </>
      ) : (
      <>
        <h2 className="font-black text-3xl text-center">No Patients</h2>
        <p className="text-xl mt-5 mb-10 text-center">
        Start adding patients {''}
        <span className="text-indigo-600 font-bold">and will appear in this place</span>
        </p>
      </>
    )}
    </div>
  )
}

export default ListingPatient
