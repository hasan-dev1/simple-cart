
import { useContext } from 'react';
import './App.css';
import { AllState } from './Components/StateManagement/StateManagement';

function App() {
  const {loading, homeData} = useContext(AllState)
  console.log(loading, homeData)
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-sky-500 bgimg  lg:w-4/5 w-full lg:mx-auto mx-6 lg:h-[80vh] rounded grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 relative lg:text-inherit text-center ">
        {loading ? (
          <div>Loading...</div>
        ) : (
          homeData?.map((item, idx) => (
            <div
              data-aos={`${item.glassmorphisomanim}`}
              data-aos-duration={`${item.glassmorphisomduration}`}
              key={idx}
              className={`w-full h-full  rounded place-content-between  lg:py-0  py-6 lg:flex  
              ${item.classname === "lefttop" && "lg:text-start cardgreen"}
              ${item.classname === "righttop" && "justify-end item-start cardyellow "}
              ${item.classname === "leftbottom" && "justify-start items-end cardorange "}
              ${item.classname === "rightbottom" && "justify-end items-end cardred "}
               ${
                item.id === 5 &&
                "lg:absolute lg:top-1/2 lg:left-1/2 justify-center lg:bg-sky-500/75 card bg-sky-800  items-center lg:-translate-y-1/2 lg:-translate-x-1/2 lg:w-1/2 lg:h-1/2 "
              } `}
            >
              <span className="text-4xl text-white  m-12">{item.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
