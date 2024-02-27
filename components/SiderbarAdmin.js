import Image from "next/image"

const Sidebar = () => {
    const {categorias} = useQuiosco()
  return (
   <>

     <Image width={300} height={100} src="/assets/img/logo.svg"
     alt="imagen logo" />

     <nav className="mt-10">
     <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        Ordenes no completadas
      </button>
       
     </nav>
   
   </>
 )
}

export default Sidebar