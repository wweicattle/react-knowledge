import React from "react"
import kerwinPropsTypes from "prop-types"
import axios from 'axios'
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
      tableData: []
    }
    axios.get("./demo.json").then(da => {
      console.log(da);
    })

    console.log(this.props);


    Promise.resolve(434).then(da => {
      console.log(this.props);

    })
    setTimeout(val => {
      console.log(this.props);

    }, 0)
    this.curref = React.createRef()
  }
  static propTypes = {
    // booleaNum: kerwinPropsTypes.bool,

  }
  static defaultProps = {
    wuwei: 1111
  }

  render() {
    console.log(this.props);
    // this.setState({name:this.props.books})
    return (
      <div className="contain">
        <input type="value" ref={this.curref} value={this.state.name} defaultValue='343' onChange={(e) => {
          this.setState({
            name: e.target.value
          })
        }} />
      </div>
    )
  }
}

export default WWTest
