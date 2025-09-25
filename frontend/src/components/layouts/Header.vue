<template>

    <!-- header -->

<nav class="header-style navbar navbar-expand-sm navbar-light shadow-lg">
  <div class="container-fluid">

    <router-link to="/" class="navbar-brand logo" href="javascript:void(0)">
      
      <img class="logo-design" src="/assets/images/website-images/logo.png"> <span style="color:#1a1a1a;"> Very Pro  <sub class="text-danger">Trust, but Verify.
</sub> </span>

    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav mx-auto">

        <li class="nav-item">
          <router-link to="/" class="nav-link" href="/">Home</router-link>
        </li> 

        <li class="nav-item">
          <router-link to="/manufacturers" class="nav-link">Manufacturers</router-link>
        </li> 

         <li class="nav-item">
          <router-link to="/distributors" class="nav-link">Distributors</router-link>
        </li> 

         <li class="nav-item">
          <router-link to="/retailers" class="nav-link">Retailers</router-link>
        </li>  

      
    

      </ul>

      

      <form class="d-flex">

        <router-link to="/login" class="btn theme-btn-1" style="margin-right:10px;">Login</router-link>

         <router-link to="/register" class="btn theme-btn-2">Register</router-link>
       
      </form>
    </div>
  </div>
</nav>


</template>



<script>
  export default {
    name : 'header',
    
  }
</script>



