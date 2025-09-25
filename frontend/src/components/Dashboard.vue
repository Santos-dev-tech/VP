<template>

    <div class="container">
        <Header />
    </div>


    


    <section style="padding-top: 50px;">

        <div class="container">


            <div class="row">

                <div class="col-md-4" style="border-right: solid 1px lightgrey;">
                    <h6> <i class="bi bi-person-fill icon"></i>Welcome, {{ this.$store.state.fullname }}</h6>

                    <div class="row">

                         <div class="col-md-6 col-6" style="padding-top:20px;">
                    <router-link to="/business-dashboard" class="btn menu-btn shadow-lg"> <i class="bi bi-bag"></i> 
                    Business</router-link>
                    <router-link to="/wallet" class="btn menu-btn-3 shadow-lg mt-3"> <i class="bi bi-wallet2"></i> Wallet</router-link>

                </div>

                 <div class="col-md-6 col-6" style="padding-top:20px;">
                    <router-link to="/shop" class="btn menu-btn shadow-lg"> <i class="bi bi-cart"></i> Shop</router-link>

                    <div style="padding-top:20px;">
                         <router-link to="/loans" class="btn shadow"> <i class="bi bi-plus icon"></i>Access loans</router-link>
                    </div>

                </div>

                 <div style="padding-top:30px;" class="col-md-12" v-if="this.$store.state.user_type==1 && business_id=='' ">
                        You are logged in with a business account
                        <router-link to="/create-shop" class="btn theme-btn-2"> <i class="bi bi-plus"></i> Create shop</router-link>

                    </div>
                        
                    </div>


                    
                </div>

                <div class="col-md-3" style="padding-top:10px;">
                    
                    <div style="padding-top:30px;">
                        <h6 style="color:#800; padding-left: 10px;">Transactions and receipts</h6>
                        <router-link to="/user-transactions" class="btn"> <i class="bi bi-list icon"></i> View transactions</router-link> <br />
                        <router-link to="/send-money" class="btn"> <i class="bi bi-currency-dollar icon"></i> Send money</router-link> <br />
                        <button class="btn" @click="user_details()"> <i class="bi bi-eye icon"></i> Show balance</button> <span v-if="show_balance" class="btn balance"> Ksh.{{this.$store.state.balance}}</span>
                        <router-link to="/my-shopping-orders" class="btn shadow-lg mt-3"> <i class="bi bi-cart-check icon"></i> My shopping orders</router-link>
                    </div>
                </div>

                <div class="col-md-5" >
                    <div class="shadow rounded p-3 m-3">
                        
                        <p class="messages" v-for="money in monies">  <i class="bi bi-bell icon"></i> You sent Ksh.{{money.amount}} to {{money.receiver}}, {{money.created}} </p>
                        <p class="messages" v-if="monies.length==0"> <i class="bi bi-bell icon"></i> No messages to show</p>
                    </div>

                    <div>
                        <router-link to="/account" class="btn"> <i class="bi bi-gear-fill icon"></i> Account settings </router-link>

                        <button class="btn btn-danger" @click="logout()"> <i class="bi bi-power"></i> Logout</button>
                    </div>

                </div>
                
            </div>





            <div class="row">
               
                <div class="col-md-12" style="padding-top:20px;">

                <div style="background-image:url('/assets/images/website-images/image-8.jpg'); background-size:cover; padding-top:50px; padding-bottom: 50px; text-align:center; background-color: rgba(0, 0, 0, 0.7); background-blend-mode:darken;" class="shadow-lg rounded">
                    <h6 style="color:#FFB647;">Send money to any account for free</h6>
                  <router-link to="/send-money" class="btn theme-btn-1"> Check It Out </router-link>
                    
                </div>
                    
                </div>

            </div>

              

        </div>

    </section>

  

    


    

<Footer />
</template>

<script>
import Header from './layouts/Header'
import Slider from './layouts/Slider'
import Footer from './layouts/Footer'
import axios from 'axios'


export default{
    name : 'home',
    components : {Header,Slider,Footer},
    data () {
        return { 
           show_balance : false,
           monies : [],
           details : [],
            name : '',
            business_id : '',
            account_type : ''
        }
    },
    methods : {
    
         async money_sent(){
            const res  = await axios.get(this.$store.state.api_url+'api/money-sent/'+this.$store.state.email).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            this.monies = res
        },
        logout(){
            this.$store.state.logged_in = false
            localStorage.setItem('logged_in',false)
            this.$router.push('/')
        },

        async business_details(){
const res = await axios.get(this.$store.state.api_url+'api/business-details/'+this.$store.state.user_id).then(function(response){
return response.data
}).catch(function(error){
console.log(error)
})
this.details = res

this.details.forEach(data => {
this.name = data.name
this.business_id = data.id
this.account_type = data.accountType
this.$store.state.account_type = data.accountType
localStorage.setItem('account_type',data.accountType)

localStorage.setItem('business_id',data.id)
this.$store.state.business_id = localStorage.getItem('business_id')

localStorage.setItem('business_name',data.name)
this.$store.state.business_name = localStorage.getItem('business_name')

});



},

async user_details(){
    
            const res = await axios.post(this.$store.state.api_url+'api/user-details',{
                email : this.$store.state.email,
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            
            res.forEach(data => {
                this.$store.state.email = data.email
                localStorage.setItem('email' ,data.email)
                this.$store.state.phone = data.phone
                localStorage.setItem('phone' ,data.phone)
                this.$store.state.balance = data.balance
                localStorage.setItem('balance', data.balance)
                this.$store.state.fullname = data.fullName
                localStorage.setItem('fullname', data.fullName)

                this.$store.state.user_id = data.id
                localStorage.setItem('user_id', data.id)
                this.show_balance = true
               
            });
            
            
        }

    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.money_sent()
        this.business_details()
        this.user_details()
    }
}

</script>


<style scoped>
    
    .messages{
        padding: 0px;
        font-size: 12px;
        color: grey;
        border-bottom: solid 1px lightgrey;
    }

</style>


