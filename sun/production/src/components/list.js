import React, { Component } from 'react';
class List extends Component {
    render() { 
        
        return (
            <div className="search">
                
            
            <ul className="list">
                    <li>
                        <div><p>学号</p></div>
                        <div><p>姓名</p></div>
                        <div><p>姓别</p></div>
                        <div><p>系别</p></div>
                        <div><p>专业</p></div>
                        <div><p>班级</p></div>
                        <div><p>学年</p></div>
                        <div><p>学期</p></div>
                        <div><p>课程编码</p></div>
                        <div><p>课程名称</p></div>
                        <div><p>成绩</p></div> 
                        <div>
                            <img src={require("../img/hekriconzhuijiaanniuanniu.png")} alt=""/>
                            <img src={require("../img/shanchu.png")} alt=""/>
                            <img src={require("../img/xuanzhong.png")} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div><p>2016030720</p></div>
                        <div><p>黄赌毒</p></div>
                        <div><p>姓别</p></div>
                        <div><p>软件系</p></div>
                        <div><p>软件技术</p></div>
                        <div><p>1班</p></div>
                        <div><p>2018-2019</p></div>
                        <div><p>2</p></div>
                        <div><p>55555</p></div>
                        <div><p>语文</p></div>
                        <div><p>99</p></div> 
                        <div>
                            <img src={require("../img/xiug.png")} alt=""/>
                            <img src={require("../img/shanchu.png")} alt=""/>
                            <img src={require("../img/xuanzhong.png")} alt=""/>
                        </div> 
                    </li>
                    <li>
                        <div><p>2016030720</p></div>
                        <div><p>黄赌毒</p></div>
                        <div><p>姓别</p></div>
                        <div><p>软件系</p></div>
                        <div><p>软件技术</p></div>
                        <div><p>1班</p></div>
                        <div><p>2018-2019</p></div>
                        <div><p>2</p></div>
                        <div><p>55555</p></div>
                        <div><p>语文</p></div>
                        <div><p>99</p></div> 
                        <div>
                            <img src={require("../img/xiug.png")} alt=""/>
                            <img src={require("../img/shanchu.png")} alt=""/>
                            <img src={require("../img/xuanzhong.png")} alt=""/>
                        </div> 
                    </li>
                </ul></div>
        );
    }
}

export default List;