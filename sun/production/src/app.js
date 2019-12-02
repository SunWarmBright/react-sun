import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';
import Membersstatistics from './components/membersstatistics';
import Resultsquery from './components/resultsquery';
import Addteacher from './components/addteacher';
import './css/reset.css';
import './css/1头部.css';
import './css/add.css'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/resease/reseases';
// console.log(action)

//引入组件;
// import List from './list';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   val:'',
    //   arr:['']
    }
    
  }
  
//   Add = ()=>{
//     //   console.log(this.props)
//       let {add} = this.props;
//       add();
//     //   console.log(add)
//     //   dispatch(add())
//     //   this.props.add();
//   }

  render() { 
    
    // let {val,arr} = this.state;
    // console.log(this.props)
    // map一定要用return ***
    // let list = arr.map((e,i)=>{
    //   return <List {...{
    //     key:i,
    //     val:e
    //   }}/>
    // });

    return (
      
    <div id="app">
    <div className="head ">
        <h1>学生管理系统</h1>
        
        <span><img src={require("./img/退出 .png")} alt=""/>退出</span>
        <span>请登录</span>
    </div>
    <div className="menu">

        <div className="headportrait">
            <img src={require("./img/touxiang.png")} alt=""/>
            <p>root</p>
            <p
            //  onClick = {this.Add}
            >超级管理员</p>
        </div>
        <div className="listNavigation">
                <ul >
                    <li className="LevelOList unfold">
                        <div ><span>数据查询</span>
                            <svg className="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
                                <path d="M10,1 L21,11 L11,21 L1,11"></path>
                            </svg>
                        </div>
                        <ul className="LevelTList">
                            <li><Link to="/" params="01">成员统计</Link></li>
                            <li><Link to="/ab/01">成绩查询</Link></li>
                        </ul>
                    </li>
                    {/*  <li className="LevelOList">
                        <div ><span>成绩改查</span>
                            <svg className="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
                                <path d="M10,1 L21,11 L11,21 L1,11"></path>
                            </svg>
                        </div>
                        <ul className="LevelTList">
                            <li ></li>
                            <li >成绩修改</li>  
                        </ul>
                    </li>  */}
                    <li className="LevelOList unfold">
                        <div ><span>信息修改</span>
                            <svg className="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
                                <path d="M10,1 L21,11 L11,21 L1,11"></path>
                            </svg>
                        </div>
                        <ul className="LevelTList">
                            <li ><Link to="/ab/02">教师信息</Link></li>
                            <li ><Link to="/ab/03">学生信息</Link></li>   
                        </ul>
                    </li>
                    <li className="LevelOList">
                        <div ><span>通知</span>
                            <svg className="nav-indicator" width="22" height="22" viewbox="0 0 26 26">
                                <path d="M10,1 L21,11 L11,21 L1,11"></path>
                            </svg>
                        </div>
                        <ul className="LevelTList">
                            <li ><Link to="/ac/01">通告</Link></li>
                            <li ><Link to="/ac/02">通报</Link></li>
                        </ul>
                    </li>
                        
                </ul>
            </div>
    </div>
    
      <Route path="/" exact component = {Membersstatistics} />

      <Route path="/ab/:name" component={Resultsquery}/>
      <Route path="/aa" exact component = {Addteacher} />
  </div>
    );
  }
}
 
export default withRouter(connect(state=>state,(dispatch)=>(bindActionCreators(actions,dispatch)))(App));