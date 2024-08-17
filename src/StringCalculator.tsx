import { FC, useCallback, useEffect, useState } from "react";
import Display from "./share/component/Display";

const StringCalculator: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputValueChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(ev.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        Enter Value{" "}
        <input type="text" value={inputValue} onChange={onInputValueChange} />
      </div>
      <div>
        <Display value={0} />
      </div>
    </div>
  );
};

export default StringCalculator;
