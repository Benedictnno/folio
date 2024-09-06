import { useState } from "react";
export default function TopSection() {
  const [testNav, setTestNav] = useState(false);

  return (
    <section>
      {testNav && (
        <div className="tab" onClick={() => setTestNav(false)}>
          <span className="tab_text">
            open Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit unde rerum sequi? Laborum optio voluptatibus harum,
            provident laboriosam, excepturi exercitationem enim quibusdam
            consequuntur dolor amet perferendis ea officia aut nam?
          </span>
        </div>
      )}
    </section>
  );
}
