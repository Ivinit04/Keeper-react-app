import React from "react";

function CreateArea(props) {
  const [inputText, setInputText] = React.useState({
    title: "",
    content: ""
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setInputText((prevInput) => {
      return {
        ...prevInput,
        //this will interpret as you want to create new key value pair and consider inputName as a string
        // inputName: inputValue
        //This is how javascript set object key by variable
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button
          type="button" //to prevent default behaviour (refresh) of form
          onClick={() => {
            props.onAdd(inputText); //passing an object
            setInputText({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
