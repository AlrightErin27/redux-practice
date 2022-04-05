import Character from "./components/Character";
import { useEffect, useState } from "react";

function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((r) => r.json())
      //.then((data) => console.log(data))
      .then(setChars)
      .catch((catchError) => console.log("👹", catchError));
  }, []);
  //console.log("✨", chars);

  const renderChars = chars.map((char) => {
    return <Character key={char.id} char={char} />;
  });

  return <div className="App">{renderChars}</div>;
}

export default App;
