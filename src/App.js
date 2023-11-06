import React from "react";

// components
import Library from "./components/Library";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Library />
      </Layout>
    </div>
  );
};

export default App;
