import React, { useState } from "react"
import {
  CreditCard,
  ShieldCheck,
  Tag,
  Lock,
  CheckCircle
} from "lucide-react"
import Header2 from "../components/Header2"
import { usePayment } from "../hooks/usePayment"
import { useAuth } from "../context/AuthContext"
import PaymentSuccessPopup from "../components/PaymentSuccessPopup"

const CheckoutPage: React.FC = () => {
  const { user, loading: authLoading } = useAuth()
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const { initializePayment, loading } = usePayment(() => setShowSuccessPopup(true))
  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "paypal">("razorpay")
  const [agree, setAgree] = useState(false)

  // Sample course data - replace with actual course data
  const courseData = {
    id: "i3fqAkTyIANhEIgnGXCx", // Real course ID from Firestore
    title: "Modern Robot Learning from Scratch",
    price: 24999
  }

  const handlePayment = () => {
    if (!agree) return
    if (authLoading) return

    if (!user) {
      alert('Please login first');
      return;
    }

    if (paymentMethod === "razorpay") {
      console.log('User authenticated:', user.email);
      initializePayment(courseData.id)
    } else {
      alert("PayPal integration coming soon!")
    }
  }

  return (
    <>
    <section className="min-h-screen bg-black text-white px-6 pt-24 pb-16">
      <Header2 />

      <h1 className="text-3xl md:text-4xl md:ml-14 my-6 font-semibold">
        Complete Enrollment
      </h1>

      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-7 space-y-8">

          {/* Program */}
          <div className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-3">
              Selected Program
            </h3>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-200">
                  Modern Robot Learning from Scratch
                </p>
                <p className="text-sm text-gray-400">
                  Bootcamp • Lifetime access
                </p>
              </div>

              <span className="text-[#00F076] font-semibold text-lg">
                ₹24,999
              </span>
            </div>
          </div>

          {/* Billing */}
          {/* <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Billing Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Phone Number" />
              <input className="input md:col-span-2" placeholder="Street Address" />
              <input className="input" placeholder="City" />
              <input className="input" placeholder="State / Province" />
              <input className="input" placeholder="Country" />
              <input className="input" placeholder="ZIP / Postal Code" />
            </div>
          </div> */}

          {/* Payment Method */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold">
              Payment Method
            </h3>

            {/* Razorpay */}
            <button
              onClick={() => setPaymentMethod("razorpay")}
              className={`w-full p-5 rounded-xl border transition text-left
              ${paymentMethod === "razorpay"
                  ? "border-[#00F076] bg-[#00F076]/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"}`}
            >
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Razorpay</span>
                    {paymentMethod === "razorpay" && (
                      <CheckCircle size={16} className="text-[#00F076]" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400">
                    UPI • Cards • Net Banking (INR)
                  </p>

                  {/* Icons */}
                  <div className="flex gap-3 mt-2 opacity-80">
                    <img src="/media/icon/google-pay.png" className="h-5 invert " />
                    <img src="/media/icon/visa.png" className="h-5 " />
                    <img src="/media/icon/mastercard.png" className="h-5 " />
                  </div>
                </div>

                <CreditCard className="text-gray-400" />
              </div>
            </button>

            {/* PayPal */}
            {/* <button
              onClick={() => setPaymentMethod("paypal")}
              className={`w-full p-5 rounded-xl border transition text-left
              ${paymentMethod === "paypal"
                ? "border-[#00F076] bg-[#00F076]/10"
                : "border-white/10 bg-white/5 hover:bg-white/10"}`}
            >
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">PayPal</span>
                    {paymentMethod === "paypal" && (
                      <CheckCircle size={16} className="text-[#00F076]" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400">
                    International payments (USD)
                  </p>

                  <div className="flex gap-3 mt-2 opacity-80">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg" className="h-5 invert" />
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visa.svg" className="h-5 invert" />
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mastercard.svg" className="h-5 invert" />
                  </div>
                </div>

                <CreditCard className="text-gray-400" />
              </div>
            </button> */}
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1 accent-[#00F076]"
            />
            I agree to the Terms, Privacy Policy, and Refund Policy
          </label>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-5 space-y-8">

          {/* Promo */}
          {/* <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} />
              <h4 className="font-semibold">Promo Code</h4>
            </div>

            <div className="flex gap-2">
              <input className="input flex-1" placeholder="Enter code" />
              <button className="px-5 rounded-lg bg-[#00F076]/20 text-[#00F076] hover:bg-[#00F076]/30 transition">
                Apply
              </button>
            </div>
          </div> */}

          {/* Summary */}
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-black">
            <h4 className="font-semibold mb-4">
              Payment Summary
            </h4>

            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹24,999</span>
            </div>

            <div className="flex justify-between mt-3 font-semibold text-xl">
              <span>Total</span>
              <span className="text-[#00F076]">₹24,999</span>
            </div>
          </div>

          {/* Security */}
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <ShieldCheck className="text-[#00F076]" />
            Encrypted & PCI-DSS compliant payment
          </div>

          {/* CTA */}
          <button
            onClick={handlePayment}
            disabled={!agree || loading}
            className={`w-full py-4 rounded-xl font-semibold text-black
            flex items-center justify-center gap-2 transition
            ${agree && !loading
                ? "bg-[#00F076] hover:scale-[1.02]"
                : "bg-gray-600 cursor-not-allowed"}`}
          >
            <Lock size={16} />
            {loading ? "Processing..." : "Pay ₹24,999 & Enroll Now"}
          </button>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style>{`
        .input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px 14px;
          border-radius: 10px;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #00F076;
        }
      `}</style>
    </section>
    
    <PaymentSuccessPopup 
      isOpen={showSuccessPopup} 
      onClose={() => setShowSuccessPopup(false)} 
    />
    </>
  )
}

export default CheckoutPage
