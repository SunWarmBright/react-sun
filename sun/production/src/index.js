//必备
import React from 'react';
//渲染
import ReactDOM from 'react-dom';
//as替换名
import {HashRouter as Router} from 'react-router-dom';

//标签必须 更新组件
import {Provider} from 'react-redux';
//必须首字大写
import App from './app';
//引入状态管理数据集合
import store from './redux/reducers';
//热更新

if(module.hot)module.hot.accept();


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);