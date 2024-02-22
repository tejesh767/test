// Write your JS code here
import './index.css'

const Tasks = props => {
  const {token, getId, onDelete} = props
  const {trackingNumber, date, location, status} = token
  const update = () => {
    getId(trackingNumber)
  }

  const del = () => {
    onDelete(trackingNumber)
  }

  return (
    <li className="eachTask">
      <p className="a">{trackingNumber}</p>
      <p className="a">{date}</p>
      <p className="a">{location}</p>
      <p className="a">{status}</p>
      <button type="button" className="a modifyButton" onClick={update}>
        Update
      </button>
      <p className="a" onClick={del}>
        Delete
      </p>
    </li>
  )
}
export default Tasks
