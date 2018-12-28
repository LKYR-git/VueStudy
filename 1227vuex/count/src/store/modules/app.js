// 模块中存储的数据
const state = {
    num: 10000000
  }
  
  //派发的数据
    const getters ={
        formatNum: (state)=>{
            const re=/(?=(?!(\b))(\d{3})+$)/g;
            let str = state.num.toString().replace(re,",");
            return str;
        }
    }
  // 模块中的同步改变
  const mutations = {
    changeNum(state, action){
      console.log('state...', state, 'action...', action);
      state.num = action.payload==='+'?state.num+1: state.num-1;
    }
  }

  //异步操作方式
  const actions ={
      changeNumAsync(context,action){
          return new Promise((resolve,reject)=>{
            console.log('context...',context,action);
            setTimeout(()=>{
                context.commit({
                  type: 'changeNum',
                  payload: action.payload
                });
              }, 500);
              resolve();
          })
      }
  }
  
  export default {
      //命名空间
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }