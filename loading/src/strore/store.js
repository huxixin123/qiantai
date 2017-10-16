import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        onedata: '',
        twodata: '',
        states: false,
        tablefrom: "",
        states1: false,
    },
    mutations: {
        changeOne(state, data) {
            state.onedata = data;
        },
        changeTwo(state, data) {
            state.twodata = data;
        },
        changeState(state, data) {
            state.states = data;
        },
        changefrom(state, data) {
            state.tablefrom = data
        },
        changeState1(state, data) {
            state.states1 = data;
        }
    },
    actions: {
        getOne({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getNav").then(data => {
                    commit("changeOne", data.data.data)
                    resolve()
                })
            })
        },
        getTwo({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getNav").then(data => {
                    commit("changeTwo", data.data.data);
                    resolve();
                })
            })
        },
        getAllData({ dispatch, commit }, data) {
            Promise.all([dispatch("getOne"), dispatch("getTwo")]).then(() => {
                commit("changeState", true)
                data._this.$router.push({ path: data.id })
            })
        },
        getfrom({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getNav").then(data => {
                    commit("changefrom", data.data.data);

                    resolve();
                })
            })
        },
        sedfrom({ dispatch, commit }, datas) {
            console.log(datas)
            dispatch("getfrom").then(() => {
                commit("changeState1", true)
                datas._this.$router.push({ path: datas.id })
            })
        }


    }
})

export default store;