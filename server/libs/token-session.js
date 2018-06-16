let datas = {};

module.exports = function () {
    return{
        get(token,key){
            if (!datas[token]) {
                return undefined
            }else{
                return datas[token][key]
            }
        },
        set(token,key,val){
            if(!datas[token]){
                datas[token] = {};
            }
            datas[token][key]=val
            
        }
    }
}