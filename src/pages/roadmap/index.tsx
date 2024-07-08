import React from "react";
import Layout from "@theme/Layout";
import Roadmaps from "../../components/Roadmap";


export default function RoadMap() {

  return (
    <Layout
      title={"RoadMap for Learning"}
      description="RoadMap for Learning"
    >
      <main>
          <Roadmaps />
      </main>
    </Layout>
  );
}
