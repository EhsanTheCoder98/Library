import React from "react";

// components
import Layout from "./components/Layout";
import Book from "./components/Book";

const App = () => {
  return (
    <div>
      <Layout>
        <Book />
      </Layout>
    </div>
  );
};

export default App;
