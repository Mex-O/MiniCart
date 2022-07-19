import { createStore } from 'vuex'

export default createStore({
  state: {
    carts:[],
    products:[
      {name:'Brush',cost:'$2.5', image:'https://assets.hermes.com/is/image/hermesproduct/soft-mini-brush--800043E%2001-front-1-300-0-800-800_b.jpg'},
      {name:'Socks',cost:'$1.3', image:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a9b2c6bb14f4b108a27a9d300abc4fe_9366/3-Stripes_Cushioned_Crew_Socks_3_Pairs_White_DZ9346_03_standard.jpg'},
    ]
  },
  getters: {
  },
  mutations: {
    addToCart(products){
      this.state.carts.unshift(this.state.products)
    },
    removeFromCart(products){
      this.state.carts.splice(this.state.carts.indexOf(this.state.products),1)
    }
  },
  actions: {
  },
  modules: {
  }
})
