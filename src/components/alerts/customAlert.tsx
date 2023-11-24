import Sweet from 'sweetalert2'

export const deleteTaskAlert = () => {
  return Sweet.fire({
    title: "¿Estas seguro de eliminar esta tarea?",
    showCancelButton: true,
    confirmButtonText: "Elininar",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    background: "#101010",
    confirmButtonColor: "#ff0000"
  })
}