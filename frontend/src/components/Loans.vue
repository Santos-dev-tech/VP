<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 50px;">

        <div class="container">

            <div class="row">
            
                <div class="col-md-4">

                    <div  class="pb-3">
                        Note : Current loan limit is Ksh.1000
                    </div>

                    <div class="shadow rounded p-3">
                        <h6>Apply loan</h6>
                        <form @submit.prevent="apply_loan()">
                            <div class="form-group">
                                <input type="number" class="form-control input-design" placeholder="Enter amount" v-model="amount">
                            </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1">Request loan</button>
                            </div>


                        </form>
                    </div>

                </div>


                <div class="col-md-8">
                    <div style="padding:5px;"> 
                        <h6>Loan requests</h6>
                        <div style="max-height:500px; overflow: scroll;">
                       
                                <div class="row shadow rounded mt-3 p-2" v-for="loan in loans">
                                    <div class="col-md-3 col-6">
                                     Ksh.{{loan.amount}}
                                     <p v-if="loan.paid==0 && loan.approved==1" class="text-danger"> <i class="bi bi-x"></i> Loan not paid <br/> <button class="btn theme-btn-2" @click="pay_loan(loan.amount,loan.id)">Pay loan</button> </p>
                                     <p v-if="loan.paid==1" class="text-success"> <i class="bi bi-check"></i> Loan paid</p>
                                     </div>

                                      <div class="col-md-3 col-6"> Date due <br /> {{loan.dueDate}} </div>
                                       <div class="col-md-3 col-6"> Date requested <br /> {{loan.createdAt}} </div>
                                        <div class="col-md-3 col-6"> 
                                        Approved <br /> <span v-if="loan.approved==1" class="text-success"><i class="bi bi-check"></i> Yes</span>
                                    <span v-if="loan.approved==0" class="text-danger"><i class="bi bi-x"></i> No</span> </div>
                                
                                </div>
                           
                    </div>

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
            loans : [],
            amount : ''
        }
    },
    methods : {

        async pay_loan(amount,loan_id){

            let opt = confirm('Ksh.'+amount+' will be deducted from your account.Do you wish to proceed with this transaction?')
            if(!opt){
                return
            }

            const res = await axios.post(this.$store.state.api_url+'api/pay-loan',{
                amount : amount,
                user_id : this.$store.state.user_id,
                loan_id : loan_id
            }).then(function(response){
                return response.data 
            }).catch(function(error){
                console.log(error)
            })
            this.$swal(res)
            this.my_loans()
            this.user_details()
        },

    
        async my_loans(){
            const res = await axios.get(this.$store.state.api_url+'api/my-loans/'+this.$store.state.user_id).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            this.loans = res
        },

         async apply_loan(){
            if(!this.amount){
                this.$swal('Amount is required!')
                return
            }

            if(this.amount>1000){
                this.$swal('Current loan limit is Ksh.1000!')
                return
            }

             if(this.amount<1){
                this.$swal('Invalid amount!')
                return
            }

            const res = await axios.post(this.$store.state.api_url+'api/apply-loan',{
                user_id : this.$store.state.user_id,
                amount : this.amount
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            this.my_loans()
            this.$swal(res)
            this.amount = ''
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
        this.my_loans()
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }
}

</script>