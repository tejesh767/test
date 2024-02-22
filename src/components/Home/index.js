import {Component} from 'react'

import './index.css'
import Tasks from '../Tasks'
import Add from '../Add'
import Update from '../Update'

const list = [
  {
    trackingNumber: '121',
    date: '11-12-22',
    location: 'Kavali',
    status: 'Packed',
  },
]

class Home extends Component {
  state = {
    isShowAdd: false,
    updatedList: list,
    isShowUpdate: false,
    a: 1,
    trNum: 0,
  }

  onUpdate = obj => {
    const {trNum, isShowUpdate, updatedList} = this.state
    console.log(obj)

    const p = updatedList.map(each => {
      if (each.trackingNumber === trNum) {
        return {
          trackingNumber: obj.trackingNumber,
          date: obj.date,
          location: obj.location,
          status: obj.status,
        }
      }
      return each
    })
    this.setState({updatedList: p, isShowUpdate: !isShowUpdate, a: 1})
  }

  changeIt = () => {
    const {isShowUpdate} = this.state
    this.setState({isShowUpdate: !isShowUpdate})
  }

  onChange = () => {
    const {isShowAdd} = this.state
    this.setState({isShowAdd: !isShowAdd, a: 1})
  }

  onAdd = values => {
    const {updatedList, isShowAdd} = this.state

    this.setState({
      updatedList: [...updatedList, values],
      isShowAdd: !isShowAdd,
    })
  }

  getId = id => {
    const {isShowUpdate, a, trNum} = this.state

    this.setState({isShowUpdate: !isShowUpdate, a: 0, trNum: id})
  }

  onDelete = id => {
    const {updatedList} = this.state
    const l = updatedList.filter(each => each.trackingNumber !== id)
    this.setState({updatedList: l})
  }

  render() {
    const {isShowAdd, updatedList, isShowUpdate, a} = this.state
    const yeah = a === 0 ? isShowUpdate : isShowAdd
    return (
      <div className="container">
        {!yeah && (
          <>
            <h1 className="Header">All Couriers</h1>
            <div className="table">
              <div className="top">
                <p className="trackingNumber topPa">Tracking Number</p>
                <p className="date topPa">Date</p>
                <p className="Location topPa">Location</p>
                <p className="topPa">status</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onChange}
                >
                  Add Courier
                </button>
                <p>.all packages</p>
              </div>
              <ul className="bottom">
                {updatedList.map(each => (
                  <Tasks
                    token={each}
                    getId={this.getId}
                    onDelete={this.onDelete}
                    key={each.trackingNumber}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
        {isShowAdd && <Add fun={this.onChange} adding={this.onAdd} />}
        {isShowUpdate && (
          <Update changeIt={this.changeIt} updating={this.onUpdate} />
        )}
      </div>
    )
  }
}
export default Home
