import { FC, useCallback, useEffect, useState } from "react";
import Display from "./share/component/Display";
import { add } from "./share/utils";

const StringCalculator: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const onInputValueChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(ev.target.value);
    },
    []
  );

  useEffect(() => {
    const answer = add(inputValue);
    setResult(answer);
  }, [inputValue]);

  return (
    <div>
      <div>
        Enter Value
        <input type="text" value={inputValue} onChange={onInputValueChange} />
      </div>
      <div>
        <Display value={result} />
      </div>
    </div>
  );
};

export default StringCalculator;
