<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 50px;">

       

        <div class="container">

             <div>
            <router-link to="/dashboard" class="btn"> <i class="bi bi-arrow-left"></i> Go back </router-link>
        </div>

            <div class="row">
                
                <div class="col-md-8 shadow p-3 rounded">

                    <div>
                        <div style="padding-bottom: 5px;">
                            <h5>Account settings</h5>
                        </div>
                        <form @submit.prevent="edit_account()">
                           
                           <div class="row">

                        

                            <div class="col-md-6">
                                 <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Full name" v-model="full_name">
                            </div>
                            </div>
                               
                             

                                <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Email" v-model="email" disabled>
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
                                <input type="password" class="form-control input-design" placeholder="******" v-model="password">
                            </div>
                               </div>


                           </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1">Save changes</button>
                                
                            </div>

                        </form>
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
            password : '',
            full_name : '',
            phone : '',
            address: '',
            details : [],
            email : ''
        }
    },
    methods : {
        async edit_account(){
           
             if(!this.full_name){
                this.$swal('Name cannot be blank');
                return
            }
            

             if(!this.address){
                this.$swal('Address cannot be blank');
                return
            }

              if(!this.phone){
                this.$swal('Phone cannot be blank');
                return
            }
           

            const res = await axios.post(this.$store.state.api_url+'api/edit-account',{
                password : this.password,
                full_name : this.full_name,
                address : this.address,
                phone : this.phone,
                email : this.$store.state.email
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
                this.$swal(res)
                this.user_details()
               
            },

            async user_details(){
                const res = await axios.post(this.$store.state.api_url+'api/user-details',{
                    email : this.$store.state.email
                }).then(function(response){
                    return response.data
                }).catch(function(error){
                    console.log(error)
                })
                this.details = res

                res.forEach((data)=>{
                    this.full_name = data.fullName
                    this.phone = data.phoneNumber
                    this.address = data.address
                    this.email = data.email
                })
            }
            
    },
    created (){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.user_details()
    }
}

</script>