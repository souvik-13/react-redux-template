import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  // const count = useSelector((state)=> state.Counter.value)
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
    console.log("count", count)
  }, [count]);
  
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-card-background ring-2 p-4 m-4 rounded-lg">
        <span className="w-full text-9xl text-center truncate">{count}</span>
        <div className="w-full flex gap-2 items-center justify-evenly">
          <div className="basis-1/2">
            <Button
              className="w-full my-2 active:translate-y-0.5 active:scale-95 transition-all ease-in-out duration-100"
              variant="destructive"
              onClick={() => { dispatch(decrement()) }}
            >
              -
            </Button>
          </div>
          <div className="basis-1/2">
            <Button
              className="w-full my-2 active:translate-y-0.5 active:scale-95 transition-all ease-in-out duration-100"
              variant="default"
              onClick={() => { dispatch(increment()) }}
            >
              +
            </Button>
          </div>
        </div>
        <div className="w-full flex gap-1 items-center justify-start" >
          <Input
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => setValue(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(incrementByAmount(value));
                setValue(0);
              }
            }}
          />
          <Button className="flex-1" onClick={() => {
            dispatch(incrementByAmount(value));
            setValue(0);
          }}>
            Add Amount
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
