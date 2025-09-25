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
                            <h3>Wallet</h3>
                            <h6> Current balance : <span class="balance">Ksh. {{this.$store.state.balance}}</span> </h6>

                            <div style="padding-top:20px;">
                                <router-link to="/send-money" class="btn theme-btn-2"> <i class="bi bi-currency-dollar"></i> Send money </router-link>
                            </div>

                             <div>
                        <router-link to="/dashboard" class="btn"> <i class="bi bi-arrow-left"></i> Go back</router-link>
                    </div>

                        </div>
                        
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
            
        }
    },
    methods : {
       
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

</script>