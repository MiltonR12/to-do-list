import { Formik } from 'formik'
import CustomCamp from '../components/CustomCamp'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import CustomError from '../components/CustomError'
import { RootState } from '../app/store'
import { schameForm } from '../utils/schemaValitation'

type Props = {
  isCreate: boolean
}

function FormTask({ isCreate }: Props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state: RootState) => state.task.tasks)
  const task = tasks.find((item) => item.id === params.id)

  if (!task && !isCreate) return <Navigate to='/' />

  return (
    <div className='mx-auto w-full max-w-md p-2' >
      <Formik
        initialValues={{
          title: isCreate ? "" : task?.title,
          description: isCreate ? "" : task?.description
        }}
        validationSchema={schameForm}
        onSubmit={(data) => {
          if (isCreate) {
            dispatch(addTask(data))
          } else {
            dispatch(updateTask({ ...data, id: task?.id }))
          }
          navigate("/")
        }}
      >
        {
          ({ handleSubmit, errors }) => (
            <form onSubmit={handleSubmit} >
              <div className='flex flex-col gap-5 border-2 border-cyan-300 rounded-md
              p-3 md:p-5' >
                <CustomCamp title='Titulo de la tarea' name='title' />
                {errors.title && <CustomError message={errors.title} />}
                <CustomCamp
                  title='Contendio de la tarea'
                  name='description'
                  textarea={true} />
                {errors.description && <CustomError message={errors.description} />}
                <div>
                  <button
                    type='submit'
                    className='px-4 py-2 bg-cyan-400 font-semibold rounded-lg'
                  >
                    {isCreate ? "Crear Tarea" : "Guardar Cambios"}
                  </button>
                </div>
              </div>
            </form>
          )
        }
      </Formik>
    </div>
  )
}

export default FormTask