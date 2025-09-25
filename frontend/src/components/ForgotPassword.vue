<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 50px;">

        <div class="container">

            <div class="row">
                
                <div class="col-md-6 shadow p-3">

                    <div>
                        <div style="padding-bottom: 20px;">
                            <h4>Forgot password</h4>
                            <p>Enter your email to reset password</p>
                        </div>
                        <form @submit.prevent="reset_password()">
                            <div class="form-group">
                                <input type="email" class="form-control input-design" placeholder="Enter email address" v-model="email">
                            </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1" :disabled="disabled">{{text}}</button>
                            </div>

                            <div style="padding-top: 20px;">
                                <router-link to="/login" class="btn text-warning">Login</router-link>
                                <router-link to="/register" class="btn text-danger">Register</router-link>
                            </div>


                        </form>
                    </div>

                </div>
                <div class="col-md-6" style="background-image:url('/assets/images/website-images/image-8.jpg'); background-size: cover;">
                   
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
            email : '',
            text : 'Reset',
            disabled : false
        }
    },
    methods : {
        async reset_password(){
            if(!this.email){
                this.$swal('Email cannot be blank');
                return
            }
            this.text = 'Please wait...'
            this.disabled = true
            const res = await axios.post(this.$store.state.api_url+'api/forgot-password',{
                email : this.email
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            this.$swal(res)
            this.disabled = false
            this.text = 'Reset'
            this.$router.push('/login')
            
        }
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }
}

</script>