"use client";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="text-black card  text-center  mx-auto flex items-center justify-center min-h-screen ">
      <div className="border p-8 rounded-2xl">
        <div
          style={{
            border: "1px solid white ",
            marginBottom: "30px",
            padding: "10px",
          }}
        >
          <div style={{ marginBottom: "10px", fontSize: "30px" }}>
            {counter.value}
          </div>
          <div
            className="text-xl"
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <button onClick={() => dispatch(increment())} className="btn">
              Increment
            </button>
            <button onClick={() => dispatch(decrement())} className="btn">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
