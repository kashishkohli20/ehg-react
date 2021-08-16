import { useEffect, useState } from "react";
import Pixels from "./components/Pixels";

const App = () => {
  // using the state for storing the array.
  const [arr, setArr] = useState([]);
  const random_num = () => {
    // maximum is 32 and minimum is 1
    return Math.floor((Math.random() * (33 - 1) + 1) * 8);
  };

  // generate colors at the start
  // taking a set to save distinct values
  // running the loop till the size of the set is 32768
  // to get all the distinct pixel colors
  useEffect(() => {
    const colors = new Set();

    const random_rgb_gen = () => {
      return `${random_num()},${random_num()},${random_num()}`;
    };

    const random_rgb = () => {
      while (colors.size < 32768) {
        var rgb_random = random_rgb_gen();
        colors.add(rgb_random);
      }
    };

    random_rgb();

    setArr(Array.from(colors));
  }, []);

  // after all the colours are generated, here sorting the colors
  // to give something visual good.
  arr.sort();

  return (
    <div>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Canvas Image
      </p>
      <div
        style={{
          maxWidth: 256,
          display: "flex",
          flexWrap: "wrap",
          padding: 20,
          transform: "rotate(90deg)",
        }}
      >
        {arr.length > 0 &&
          // splitting the red, green and blue colors and passing as props to Pixels component.
          arr.map((val, i) => {
            const red = val.split(",")[0];
            const green = val.split(",")[1];
            const blue = val.split(",")[2];
            return <Pixels key={i} red={red} green={green} blue={blue} />;
          })}
      </div>
    </div>
  );
};

export default App;
