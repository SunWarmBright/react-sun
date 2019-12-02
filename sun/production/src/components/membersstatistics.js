import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
class Topnumber extends Component {
    render() { 
        return (
            <div className="main">
      <div className="title">成员统计</div>
            <div className="topnumber">
        <div>
            <span>学生与教师人数</span>
            <span>总计<span>999</span>人</span>
        </div>
        
        <div className="tnu">
            <div>
                <p>999</p>
                <p>某某系</p>
            </div><div>
                <p>999</p>
                <p>某某系</p>
            </div><div>
                <p>999</p>
                <p>某某系</p>
            </div><div>
                <p>999</p>
                <p>某某系</p>
            </div><div>
                <p>999</p>
                <p>某某系</p>
            </div><div>
                <p>999</p>
                <p>教师</p>
            </div>
        </div>
        <div className="bnu">
            <p>课件数量占比</p>
        </div>
    </div>
    </div>
        );
    }
}

export default Topnumber;