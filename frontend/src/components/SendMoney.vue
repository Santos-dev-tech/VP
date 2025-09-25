<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 50px;">

        <div class="container">

            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">


                    <div>
                        <div style="padding-bottom: 20px;">
                            <div>
                        <router-link to="/dashboard" class="btn"> <i class="bi bi-arrow-left"></i> Go back</router-link>
                    </div>
                            <h4>Send Money</h4>
                            <h6> Current balance : <span class="balance">Ksh. {{this.$store.state.balance}}</span> </h6>
                        </div>
                        <form @submit.prevent="send_money()">
                            <div class="form-group">
                                <input type="email" class="form-control input-design" placeholder="Enter email address" v-model="email">
                            </div>

                            <div class="form-group" style="padding-top: 15px;">
                                <input type="number" min="1" class="form-control input-design" placeholder="Enter amount" v-model="amount">
                            </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1">Send</button>
                            </div>

                            


                        </form>
                    </div>

                </div>
                <div class="col-md-4"></div>
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
            email : '',
            amount : '',
        }
    },
    methods : {
        async send_money(){
            if(!this.email){
                this.$swal('Email cannot be blank');
                return
            }

            if(this.email==this.$store.state.email){
                this.$swal('Email cannot be the same');
                return
            }

            if(!this.amount){
                this.$swal('Amount cannot be blank');
                return
            }
            const res = await axios.post(this.$store.state.api_url+'api/send-money',{
                receiver : this.email,
                amount : this.amount,
                sender : this.$store.state.email
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
          
            if(res=='insufficient'){
                this.$swal('You have insufficient balance in your account')
            }else if(res=='no-email'){
               this.$swal('Email does not exist') 
            }else{
                this.$swal('Success.Money sent!')
                this.amount = ''
                this.user_details()
            }
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
               
              

            });
            
            
        }
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

</script>