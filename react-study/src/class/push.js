import React from "react"
import kerwinPropsTypes from "prop-types"
import axios from 'axios'
import { GolabalCommer } from "./Wclass"
import emit from "./demo"
export { emit }
// const GolabalCommer = React.createContext()
class WWTest extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "render",
            age: 36,
            books: ["一句顶万句", "草丛生睦邻", "独侠人"],
            item: {
                text: "<span>innerthml</span>",
            },
        }
    }

    render() {
        return (
            < GolabalCommer.Consumer >
                {theme => {
                    <div className='sa'>sasas{theme}</div>
                }}
            </GolabalCommer.Consumer>

        )
    }
}

// export { GolabalCommer }

export default WWTest
