import { Outlet, Navigate} from 'react-router-dom';


// Gives different layout depending on whether user is authenticated
const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ? (
      <Navigate to="/"/>
    ) : (
      <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>
      <img 
        src="/assets/images/tokyo-neon.jpg" 
        alt="Side image"
        className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
        style={{WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 70% , transparent)",}}
      />
      </>
    )}
    </>
  )
}

export default AuthLayout