<template>
	<div class="container">
		<Header />
	</div>


	<div class="container" style="padding-top:50px;">

		<div>
			<h6>Accounts</h6>
		</div>

		<div>
			<router-link class="btn shadow m-1" to="/personal-accounts"> <i class="bi bi-people-fill icon"></i> Personal accounts </router-link>
			<router-link class="btn shadow m-1" to="/business-accounts"> <i class="bi bi-people-fill icon"></i> Business accounts </router-link>
		</div>
		
	</div>



		<div class="container" style="padding-top:50px;">

		<div>
			<h6>Businesses</h6>
		</div>

		<div>
			<router-link class="btn shadow m-1" to="/retailers"> <i class="bi bi-grid-fill icon"></i> Retailers </router-link>
			<router-link class="btn shadow m-1" to="/distributors"> <i class="bi bi-grid-fill icon"></i> Distributors </router-link>
			<router-link class="btn shadow m-1" to="/manufacturers"> <i class="bi bi-grid-fill icon"></i> Manufacturers </router-link>
		</div>
		
	</div>





		<div class="container" style="padding-top:50px;">

		<div>
			<h6>Loans</h6>
		</div>

		<div>
			<router-link class="btn shadow m-1" to="/loan-applications"> <i class="bi bi-currency-dollar icon"></i> Loan applications </router-link>
			
		</div>
		
	</div>




	<Footer />


</template>


<script>
	import Header from './layouts/Header'
	import Footer from './layouts/Footer'

	export default{
		name : 'dashboard',
		components : {Header,Footer}
	}

</script>