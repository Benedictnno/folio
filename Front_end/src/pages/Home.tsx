import BGV from "../images/hero-bg_my_portfolio.mp4";
export default function Home() {
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
      <div className="absolute bottom-1/2 z-[2] flex flex-col justify-center items-center align-middle w-[100%]">
        <h3 className="text">Nnaoma Benedict</h3>
        <h1>Fullstack Web Developer</h1>
        <p>Quality web development synergy</p>
      </div>
    </div>
  );
}
