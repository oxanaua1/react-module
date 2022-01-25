import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";


function App() {
    // (1)
  const [trigger, setTrigger] = useState(null);

//(2) ф-я щоб знати чи була натиснена кнопка сейв чи ні, щоб оновити car/ф-я приймає дата і передаємо
// її в форму  через ф-ю  <Form update={update}/>
  const update = (data) => {
    setTrigger(data)
  }

//(5) оновлений і записаний трігер передаємо в Cars  <Cars trigger={trigger}/>

  return (
      <div>
        <Form update={update}/>
        <Cars trigger={trigger}/>


      </div>
  );
}

export default App;
