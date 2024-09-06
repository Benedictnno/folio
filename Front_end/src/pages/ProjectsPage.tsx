import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

function ProjectsPage() {
    const navigation = useNavigation()
  const dogUrl = useLoaderData();
  if (navigation.state === "loading") {
    return <h1>Loading...</h1>
  }
  return <div><img src={dogUrl as string} alt="" /></div>;
}

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};

export default ProjectsPage;
