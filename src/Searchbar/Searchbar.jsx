import React, { useState ,useEffect,useRef} from "react";
import classes from "./Searchbar.module.css";

const options = ["oranges", "apple", "pears","banana","mango"];

function Searchbar(props) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  const suggetions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const onSuggestionClick = (suggestion)=>{
      setValue(suggestion);
      setShow(false);
  }

  const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShow(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

  return (
    <div ref={autocompleteRef}>
      <input
        type="text"
        className={classes.input}
        placeholder="Search...."
        value={value}
        onChange={changeHandler}
        onFocus={() => {
          setShow(true);
        }}
      />
      <div>
      {show && (
        <ul className={classes.suggestions}>
          {suggetions.map((suggestion, i) => (
            <li key={i} className={classes.list} onClick={()=>{onSuggestionClick(suggestion)}}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default Searchbar;
