import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App() {
  const [noteItems, setNoteItems] = React.useState([]);

  function addNoteItem(inputText) {
    setNoteItems((prevItems) => {
      return [...prevItems, inputText]; //array of objects
    });
  }

  function deleteNoteItem(id) {
    setNoteItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNoteItem} />
     
      {noteItems.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNoteItem}
          />
        );
      })}
      
      <Footer />
    </div>
  );
}

export default App;
