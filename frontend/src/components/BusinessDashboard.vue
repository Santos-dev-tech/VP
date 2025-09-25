<template>

<div class="container">
<Header />
</div>

<div class="container">
    <div>
    <router-link to="/dashboard" class="btn"> <i class="bi bi-arrow-left"></i> Go back </router-link>
</div>
</div>

<BusinessMenu v-if="business_id" :business_name="name" :business_id="business_id" />





<section style="padding-top: 10px;">


<div class="container">



<div class="row">

<!-- <div class="col-md-4" style="padding-top:20px;" v-if="this.$store.state.account_type=='Manufacturer' ">

<div style="background-color: #FFDDD6; padding:30px; border-radius: 10px;" class="shadow-lg">
    <h6>Manage batches</h6>
    <router-link :to="{name:'new-batch',params : { 'business_id' : business_id }}" class="btn" v-if="business_id"> <i class="bi bi-plus"></i> New batch
</router-link>  <br />




</div>


</div> -->



<div class="col-md-4" style="padding-top:20px;">

<div style="background-color: #FEABB8; padding:30px; border-radius: 10px;" class="shadow-lg">
    <h6>View batches</h6>
   
<div v-if="this.$store.state.account_type=='Retailer' ">
<router-link :to="{name:'received-batches',params : { 'business_id' : business_id }}" class="btn " v-if="business_id"> <i class="bi bi-list icon"></i> Retailer batches
</router-link>    
</div>

<div v-if="this.$store.state.account_type=='Distributor' ">

<router-link :to="{name:'d-received-batches',params : { 'business_id' : business_id }}" class="btn" v-if="business_id"> <i class="bi bi-list icon"></i>  Distributor batches
</router-link>
    
</div>


<div v-if="this.$store.state.account_type=='Manufacturer' ">
    <router-link :to="{name:'business-batches',params : { 'business_id' : business_id }}" class="btn" v-if="business_id"> <i class="bi bi-list"></i> List batches
</router-link>
</div>


</div>


</div>


<div class="col-md-4" style="padding-top:20px;" v-if="this.$store.state.account_type=='Retailer' || this.$store.state.account_type=='Distributor'  ">

<div style="background-color: #EAEAEA; padding:30px; border-radius: 10px;" class="shadow-lg">
    <h6>Suppliers</h6>

     <router-link :to="{name:'new-supplier',params : { 'business_id' : business_id }}" class="btn" v-if="business_id"> <i class="bi bi-plus icon"></i> New supplier</router-link> <br />

    <router-link :to="{name:'my-suppliers',params : { 'business_id' : business_id }}" class="btn" v-if="business_id"> <i class="bi bi-list icon"></i> My suppliers</router-link>
   


</div>


</div>


<div class="col-md-4" style="padding-top:20px;">

<div v-if="this.$store.state.account_type=='Retailer' ">
   
    <router-link :to="{name:'retailer-sales',params : { 'business_id' : business_id }}" class="btn theme-btn-3" v-if="business_id" style="margin-right: 5px;"> <i class="bi bi-list icon"></i> Retailer sales</router-link>

    <router-link :to="{name:'retailer-website-orders',params : { 'business_id' : business_id }}" class="btn theme-btn-3" v-if="business_id"> <i class="bi bi-list icon"></i> Website orders</router-link>
   
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
import BusinessMenu from './layouts/BusinessMenu'
import axios from 'axios'
export default{
name : 'home',
components : {Header,Slider,Footer,BusinessMenu},
data () {
return { 
name : '',
business_id : '',
account_type : ''

}
},
methods : {

},
created (){
window.scrollTo({ top: 0, behavior: 'smooth' });
this.business_id = this.$store.state.business_id
this.account_type = this.$store.state.account_type
this.name = this.$store.state.business_name

if(!this.business_id){
this.$store.state.message = 'Forbidden access.Only businesses allowed'
this.$router.push('/message')
}

},



}

</script>