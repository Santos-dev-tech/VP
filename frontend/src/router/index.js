import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import BusinessDashboard from '../components/BusinessDashboard'
import BusinessProducts from '../components/BusinessProducts'
import PurchaseOrders from '../components/PurchaseOrders'
import OutgoingOrders from '../components/OutgoingOrders'
import NewProduct from '../components/NewProduct'
import BusinessBatches from '../components/BusinessBatches'
import NewSupplier from '../components/NewSupplier'
import MySuppliers from '../components/MySuppliers'
import NewBatch from '../components/NewBatch'
import CreateOrder from '../components/CreateOrder'
import ReceivedBatches from '../components/ReceivedBatches'
import DReceivedBatches from '../components/DReceivedBatches'
import AddProducts from '../components/AddProducts'
import DProducts from '../components/DProducts'
import CreateRetailerOrder from '../components/CreateRetailerOrder'
import RetailerOrders from '../components/RetailerOrders'
import Shop from '../components/Shop'
import RetailerOutgoingOrders from '../components/RetailerOutgoingOrders'
import SendMoney from '../components/SendMoney'
import Wallet from '../components/Wallet'
import ManufacturerInventory from '../components/ManufacturerInventory'
import DistributorInventory from '../components/DistributorInventory'
import RetailerInventory from '../components/RetailerInventory'
import Message from '../components/Message'
import RetailerSales from '../components/RetailerSales'
import UserTransactions from '../components/UserTransactions'
import EditProduct from '../components/EditProduct'
import Register from '../components/Register'
import Account from '../components/Account'
import CreateShop from '../components/CreateShop'
import Manufacturers from '../components/Manufacturers'
import Retailers from '../components/Retailers'
import Distributors from '../components/Distributors'
import ProductStock from '../components/ProductStock'
import AddRetailerProduct from '../components/AddRetailerProduct'
import RetailerProducts from '../components/RetailerProducts'

import ManufacturerProducts from '../components/ManufacturerProducts'
import DistributorProducts from '../components/DistributorProducts'
import RetailerProductList from '../components/RetailerProductList'
import ForgotPassword from '../components/ForgotPassword'
import Loans from '../components/Loans'
import RetailerWebsiteOrders from '../components/RetailerWebsiteOrders'


import MyShoppingOrders from '../components/MyShoppingOrders'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/business-dashboard',
    name: 'business-dashboard',
    component: BusinessDashboard
  },

  {
    path: '/business-products/:business_id',
    name: 'business-products',
    component: BusinessProducts
  },

  {
    path: '/purchase-orders/:business_id',
    name: 'purchase-orders',
    component: PurchaseOrders
  },

  {
    path: '/outgoing-orders/:business_id',
    name: 'outgoing-orders',
    component: OutgoingOrders
  },

  {
    path: '/new-product/:business_id',
    name: 'new-product',
    component: NewProduct
  },

  {
    path: '/business-batches/:business_id',
    name: 'business-batches',
    component: BusinessBatches
  },

  {
    path: '/new-supplier/:business_id',
    name: 'new-supplier',
    component: NewSupplier
  },

  {
    path: '/my-suppliers/:business_id',
    name: 'my-suppliers',
    component: MySuppliers
  },

  {
    path: '/new-batch/:business_id',
    name: 'new-batch',
    component: NewBatch
  },

  {
    path: '/create-order/:business_id',
    name: 'create-order',
    component: CreateOrder
  },

  {
    path: '/d-received-batches/:business_id',
    name: 'd-received-batches',
    component: DReceivedBatches
  },


  {
    path: '/received-batches/:business_id',
    name: 'received-batches',
    component: ReceivedBatches
  },

  {
    path: '/add-products/:business_id',
    name: 'add-products',
    component: AddProducts
  },


  {
    path: '/d-products/:business_id',
    name: 'd-products',
    component: DProducts
  },


  {
    path: '/create-retailer-order/:business_id',
    name: 'create-retailer-order',
    component: CreateRetailerOrder
  },

  {
    path: '/retailer-orders/:business_id',
    name: 'retailer-orders',
    component: RetailerOrders
  },


  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },

   {
    path: '/retailer-outgoing-orders/:business_id',
    name: 'retailer-outgoing-orders',
    component: RetailerOutgoingOrders
  },

  {
    path: '/send-money',
    name: 'send-money',
    component: SendMoney
  },

    {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },

    {
    path: '/manufacturer-inventory/:business_id',
    name: 'manufacturer-inventory',
    component: ManufacturerInventory
  },

    {
    path: '/distributor-inventory/:business_id',
    name: 'distributor-inventory',
    component: DistributorInventory
  },

      {
    path: '/retailer-inventory/:business_id',
    name: 'retailer-inventory',
    component: RetailerInventory
  },

   {
    path: '/message',
    name: 'message',
    component: Message
  },

  {
    path: '/retailer-sales',
    name: 'retailer-sales',
    component: RetailerSales
  },

   {
    path: '/user-transactions',
    name: 'user-transactions',
    component: UserTransactions
  },

   {
    path: '/edit-product/:product_id',
    name: 'edit-product',
    component: EditProduct
  },

   {
    path: '/register',
    name: 'register',
    component: Register
  },

   {
    path: '/account',
    name: 'account',
    component: Account
  },

  {
    path: '/create-shop',
    name: 'create-shop',
    component: CreateShop
  },

  {
    path: '/manufacturers',
    name: 'manufacturers',
    component: Manufacturers
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
    path: '/product-stock/:product_id',
    name: 'product-stock',
    component: ProductStock
  },

  {
    path: '/add-retailer-product/:business_id',
    name: 'add-retailer-product',
    component: AddRetailerProduct
  },

  {
    path: '/r-products/:business_id',
    name: 'r-products',
    component: RetailerProducts
  },


  {
    path: '/manufacturer-products/:business_id',
    name: 'manufacturer-products',
    component: ManufacturerProducts
  },

   {
    path: '/distributor-products/:business_id',
    name: 'distributor-products',
    component: DistributorProducts
  },

   {
    path: '/retailer-product-list/:business_id',
    name: 'retailer-product-list',
    component: RetailerProductList
  },

    {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },

      {
    path: '/loans',
    name: 'loans',
    component: Loans
  },

     {
    path: '/retailer-website-orders/:business_id',
    name: 'retailer-website-orders',
    component: RetailerWebsiteOrders
  },

       {
    path: '/my-shopping-orders',
    name: 'my-shopping-orders',
    component: MyShoppingOrders
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
