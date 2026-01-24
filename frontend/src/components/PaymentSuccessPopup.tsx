import React from 'react'
import { Link } from 'react-router-dom'

interface PaymentSuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

const PaymentSuccessPopup: React.FC<PaymentSuccessPopupProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='fixed inset-0 z-[1000] flex items-center justify-center p-4'>
        <div
          className='
            w-full max-w-sm
            rounded-2xl
            border border-white/10
            bg-black/90
            backdrop-blur-xl
            p-6
            text-center
          '
          onClick={e => e.stopPropagation()}
        >
          <h3 className='text-lg font-semibold text-white mb-2'>
            Payment successful! You now have access.
          </h3>

          <Link
            to='/dashboard'
            onClick={onClose}
            className='
              mt-4
              w-full
              h-[44px]
              rounded-xl
              text-black text-sm font-semibold
              bg-[#00F076]
              hover:opacity-90
              transition
              flex items-center
              justify-center
            '
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccessPopup