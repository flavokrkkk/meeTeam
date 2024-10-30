import SearchIcon from "../../assets/social/search-icon";
import { EInputSizes } from "../ui/input";
import Input from "../ui/input/input";
import styles from "./search-input.module.scss";

const SearchInput = () => {
  return (
    <div className={styles.contentWrapper}>
      <span>
        <SearchIcon />
      </span>
      <Input
        sizes={EInputSizes.MAX}
        placeholder="Vous cherchez quel utilisateur ..."
        type="search"
        isBorder={false}
      />
    </div>
  );
};

export default SearchInput;
