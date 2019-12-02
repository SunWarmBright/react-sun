import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/resease/reseases';
// import {Link} from 'react-router-dom';
class addteacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zhuanye:['汽车制造','电子技术'],
            banji:['制造一班','制造二班'],
            kecheng:['工业软件','汽车制造','汽车维修','语文'],
            arr:['工业软件','汽车制造','汽车维修','语文','电路设计','电子软件','数学','英语'
            ,'web','java','数据库','linux','ps技术','动漫制作','网络','美术'
            ,'形体','化学','生物','物理','行政管理','政治','历史','地理'],
            student:{
                xingming : undefined,
                xuehao : undefined,
                nianling : undefined,
                xingbie : '男',
                ruxueshijian : undefined,
                xibie : '电子系',
                zhuanye : '汽车制造',
                kemu : {
                    工业软件:NaN,
                    汽车制造:NaN,
                    汽车维修:NaN,
                    语文:NaN
                },
                mima : undefined,
                biye : false,
                banji:'制造一班'
            }
        };
    }
    quxiao = () => {
       this.props.history.go( -1 )
    }
    queren = () => {
        let students = this.state.student
        let off = true
        for ( let el in students){
            if (students[el] === undefined) {
                off = false
            }
        }
        if (off === true) {
            fetch('http://localhost/api/add/student', {
            method: 'POST',
            
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            },
            body: JSON.stringify(students)
            })
        }else{
           alert('请写完整') 
        }
        
    }
    gai = (a,ev) => {
        
        // console.log(a)
        let student = this.state.student
        student[a] = ev.target.value
        this.setState({student})
console.log(this.state.student)
    }
    xibie = (ev) =>{
        
        for (let i = 0; i < actions.yuan.length; i++) {
            if (ev.target.value === actions.yuan[i].系别) {
                // console.log(actions.yuan[0].专业[0])
                let zhuanye = actions.yuan[i].专业[0]
                let banji = actions.yuan[i].专业[1].班级
                let kecheng = actions.yuan[i].专业[1].课程
                let student = this.state.student
                student.xibie = ev.target.value  
                student.zhuanye = zhuanye[0]
                student.banji = banji[0]
                student.kemu = {};
                for (let i = 0; i < kecheng.length; i++) {  
                    student.kemu[kecheng[i]] = NaN    
                }
                // console.log(student.kemu)
                this.setState({zhuanye})
                this.setState({banji})
                this.setState({kecheng})
                this.setState({student})
            } 
        }
        
    }
    zhuanyes = (ev) =>{
        for (let i = 0; i < actions.yuan.length; i++) {
            // console.log(actions.yuan[i].系别)
            if (this.state.zhuanye === actions.yuan[i].专业[0]) {
                for (let e = 1; e < actions.yuan[i].专业.length; e++) { 
                    if (ev.target.value === actions.yuan[i].专业[e].专业) {
                        let kecheng = actions.yuan[i].专业[e].课程
                        let banji = actions.yuan[i].专业[e].班级
                        let student = this.state.student
                        student.zhuanye = ev.target.value 
                        student.banji = banji[0]
                        student.kemu = {};
                        for (let i = 0; i < kecheng.length; i++) {  
                            student.kemu[kecheng[i]] = NaN    
                        }
                        this.setState({banji})
                        this.setState({kecheng})
                        this.setState({student})
                    }
                    
                }
                
            } 
        } 
    }
    banji = (ev)=>{
        let student = this.state.student
        student.banji = ev.target.value 
        this.setState({student})
    }
    xingbie = (ev)=>{
        let student = this.state.student
        console.log(ev.target.value)
        student.xingbie = ev.target.value 
        this.setState({student})
    }
    biye = (ev)=>{
        let student = this.state.student
        if (ev.target.value === 'true') {
            student.biye = true
        }else{
            student.biye = false
        }
        this.setState({student})
        console.log(this.state.student)
    }

    render() { 
        // console.log(this.state.student)
        
        let listView = this.state.arr.map((el,i)=>{
            let off = false
            for (let r = 0; r < this.state.kecheng.length; r++) {
                // console.log(1)
                // console.log(this.state.kecheng) 
                if (this.state.kecheng[r] === el) {
                    off = true
                   
                }
                
            }
            return <span className={off?'xuan':''}>{el}</span>
        });
        let xibie = actions.yuan.map((el,i)=>{
            return <option >{el.系别}</option>
        });
        let zhuanye = this.state.zhuanye.map((el,i)=>{
            return <option >{el}</option>
        });
        let banji = this.state.banji.map((el,i)=>{
            return <option >{el}</option>
        });
        return (
            <div className="main">
                <div className="title">成员统计</div>
                <div className="datalist add">
                <div className = "leftadd">
                    <div >
                        <span>学号</span>
                        <input type="text"
                        onChange = {(ev)=>this.gai('xuehao',ev)}
                        />
                    </div>
                    <div>
                        <span>姓名</span>
                        <input type="text"
                        onChange = {(ev)=>this.gai('xingming',ev)}
                        />
                    </div>
                    <div>
                        <span>年龄</span>
                        <input type="text"
                        onChange = {(ev)=>this.gai('nianling',ev)}
                        />
                    </div>
                    <div>
                        <span>性别</span>
                        <form onChange = {(ev)=>this.xingbie(ev)}>
                            男：<input type="radio" checked="checked" name="xingb" value="男"
                             />
                            女：<input type="radio" name="xingb" value="女" 
                            // onChange = {(ev)=>this.xingbie(ev)}
                            />
                        </form>
                    </div>
                    <div>
                        <span>入学时间</span>
                        <input type="text"
                        onChange = {(ev)=>this.gai('ruxueshijian',ev)}
                        />
                    </div>
                    <div>
                        <span>系别</span>
                        <select onChange={this.xibie}>
                            {xibie}
                        </select> 
                    </div>
                    
                    <div>
                        <span>专业</span>
                        <select onChange={this.zhuanyes} >
                            {zhuanye}
                        </select> 
                    </div>
                    <div>
                        <span>班级</span>
                        <select onChange={this.banji}>
                            {banji}
                        </select> 
                    </div>
                    <div>
                        <span>是否毕业</span>
                        <select onChange={this.biye}>
                            <option value='false'>未毕业</option>
                            <option value='true'>已毕业</option>
                            
                        </select> 
                    </div>
                    <div>
                        <span>密码</span>
                        <input type="text"
                        onChange = {(ev)=>this.gai('mima',ev)}/>
                    </div>
                    
                    
                </div>
                <div className="rightadd">
                <div className="xuanke">
                        <p>科目预览</p>
                        <div>
                        {listView}</div>
                    </div>
                </div>
                <div className="anniu">
                    <button 
                    onClick = {this.quxiao}
                    >取消</button>
                    <button
                    onClick = {this.queren}
                    >保存</button>
                </div>
                </div>
                
            </div>
            
        );
    }
}

export default withRouter(connect(state=>state,(dispatch)=>(bindActionCreators(actions,dispatch)))(addteacher));;