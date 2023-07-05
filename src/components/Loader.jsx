import React, { Component } from 'react'
import spinner from '../assests/Loading_icon.gif'
export default class loader extends Component {
  render() {
    return (
<>
{/* <h2>Loader</h2> */}
<img src={spinner} alt="" style={{width:'20%'}}    />
</>
        )
  }
}
