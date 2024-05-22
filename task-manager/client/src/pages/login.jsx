import React from "react";
import {useForm} from "react -hook-form"

const login= ()=> {
  const user = " ";
  const{ 
    register, 
    handleSubmit, 
    formState: {errors},
  } = useform();
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]); 
  return(
   <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]"> 
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center" >
        {/*left side*/} 
        <div className="n-full w-full lg:w-2/3 flex flex-col item-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col item-center justify-center gap-5 md: gap-y-10 2xl: -mt-20">
            <span className="Flex gap1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600"> Manaage  all your task in one place !</span>
          </div>
        </div>
        {/*right side*/}
        <div>

        </div>
      </div>
   </div>
  )
}

export default login