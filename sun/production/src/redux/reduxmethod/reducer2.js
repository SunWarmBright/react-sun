function reducer2 (state={num:10},action){
    switch (action.type) {
        case "ADD":
        console.log(1)
        return 1;
        default:
            return state;
    }
}
export default reducer2;