import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function TextForm(props) {
  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  // For adding the text to the textarea after the event is triggered for upper/lower case
  //Without this we can not add the text to the txetarea after the event is triggered
  const onChangeState = (event) => {
    setText(event.target.value);
  };

  const toLowCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const toEmpty = () => {
    const newText = "";
    setText(newText);
  };

  const toAlternateCase = () => {
    const splitText = text.toLowerCase().split("");
    console.log(splitText);
    for (let i = 0; i < splitText.length; i += 2) {
      splitText[i] = splitText[i].toUpperCase();
    }
    let finalSplitText = splitText.join("");
    setText(finalSplitText);
  };

  const toExtractEmail = () => {
    const splitText = text.split(" ");
    splitText.map((value) => {
      if (value.includes("@")) {
        alert(value);
      }
    });
  };

  const toTitleCase = () => {
    const splitText = text.split(" ");
    const finalText = splitText
      .map((str) => str[0].toUpperCase() + str.substring(1).toLowerCase())
      .join(" ");
    console.log(finalText);
    setText(finalText);
  };

  const toInverseCase = () => {
    const splitText = text.split("");
    const finlaText = splitText
      .map((value) => {
        if (value == value.toUpperCase()) {
          return value.toLowerCase();
        } else {
          return value.toUpperCase();
        }
      })
      .join("");
    setText(finlaText);
  };

  function wordCount() {
    let wordCount = text.split(" ").filter((element) => {
      return element.length !== 0;
    }).length;
    return wordCount;
  }

  /*...........................................
                    For Dark Mode
    .............................................*/
  //    const [modeText , setModeText] = useState("Enable Dark Mode");

  //     const [myStyle , setMyStyle] = useState({
  //         backgroundColor : 'white',
  //         color: 'black'
  //     });

  //     const darkMode = ()=>{
  //         if(myStyle.color === 'white'){
  //             setMyStyle({
  //                 color: 'black',
  //                 backgroundColor: 'white'
  //             })
  //             setModeText('Enable Dark Mode')
  //             console.log("hello dark")
  //         }   else{
  //             setMyStyle({
  //                 color: 'white',
  //                 backgroundColor: 'black'
  //             })
  //             setModeText("Enable Light Mode")
  //             console.log("hello light")
  //         }
  //         console.log("hello")
  //     }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        {/* <button type="submit" className="btn btn-primary mb-3 my-3" onClick={darkMode}>{modeText}</button> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="exampleFormControlTextarea1"
            onChange={onChangeState}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toUpCase}
          >
            Convert to UpperCase
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toLowCase}
          >
            Convert to LowerCase
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toEmpty}
          >
            Remove all Text
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toAlternateCase}
          >
            Alternate Text
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toExtractEmail}
          >
            Email Extractor
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toTitleCase}
          >
            Title Case
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-1"
            onClick={toInverseCase}
          >
            Inverse Case
          </button>
        </div>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Summary of Your Text</h2>

        <p>
          {wordCount()} words and {text.length} characters.
        </p>
        <p>
          {0.08 * text.split(" ").length} minutes are required to read this
          Paragraph.
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter Text",
};
