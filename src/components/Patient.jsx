import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const patient = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, email, date, symptoms, id } = patient
  
  const hanldleDelete = () =>{
    Swal.fire({
        title: 'Are you sure to delete?',
        text: "You cannot reverse this action!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deletePatient(id);  //llamar el prop y enviar el id
            Swal.fire(
            'Deleted!',
            'Your appointment has been deleted.',
            'success'
            )
        }
    })
}
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 roundex-xl">
          
    <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
      <span className="font-normal normal-case">{name}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
      <span className="font-normal normal-case">{owner}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
      <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Medical discharge: {''}
      <span className="font-normal normal-case">{date}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      
      <div className="flex justify-between mt-10">
        <button type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>
        <button type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={(hanldleDelete)}
        >
          Delete
        </button>
      </div>
  </div>
  )
}

export default patient
