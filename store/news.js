import axios from 'axios';

export const state = () => ({
  list: [],
  fetched: false,
});

export const mutations = {
  set (state, todos) {
    state.list = todos;
    state.fetched = true;
  },
};

export const actions = {
  async fetchNews({ commit }) {
    const { data } = await axios.get('https://formationmedia.co.uk/wp-json/wp/v2/posts?per_page=3')
    commit('set', data);
  },
}

export const getters = {
  userById: (state) => (id) => {
    return state.list.find(news => news.id == id);
  },
  isFetched: state => {
    return !!state.fetched;
  },
}
