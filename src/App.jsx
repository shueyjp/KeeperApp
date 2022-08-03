import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note";

function App() {
  Note.title = "Hello";
  return (
    <div>
      <Header />
      <Note title="New Note" note="This is a note." />
      <Footer />
    </div>
  );
}

export default App;
