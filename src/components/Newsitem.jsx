import React, { Component } from 'react'
import axios from "axios";

export default class Newsitem extends Component {
   
    render() {
        
        let {desc , title ,imgUrl, readMore} = this.props
        return (
            <>
                <div className="card" style={{width: '18rem'}}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                {title}
                            </h5>
                            <p className="card-text">
                                {desc}
                            </p>
                           <a href={readMore} className='btn btn-primary btn-sm' target='_blank'>Read More</a>
                        </div>
                </div>
                {/* <button className='btn btn-primary' onClick={getNews}>Search</button> */}
            </>

        )
    }
}
