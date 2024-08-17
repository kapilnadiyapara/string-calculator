import { FC } from "react";

const Display: FC<{value: number}> = ({value}) => {
    return (
        <div>
            Result:  {value}
        </div>
    )
}

export default Display;