import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Card {
	card: { text: string; answer: string }
	btn: Element
}
interface AppState {
	selected: object
	message: object
}

export default new Vuex.Store<AppState>({
	state: {
		selected: {
			first: Object,
			second: Object
		},
		message: Object
	},
	mutations: {
		setFirstCard(state, data) {
			state.selected.first = data
		},
		setSecondCard(state, data) {
			state.selected.second = data
		},
		clearSelected(state) {
			state.selected.first = Object
			state.selected.second = Object
		},
		setMessage(state, message) {
			state.message = message
		}
	},
	actions: {
		selectCard({ state, commit, dispatch }, data: Card) {
			data.btn.classList.add('open')
			if (state.selected.first === Object) {
				commit('setFirstCard', data)
			} else {
				commit('setSecondCard', data)
				dispatch('evaluateSelectedCards')
			}
		},
		evaluateSelectedCards({ state, commit, dispatch }) {
			if (
				state.selected.first.card.text === state.selected.second.card.answer ||
				state.selected.first.card.answer === state.selected.second.card.text
			) {
				commit('setMessage', { text: 'hurray!', type: 'success' })
				dispatch('correct')
			} else {
				commit('setMessage', { text: 'Nope!', type: 'wrong' })
				dispatch('wrong')
			}
		},
		wrong({ commit, state }) {
			state.selected.first.btn.classList.add('wrong')
			state.selected.second.btn.classList.add('wrong')
			window.setTimeout(() => {
				state.selected.first.btn.classList.remove('open', 'wrong')
				state.selected.second.btn.classList.remove('open', 'wrong')
				commit('clearSelected')
			}, 1500)
		},
		correct({ commit, state }) {
			state.selected.first.btn.classList.add('correct')
			state.selected.second.btn.classList.add('correct')
			window.setTimeout(() => {
				state.selected.first.btn.classList.add('closing')
				state.selected.second.btn.classList.add('closing')
				commit('clearSelected')
			}, 1500)
		}
	}
})
