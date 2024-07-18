function BgSelecter({ changeri }) {
  return (
    <div class="color">
      <p className="is-underlined">Choose Background Color:</p>
      <div >
      
        <button
          onClick={changeri}
          style={{
            backgroundColor: "skyblue",
            height: 20,
            width: 20,
            borderRadius: "50%",
            marginRight: 20,
            border: "1px solid green",
          }}
        ></button>
        <button
          onClick={changeri}
          style={{
            backgroundColor: "orange",
            height: 20,
            width: 20,
            borderRadius: "50%",
            marginRight: 20,
            border: "1px solid green",
          }}
        ></button>
        <button
          onClick={changeri}
          style={{
            backgroundColor: "red",
            height: 20,
            width: 20,
            borderRadius: "50%",
            marginRight: 20,
            border: "1px solid green",
          }}
        ></button>
        <button
          onClick={changeri}
          style={{
            backgroundColor: "pink",
            height: 20,
            width: 20,
            borderRadius: "50%",
            marginRight: 20,
            border: "1px solid green",
          }}
        ></button>
        <button
          onClick={changeri}
          style={{
            backgroundColor: "grey",
            height: 20,
            width: 20,
            borderRadius: "50%",
            marginRight: 20,
            border: "1px solid green",
          }}
        ></button>
        <button
          onClick={changeri}
          style={{
            backgroundColor: "black",
            height: 20,
            width: 20,
            borderRadius: "50%",
            marginRight: 20,
            border: "1px solid green",
          }}
        ></button>
      </div>
    </div>
  );
}

export default BgSelecter;
