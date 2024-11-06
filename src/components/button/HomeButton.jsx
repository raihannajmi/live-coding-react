function HomeButton({ children, onSelect }) {
  //   document.querySelector("button").addEventListener("click", () => {
  //     console.log("aaaaa");
  //   });

  function clickHandler() {
    console.log("yahahaha");
  }

  return (
    <div>
      <button onClick={clickHandler}>{children}</button>
    </div>
  );
}

export default HomeButton;
