
import { getDatabase, set, ref } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db,"users/ravish"),{
      id: 1,
      name: "ravish abbas",
      age: 29,
    })
  }
  return (
    <div className="App">
      <h1>AVC MA</h1>
      <button onClick={putData}>put data</button>
    </div>
  );
}

export default App;
