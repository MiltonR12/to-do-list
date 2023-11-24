import { FaRegUserCircle } from "react-icons/fa";

function Welcom() {
  return (
    <div className="text-5xl flex flex-col items-center justify-center h-full font-semibold
    text-cyan-400 select-none" >
      <span className="text-9xl" >
        <FaRegUserCircle />
      </span>
      <h4>
        Bienvenido
      </h4>
    </div>
  )
}

export default Welcom