<template>
	
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/dashboard" class="navbar-brand">
      <img src="/assets/images/logo.png" class="logo">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link active" aria-current="page">Home</router-link>
        </li>
      
        <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounts
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/personal-accounts">Personal accounts</router-link></li>

            <li><router-link class="dropdown-item" to="/business-accounts">Business accounts</router-link></li>
   
          </ul>
        </li>



         <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Businesses
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/retailers">Retailers</router-link></li>
            <li><router-link class="dropdown-item" to="/distributors">Distributors</router-link></li>
              <li><router-link class="dropdown-item" to="/manufacturers">Manufacturers</router-link></li>
   
          </ul>
        </li>


        <li class="nav-item dropdown">
          <router-link to="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Loans
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/loan-applications">Loan applications</router-link></li>
           
   
          </ul>
        </li>

       
      </ul>
      <div class="d-flex">
        <button @click="logout()" class="btn btn-1">Log Out</button>
      </div>
    </div>
  </div>
</nav>


</template>



<script>
  
  export default {

    name : 'header',

    methods : {
      logout(){
        this.$router.push('/')
      }
    }
  }

</script>


