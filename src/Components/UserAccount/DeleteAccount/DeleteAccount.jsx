import React from 'react'

const DeleteAccount = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex items-center justify-center">
      <div className="w-[95%] h-full mt-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-[22px] text-blue-900 font-medium">
            Delete Account
          </h1>
        </div>
        <div className="bg-white border border-gray-400 rounded-lg py-4 px-8 mb-4">
          <div className="flex justify-between items-center pb-2 border-b mb-4 border-gray-300">
            <h2>ACCOUNT DELETION</h2>
          </div>

          <div className="flex mb-8">
          <p>
          As per the GDPR Law we have added the feature so you can delete your account with personal 
          information any time. Please Note, The Account is not restorable so the action you perform 
          can not be undone or restored later. This Action will delete your account from our website 
          completely. You newsletter subscription will be unsubscribed too automatically.
          </p>
          </div>

          <div >
            <button className="bg-blue text-white py-2 px-4 rounded-lg">
              Delete My Account
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount
