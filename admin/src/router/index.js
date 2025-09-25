import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import PersonalAccounts from '../components/PersonalAccounts'
import BusinessAccounts from '../components/BusinessAccounts'
import ViewPersonalAccount from '../components/ViewPersonalAccount'
import ViewBusinessAccount from '../components/ViewBusinessAccount'
import Retailers from '../components/Retailers'
import Distributors from '../components/Distributors'
import Manufacturers from '../components/Manufacturers'
import LoanApplications from '../components/LoanApplications'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

    {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
      {
    path: '/personal-accounts',
    name: 'personal-accounts',
    component: PersonalAccounts
  },

      {
    path: '/view-personal-account/:id',
    name: 'view-personal-account',
    component: ViewPersonalAccount
  },

       {
    path: '/view-business-account/:id',
    name: 'view-business-account',
    component: ViewBusinessAccount
  },

        {
    path: '/business-accounts',
    name: 'business-accounts',
    component: BusinessAccounts
  },

          {
    path: '/retailers',
    name: 'retailers',
    component: Retailers
  },

            {
    path: '/distributors',
    name: 'distributors',
    component: Distributors
  },


            {
    path: '/manufacturers',
    name: 'manufacturers',
    component: Manufacturers
  },


    {
    path: '/loan-applications',
    name: 'loan-applications',
    component: LoanApplications
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
