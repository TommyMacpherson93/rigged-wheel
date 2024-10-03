import { MdAddCircle } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./NameInput.module.css";
import { useRef, useState } from "react";

interface Props {
  onClick: (name: string) => void;
}

function NameInput({ onClick }: Props) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Lucky Participant"
          aria-label="Lucky Participant"
          aria-describedby="button-addon2"
          value={input}
          ref={inputRef}
          onInput={(e) => {
            setInput((e.target as HTMLInputElement).value);
          }}
        />
        <button
          className={`btn btn-outline-secondary ${styles["add-btn"]}`}
          type="button"
          id="button-addon2"
          onClick={() => {
            onClick(input);
            setInput("");
            if (inputRef.current) {
              inputRef.current.focus(); // Maintain focus on the input field
            }
          }}
        >
          <MdAddCircle size="20px" />
        </button>
      </div>
    </>
  );
}

export default NameInput;
