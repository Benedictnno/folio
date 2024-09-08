import BGV from "../images/hero-bg_my_portfolio.mp4";
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { FaArrowCircleDown } from "react-icons/fa";
import Projects from "../Components/Projects";
export default function Home() {
 const [text] = useTypewriter({
   words: [
     "Nnaoma Benedict",
     " a full stack Developer",
     "Programmer",
     
   ],
   loop: true,
 });
  return (
    <div className="w-fit h-[100vh] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={BGV}
        className="absolute max-sm:hidden right-0 bottom-0 z-[-1]  lg:px-10"
      ></video>
      <div className="absolute z-[2] flex flex-col justify-center items-center align-middle w-[100%] h-[100%]">
        <h3 className="text">
        
          Hi i'm {text} <Cursor />{" "}
        </h3>
        <p className="font-semibold mb-28 font-sans text-5xl">
          Quality web development synergy
        </p>
        <div className={"inline-flex"}>
          <FaArrowCircleDown size={40} />
        </div>

        <Projects/>
      </div>
    </div>
  );
}
