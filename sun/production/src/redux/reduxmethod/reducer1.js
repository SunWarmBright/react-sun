const INCREMENT = 'INCREMENT'; // actionsname.js
function reducer1 (state={num:0},action){
    switch (action.type) {
        case INCREMENT:
            let n = Object.assign({},state);//克隆
            n.num ++;
            return n;
        default:
            return state;
    }
}
export default reducer1;