import "./App.css";
import Card from "./components/card";
import Form from "./components/form";
import database from "./components/database/db";
import styles from "./styles";

function App() {
  return (
    <div className="App px-6">
      <div className="flex flex-wrap">
        {database.map((element) => {
          return (
            <Card styles={styles} name={element.name} minsalary={element.minsalary} maxsalary={element.maxsalary} minexp={element.minexp} maxexp={element.maxexp} apply={element.extapply} buttoname={element.buttoname}/>
          )
        })}
      </div>
      <Form styles={styles}/>
    </div>
  );
}

export default App;
