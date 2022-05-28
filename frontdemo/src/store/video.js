const key='video'
const video = {
    // 定义video数据对象和初始值
    state(){
        return {
            video: null
        }
    },
    // 定义读取方法，getVideo，从localStorage中读取 video 数据并转换成 JSON格式
    getters: {
        getVideo: function (state) {
            if(!state.video){
                state.video = JSON.parse(localStorage.getItem(key))
            }
            return state.video
        }
    },
    // 定义更改 store 状态的事件
    mutations: {

    },
    actions: {

    }
};
export default video