import { useState } from "react";
import styles from './Cals.module.css';

const CalsFun = () => {

    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [res, setRes] = useState(0);




    const handleSubmit = (e) => {
        e.preventDefault();
        

    }
  
    const handleAdd = () => {
        setRes((parseFloat(val1)+parseFloat(val2)));

    }

    const handleSub = () => {
        setRes((parseFloat(val1) - parseFloat(val2)));
    }
    const handleMul = () => {
        setRes((parseFloat(val1) * parseFloat(val2)));
    }

    const handleDiv = () => {
        setRes((parseFloat(val1) / parseFloat(val2)));
    }


    return (
        <div>
            <h1>function</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" value={val1}
                    className={styles.ip}
                    onChange={(e) => setVal1(e.target.value)}
                    placeholder="Please Enter Number Only." />
                    <hr />
                <input type="number" value={val2}
                    className={styles.ip}
                    onChange={(e) => setVal2(e.target.value)}
                    placeholder="Please Enter Number Only." /> <br /> <br />

                <button onClick={handleAdd} > Add </button>
                <button onClick={handleSub} > Sub </button>
                <button onClick={handleMul} > Mul </button>
                <button onClick={handleDiv} > Div </button>
                <h2>Result : {res}</h2>
            </form>

        </div>
    )
}
export default CalsFun