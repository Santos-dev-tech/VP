import { createStore } from 'vuex'

export default createStore({
  state: {
    api_url : 'https://server.verypro.co.ke/',
    email : localStorage.getItem('email'),
    phone : localStorage.getItem('phone'),
    balance : localStorage.getItem('balance'),
    fullname : localStorage.getItem('fullname'),
    user_id : localStorage.getItem('user_id'),
    logged_in : localStorage.getItem('logged_in'),
    account_type : localStorage.getItem('account_type'),
    cart : [],
    cart_data : [],
    message : '',
    business_id : localStorage.getItem('business_id'),
    user_type : localStorage.getItem('user_type'),
    business_name : localStorage.getItem('business_name'),
    product_cart : []
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
