import {useState} from 'react'

const Add = props => {
  const [ob, setOb] = useState({
    trackingNumber: '',
    date: '',
    location: '',
    status: '',
  })
  const {fun, adding} = props
  const remove = () => {
    fun()
  }

  const onSubmit = () => {
    console.log(ob)
    adding(ob)
  }

  return (
    <div className="Modal">
      <p>Tracking Number</p>
      <input
        type="text"
        placeholder="Enter Tracking Number"
        id="trackingNumber"
        onChange={e => {
          setOb({...ob, trackingNumber: e.target.value})
        }}
      />
      <p>Date</p>
      <input
        type="text"
        id="date"
        onChange={e => {
          setOb({...ob, date: e.target.value})
        }}
        placeholder="Enter Date as DD-MM-YY"
      />
      <p>Location</p>
      <input
        type="text"
        id="location"
        onChange={e => {
          setOb({...ob, location: e.target.value})
        }}
        placeholder="Enter Location"
      />
      <p>Status</p>
      <input
        type="text"
        id="status"
        onChange={e => {
          setOb({...ob, status: e.target.value})
        }}
        placeholder="Enter Status  "
      />
      <br />
      <button type="button" onClick={remove}>
        Close
      </button>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  )
}
export default Add
