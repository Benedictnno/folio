import { useQuery } from "@tanstack/react-query";
function Projects() {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(
        (res) => res.json()
      ),
  });console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <section>
      <div>
        <h1>Projects</h1>
        <p>i have a proven track record of my own product</p>
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default Projects;
