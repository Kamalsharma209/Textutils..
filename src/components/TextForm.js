import React,{useState} from 'react'
export default function TextForm(props){
    const handleupclick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase:","Success");
    }
    const handleloclick =()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase:","Success");
     }
     const handleclearclick =()=>{
      console.log("lowercase was clicked" + text);
      let newText = " ";
      setText(newText)
      props.showAlert("Text cleared:","Success");

   }
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Converted to Capitilised:","Success");
}
  //Global declaration:
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
  countCons = 0;

// Function to count Vowels:

const handleVoClick = () => {
   for (count = 0; count <= text.length; count++) {
     if (text.charAt(count).match(/[aeiouAEIOU]/)) {
       countChar++;
       setCount (countChar);
       props.showAlert("Number of Vowels are given below","Success");
     }
   }
   // console.log("No. of Vowels are: " + countChar);
 };

// Function to count Consonants:
 const handleCoClick = () => {
   for (count1 = 0; count1 <= text.length; count1++) {
     if (
       text
         .charAt(count1)
         .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
     ) {
       countCons++;
       setCount1(countCons);
       props.showAlert("Number of Consonants are given below","Success");
       
       
     }
   }}

   const handlecopy =()=>{
    console.log("i am copy");
    var text = document.getElementById("my box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard","Success");
    
   }
   const handleExtraSpaces =() =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed","Success");
   }
    const handleonchange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

const [text, setText] = useState("");
const [myStyle , setMyStyle] = useState({
  Color:  "white",
  BackGround:  "black"
})
  
  return (
    <>
    <div className='container'style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>Enter the text to analyze</h1>
<div className="mb-3" style={myStyle}>
  <textarea className="form-control" value={text} onChange={handleonchange} id="my box" rows="8" style={{backgroundColor: props.mode === 'dark'?'#042743':'white', 
    color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary " onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to Lowercase</button>
<button onClick={handleCapitalize} className="btn btn-primary mx-1 primary">Capaitilise</button>
<button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Spaces</button>
<button className="btn btn-success mx-1 " onClick={handlecopy}>Copy</button>
<button className="btn btn-danger mx-1" onClick={handleclearclick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleVoClick}>Count no. of Vowels</button>
<button className="btn btn-primary mx-1" onClick={handleCoClick}>Count no. of Consonants</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 ">Speak</button>
    </div>
    <div className='conatiner my-2' style={{color:props.mode === 'dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((Element)=>{return Element.length!=0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <p>{text === ""? text.trim().split(".").filter((text) => text !== "").length: text.split(".").length - 1} No. of entences</p>
      <h3>Vowels and Consonants:</h3>
    <p>{count} No. of Vowels</p>
    <p>{count1} No. of Consonants</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something in the textbox above to preview it'}</p>

    </div>
    </>
  )
}
