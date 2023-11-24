import FormTask from '../components/FormTask'

function UpdatePage() {

  return (
    <section className='bg-slate-950 h-screen flex flex-col items-center justify-center' >
      <h2 className='text-center text-4xl font-semibold text-white py-3' >
        Actualizar la tarea
      </h2>
      <FormTask isCreate={false} />
    </section>
  )
}

export default UpdatePage