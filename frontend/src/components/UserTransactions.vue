<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 20px;">

        <div class="container">

             <router-link to="/dashboard" class="btn"> <i class="bi bi-arrow-left"></i> Go back</router-link>

            <div>
                <h6>Transactions</h6>
            </div>


            <div class="shadow-lg p-3 rounded">
                
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr> <th>Order#</th> <th>Amount</th> <th>Comment...</th> <th>Date of transaction</th> </tr>
                    </thead>
                    <tbody v-for="t in transactions">
                        <tr>
                            <td> {{t.orderId}} </td>  <td>Ksh. {{t.amount}} </td>  <td> {{t.comment}} </td> <td> {{t.created}} </td>
                        </tr>
                    </tbody>
                </table>
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
            transactions : []
        }
    },
    methods : {

        async user_transactions(){
            const res  = await axios.get(this.$store.state.api_url+'api/user-transactions/'+this.$store.state.user_id).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            this.transactions = res
        },
       
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.user_transactions()
    }
}

</script>