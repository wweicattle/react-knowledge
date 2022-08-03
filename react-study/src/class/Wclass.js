import React from "react"
import ClassCom from "./classTestTwo"
import Push from "./push"
import emit from "./demo"
// import { GolabalCommer } from "./push"
const GolabalCommer = React.createContext()
class WWTest1 extends React.Component {
    render() {
        return (
            < GolabalCommer.Consumer >
                {value => {
                    <div className='sa'>sasas{value}</div>
                }}
            </GolabalCommer.Consumer>

        )
    }
}

class WWTest extends React.Component {
    constructor() {
        super()
        emit.subscribe((names) => {
            console.log(names);
            this.setState({
                names
            })
        })
        this.state = {
            names: 'wua',
            name: "render", age: 36, books: ['一句顶万句', '草丛生睦邻', '独侠人'], item: {
                text: '<span>innerthml</span>'
            }, sexs: "sas", attr: []
        }
        this.currefs = React.createRef()

    }
    clickSum() {
        this.setState({
            sexss: 'male'
        })
    }

    change = (names) => {
        console.log(names);
        this.setState({
            names
        })
    }
    render(prop) {

        return (
            <GolabalCommer.Provider value={{
                as: 'kaiwu',
                age: 10,
            }}>
334
                <WWTest1 />
            </GolabalCommer.Provider>
        )

    }


}
console.log(WWTest);

export default WWTest
export { GolabalCommer }
