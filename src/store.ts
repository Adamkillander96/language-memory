import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Card {
  card: { text: string; answer: string };
  btn: {
    classList: any;
  };
}

export default new Vuex.Store({
  state: {
    selected: {
      first: Object,
      second: Object
    },
    message: Object
  },
  mutations: {
    setFirstCard(state, data) {
      state.selected.first = data;
    },
    setSecondCard(state, data) {
      state.selected.second = data;
    },
    clearSelected(state) {
      state.selected.first = Object;
      state.selected.second = Object;
    },
    setMessage(state, message) {
      state.message = message;
    }
  },
  actions: {
    selectCard({ state, commit, dispatch }, data: Card) {
      data.btn.classList.add("open");
      if (state.selected.first === Object) {
        commit("setFirstCard", data);
      } else {
        commit("setSecondCard", data);
        dispatch("evaluateSelectedCards", state.selected);
      }
    },
    evaluateSelectedCards({ commit, dispatch }, data) {
      if (
        data.first.card.text === data.second.card.answer ||
        data.first.card.answer === data.second.card.text
      ) {
        commit("setMessage", { text: "hurray!", type: "success" });
        dispatch("correct", data);
      } else {
        commit("setMessage", { text: "Nope!", type: "wrong" });
        dispatch("wrong", data);
      }
    },
    wrong({ commit, state }, data) {
      data.first.btn.classList.add("wrong");
      data.second.btn.classList.add("wrong");
      window.setTimeout(() => {
        data.first.btn.classList.remove("open", "wrong");
        data.second.btn.classList.remove("open", "wrong");
        commit("clearSelected");
      }, 1500);
    },
    correct({ commit, state }, data) {
      data.first.btn.classList.add("correct");
      data.second.btn.classList.add("correct");
      window.setTimeout(() => {
        data.first.btn.classList.add("closing");
        data.second.btn.classList.add("closing");
        commit("clearSelected");
      }, 1500);
    }
  }
});
