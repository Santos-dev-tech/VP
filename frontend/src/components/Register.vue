<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 50px;">

        <div class="container">

            <div class="row">
                
                <div class="col-md-6 shadow p-3 rounded">

                    <div>
                        <div style="padding-bottom: 5px;">
                            <h4>Create your account</h4>
                            <p>Create a free account and start using Very Pro</p>
                        </div>
                        <form @submit.prevent="register()">
                           
                           <div class="row">

                             <div class="col-md-12">
                            <div class="form-group" style="padding-top: 10px;">
                                <label>Select account</label>
                            <select class="form-select input-design" v-model="account_type">
                                <option value="0" selected>Personal account</option>
                                <option value="1">Business account</option>
                            </select>
                                
                            </div>
                               </div>

                               <div class="col-md-12" v-if="account_type==1">
                                 <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Company name" v-model="company_name">
                            </div>
                            </div>

                            <div class="col-md-6">
                                 <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="First name" v-model="first_name">
                            </div>
                            </div>
                               
                               <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Last name" v-model="last_name">
                            </div>
                               </div>

                                <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Email" v-model="email">
                            </div>
                               </div>

                                <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Phone" v-model="phone">
                            </div>
                               </div>

                                <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Address" v-model="address">
                            </div>
                               </div>
                                <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="password" class="form-control input-design" placeholder="Password" v-model="password">
                            </div>
                               </div>


                           </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1">Register</button>
                                Already have an account?<router-link to="/login" class="btn text-warning">Login</router-link>
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
            first_name : '',
            last_name : '',
            phone : '',
            address: '',
            company_name : '',
            account_type : ''
        }
    },
    methods : {
        async register(){
            if(!this.email){
                this.$swal('Email cannot be blank');
                return
            }
            if(!this.password){
                this.$swal('Password cannot be blank');
                return
            }

             if(!this.first_name){
                this.$swal('First name cannot be blank');
                return
            }
            if(!this.last_name){
                this.$swal('Last cannot be blank');
                return
            }

             if(!this.address){
                this.$swal('Address cannot be blank');
                return
            }
            if(!this.account_type){
                this.$swal('Account type cannot be blank');
                return
            }

            if(this.account_type==1 && this.company_name=='' ){
                this.$swal('Company name cannot be blank');
                return
            }
            
            

            const res = await axios.post(this.$store.state.api_url+'api/register',{
                email : this.email,
                password : this.password,
                first_name : this.first_name,
                last_name : this.last_name,
                address : this.address,
                company_name : this.company_name,
                account_type : this.account_type,
                phone : this.phone
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            if(res=='Account created suuccessfully'){
                this.$swal(res)
                this.$router.push('/login')
            }else{
                this.$swal(res)
            }

            }
            
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

</script>