import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const [ displayValue, setDsiplayValue ] = useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C')
    {
      setDsiplayValue("");
    }else if(buttonText==='=')
    {
      const resuslt  = eval(displayValue);
      setDsiplayValue(resuslt);

    }else{
      const printValue = displayValue+buttonText;
      setDsiplayValue(printValue);
    }

  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={displayValue}></Display>
      <ButtonContainer
        onButtonClick={onButtonClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
