import React from "react";
import Layout from "@theme/Layout";
import Roadmap from "../components/Roadmap";


export default function RoadMap() {

  return (
    <Layout
      title={"RoadMap for Learning"}
      description="RoadMap for Learning"
    >
      <main>
        <div>
          <Roadmap />
        </div>
      </main>
    </Layout>
  );
}
