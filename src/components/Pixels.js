// Takes in the red, green and blue colours as props and set as

const Pixels = ({ red, green, blue }) => {
  return (
    <canvas
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        width: 1,
        height: 1,
      }}
    ></canvas>
  );
};

export default Pixels;
