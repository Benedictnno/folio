import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage, { dataLoader } from "./pages/ProjectsPage";
import { IoIosMenu } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function App() {
  
  // const handleChange = async (e: any) => {
  //   e.preventDefault();
  //   const res = await axios.post("http://localhost:5000/api/v1/login", {
  //     name,
  //     password,
  //   });
  //   const myCookie = Cookies.get("token");
  //   console.log(res, myCookie);
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route
          path="/projects"
          element={<ProjectsPage />}
          loader={dataLoader}
        />
      </Route>
    )
  );

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}


const Root = () => {
  return (
    <>
      <nav>
        <div className="mt-8 max-sm:hidden fixed top-0 bg-[#FFFFFF] left-0 right-0 shadow-lg mx-24 rounded-2xl border-red flex flex-row border-solid border-0 p-3">
          <Link to={"/"} className="basis-1/4 font-medium font-sans italic text-lg ">
            Nnaoma Benedict
            
          </Link>

          <div className="basis-1/3  grid grid-flow-col gap-2">
            <Link to={"/projects"} className="hover:bg-[#f7f7fa] text-center px-3 rounded cursor-pointer" >Projects</Link>
            <Link to={"Skill set"}>Skill Set</Link>
            <Link to={"about"}>About me</Link>
            <Link
              to={"/contact"}
              className="bg-[#f7f7fa] flex justify-center items-center px-3 rounded"
            >
              <p>Contact</p>
              <FiArrowUpRight />
            </Link>
          </div>

          <div className=" flex basis-1/2 justify-end gap-4">
            <p>Download Resume</p>
            <FaGithub size={25} />
            {/* <p>menu</p> */}
          </div>
        </div>

        {/* small screens */}

        <div className=" lg:hidden flex justify-between my-3 mx-2">
          <Link to={"/"} className=" ">
            Nnaoma Benedict
          </Link>
          <IoIosMenu />
        </div>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
export default App;
