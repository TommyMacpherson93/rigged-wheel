import "bootstrap/dist/css/bootstrap.css";
import { FaMinusSquare } from "react-icons/fa";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  onClick: (name: string) => void;
}

function ListGroup({ items, onClick }: Props) {
  return (
    <ol className="list-group list-group-numbered">
      {items.map((item) => (
        <li
          className={`list-group-item ${styles["list-group-item"]}`}
          key={item}
        >
          {item}
          <FaMinusSquare
            onClick={() => onClick(item)}
            className={styles["remove-btn"]}
          />
        </li>
      ))}
    </ol>
  );
}

export default ListGroup;
