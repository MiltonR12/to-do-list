import FormTask from "../components/FormTask"


function CreatePage() {

  return (
    <section className='bg-slate-950 h-screen flex flex-col items-center justify-center' >
      <h2 className='text-center text-4xl font-semibold text-white py-3' >
        Crear Nueva Tarea
      </h2>
      <FormTask isCreate={true} />
    </section>
  )
}

export default CreatePage