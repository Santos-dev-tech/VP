<template>

    <div class="container">
        <Header />
    </div>

    
    <section style="padding-top: 50px;">

        <div class="container">

            <div>
                <router-link to="/dashboard" class="btn"> <i class="bi bi-arrow-left"></i> Go back </router-link>
                <h5>Create shop</h5>
            </div>

            <div class="row">
                
                <div class="col-md-8 shadow p-3 rounded">

                    <div>
                    
                        <form @submit.prevent="create_shop()">
                           
                           <div class="row">

                             <div class="col-md-12">
                            <div class="form-group" style="padding-top: 10px;">
                                <label>Select account</label>
                            <select class="form-select input-design" v-model="account_type">
                                <option selected>Manufacturer</option>
                                <option>Distributor</option>
                                <option>Retailer</option>
                            </select>
                                
                            </div>
                               </div>

                               <div class="col-md-12">
                                 <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Name of shop" v-model="company_name">
                            </div>
                            </div>

                            <div class="col-md-6">
                                 <div class="form-group" style="padding-top: 10px;">
                                <input type="email" class="form-control input-design" placeholder="Email" v-model="email">
                            </div>
                            </div>
                               
                               <div class="col-md-6">
                                    <div class="form-group" style="padding-top: 10px;">
                                <input type="text" class="form-control input-design" placeholder="Location" v-model="location">
                            </div>
                               </div>


                           </div>

                            <div style="padding-top: 20px;">
                                <button class="btn theme-btn-1">Create</button>
                            
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
            email : '',
            company_name : '',
            location : '',
            last_name : '',
            account_type : ''
        }
    },
    methods : {
        async create_shop(){
            if(!this.email){
                this.$swal('Email cannot be blank');
                return
            }
            
            
            if(!this.account_type){
                this.$swal('Account type cannot be blank');
                return
            }

            if(!this.company_name){
                this.$swal('Shop name cannot be blank');
                return
            }
            
            

            const res = await axios.post(this.$store.state.api_url+'api/create-shop',{
                email : this.email,
                location : this.location,
                company_name : this.company_name,
                account_type : this.account_type,
                user_id : this.$store.state.user_id
            }).then(function(response){
                return response.data
            }).catch(function(error){
                console.log(error)
            })
            if(res=='Account created successfully'){
                this.$swal(res)
                this.company_name = ''
                this.email = ''
                this.location = ''
                this.account_type = ''
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