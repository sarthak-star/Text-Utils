import React from 'react'

const header = (props) => {
  return (
    <div className="position-absolute top-0 end-0">

    <div className="form-check form-switch " >
  <input className={`form-check-input bg-${props.mode}`} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'? 'dark':'light'} `}  for="flexSwitchCheckDefault">Enable {props.mode==='light'? 'dark':'light'} mode</label>
</div>
    </div>
  )
}

export default header