import { Field } from 'formik'

type Props = {
  title: string,
  type?: string,
  name: string,
  placeholder?: string,
  textarea?: boolean
}

function CustomCamp({ name, placeholder = "", title, type = "text", textarea = false }: Props) {
  return (
    <div className='flex flex-col gap-2' >
      <label className='text-cyan-400 text-xl font-semibold' >
        {title}
      </label>

      {
        textarea ? <Field
          className='bg-slate-900 px-3 py-1 text-white outline-none'
          name={name} as="textarea" placeholder={placeholder} /> : <Field
          className='bg-slate-900 px-3 py-1 text-white outline-none'
          name={name} type={type} placeholder={placeholder} />
      }
    </div>
  )
}

export default CustomCamp