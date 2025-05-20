import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import { Button } from "react-bootstrap";

export default function CounterRedux() {
    const { count } = useSelector((state: any) => state.counterReducer);
    const dispatch = useDispatch();
return (
    <div id="wd-counter-redux">
        <h2>Counter Redux</h2>
        <h3>{count}</h3>

        <Button  onClick={() => dispatch(increment())}
            id="wd-counter-redux-increment-click"
            variant="success" className="w-10 text-nowrap me-2">
            Increment 
        </Button> 

        <Button  onClick={() => dispatch(decrement())}
            id="wd-counter-redux-decrement-click"
            variant="danger" className="w-10 text-nowrap">
            Decrement 
        </Button> 
        <hr/>
    </div>
);
}