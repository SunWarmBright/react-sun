import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import List from '../components/list';
// import {Link} from 'react-router-dom';
class Resultsquery extends Component {
    render() { 
        console.log(this.props)
        return (
            <div className="main">
      <div className="title">成员统计</div>
            <div className="datalist">
            <div className="search ">
                <div>
                    <span>系别</span>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>
                <div>
                    <span>专业</span>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>
                <div>
                    <span>班级</span>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>
                <div>
                    <span>学年</span>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                </div>
                <div>
                    <span>学期</span>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div>
                    <span>姓名</span><input type="text"/>
                </div>
                <div>
                    <span>学号</span><input type="text"/>
                </div>
                <div>
                    <span>课程</span><input type="text"/>
                </div>
                <button>搜索</button>
            </div>

            <button><img src="../img/jia.png" alt=""/><Link to="/aa">添加</Link></button>
            <List></List>
        </div>
        </div>
        );
    }
}

export default Resultsquery;