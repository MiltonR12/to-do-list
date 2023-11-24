import { RootState } from '../app/store'
import ButtonCreateTask from '../components/ButtonCreateTask'
import TaskBar from '../components/TaskBar'
import { useSelector } from 'react-redux'
import TaskShow from '../components/TaskShow'

function HomePage() {

  const tasks = useSelector((state: RootState) => state.task)

  return (
    <main className='bg-slate-950 text-white max-w-6xl mx-auto relative' >
      <div className='flex' >
        <TaskBar />
        <TaskShow idVisible={tasks.taskVisible} tasks={tasks.tasks} />
      </div>
      <ButtonCreateTask />
    </main>
  )
}

export default HomePage