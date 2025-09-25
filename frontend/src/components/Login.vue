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
                            <h4>Account login</h4>
                            <p>Login to access your account</p>
                        </div>
                        <form @submit.prevent="login()">
                            <div class="form-group">
                                <input type="email" class="form-control input-design" placeholder="Enter email address" v-model="email">
                            </div>

                            <div class="form-group" style="padding-top: 15px;">
                                <input type="password" class="form-control input-design" placeholder="Enter password" v-model="password">
                            </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1">Login</button>
                            </div>

                            <div style="padding-top: 20px;">
                                <router-link to="/register" class="btn text-warning">Register</router-link>
                                <router-link to="/forgot-password" class="btn text-danger">Forgot password</router-link>
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
            password : '',
            ip : ''
        }
    },
    methods : {
        async login(){
            if(!this.email){
                this.$swal('Email cannot be blank');
                return
            }
            if(!this.password){
                this.$swal('Password cannot be blank');
                return
            }
            const res = await axios.post(this.$store.state.api_url+'api/login',{
                email : this.email,
                password : this.password
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            if(res.length==0){
                this.$swal('Wrong email or password.Try again')
            }else{
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

                this.$store.state.logged_in = true
                localStorage.setItem('logged_in', true)

                this.$store.state.user_type = data.userType
                localStorage.setItem('user_type', data.userType)

                this.$router.push('/dashboard')
              

            });
            }
            
        }
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      if(this.$store.state.logged_in){
        this.$router.push('/dashboard')
      }
    
    }
}

</script>