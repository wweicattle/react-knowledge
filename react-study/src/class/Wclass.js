import React from "react"
import FunTest from './FunctionTest'


console.dir(FunTest);

class WWTest extends React.Component {
    render(prop) {
        console.log(prop);
        return (
            <div className="contain" onClick={function () { console.log(this); }}>
                <FunTest />
                this is function component sas
                <div className="contain" onClick={() => { console.log(this); }}>
                    this is function component sas
                </div>
            </div>
        )

    }
}
console.log(WWTest);

export default WWTest