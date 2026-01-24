import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, X } from 'lucide-react'

interface AlertLogoutProps {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void // Optional callback for additional logic
}

const AlertLogout: React.FC<AlertLogoutProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleLogout = () => {
    // Call the optional callback if provided
    if (onConfirm) {
      onConfirm()
    }

    // Navigate to home page
    navigate('/')

    // Close the modal
    onClose()
  }

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
            w-full max-w-md
            rounded-2xl
            border border-white/10
            bg-black/90
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,0.8)]
            overflow-hidden
          '
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className='flex items-center justify-between p-6 border-b border-white/10'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center'>
                <LogOut size={20} className='text-red-500' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Confirm Logout
                </h3>
                <p className='text-sm text-white/60 mt-0.5'>Are you sure?</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className='p-2 rounded-lg hover:bg-white/10 transition text-white/70 hover:text-white'
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className='p-6'>
            <p className='text-white/80 text-center'>
              Are you sure you want to logout? You'll need to sign in again to
              access your account.
            </p>
          </div>

          {/* Footer - Actions */}
          <div className='flex flex-col sm:flex-row gap-3 p-6 border-t border-white/10'>
            <button
              onClick={onClose}
              className='
                flex-1
                h-[44px]
                rounded-xl
                border border-white/20
                text-white text-sm font-medium
                hover:bg-white/10
                transition
                flex items-center
                justify-center
              '
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className='
                flex-1
                h-[44px]
                rounded-xl
                text-white text-sm font-semibold
                bg-gradient-to-r from-red-600 to-red-700
                hover:opacity-90
                transition
                flex items-center
                justify-center gap-2
              '
            >
              <LogOut size={16} />
              Yes, Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertLogout
