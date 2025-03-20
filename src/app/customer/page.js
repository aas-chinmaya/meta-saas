import CustomerList from '@/components/customer/customerList'
import DashboardLayout from '@/components/layout/DashboardLayout'
import React from 'react'

const CustomerPage = () => {
  return (
    <DashboardLayout>
      <CustomerList/>
    </DashboardLayout>
  )
}

export default CustomerPage