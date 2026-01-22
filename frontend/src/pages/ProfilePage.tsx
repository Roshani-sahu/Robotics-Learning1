import React, { useState } from "react"
import {
  Camera,
  Mail,
//   User,
  ShieldCheck,
//   CalendarDays
} from "lucide-react"

const ProfilePage: React.FC = () => {
  const [editing, setEditing] = useState(false)

  return (
    <section className=" bg-black text-white px-6  ">
     

      <div className="max-w-[1270px]  mx-auto space-y-10">

        {/* ================= HEADER ================= */}
        <div>
          <h1 className="text-4xl  font-semibold">Profile</h1>
          <p className="text-gray-400 mt-2">
            Manage your identity and account preferences
          </p>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-12">

          {/* ========== LEFT: IDENTITY PANEL ========== */}
          <div className="lg:col-span-4 ">
            <div className="sticky top-28 rounded-3xl bg-gradient-to-br
              from-white/5 via-white/3 to-[#00F076]/10
              border border-white/10 p-8">

              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src="/media/avatar.avif"
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover
                    ring-4 ring-[#00F076]/30"
                  />
                  <button
                    className="absolute bottom-2 right-2
                    w-9 h-9 rounded-full bg-[#00F076]
                    flex items-center justify-center text-black
                    hover:scale-105 transition"
                  >
                    <Camera size={18} />
                  </button>
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  Roshani Sahu
                </h3>
                <p className="text-sm text-gray-400">
                  Student • Active
                </p>
              </div>

              {/* Account Chips */}
              <div className="mt-8 space-y-4">
                <StatusItem label="Role" value="Student" color="green" />
                <StatusItem label="Status" value="Active" color="pink" />
                <StatusItem label="Member Since" value="Jan 21, 2026" />
              </div>
            </div>
          </div>

          {/* ========== RIGHT: PROFILE DETAILS ========== */}
          <div className="lg:col-span-8 space-y-12">

            {/* PERSONAL INFO */}
            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">
                  Personal Information
                </h2>
                <button
                  onClick={() => setEditing(!editing)}
                  className="px-5 py-2 rounded-xl border border-white/10
                  bg-white/5 hover:bg-white/10 transition"
                >
                  {editing ? "Save Changes" : "Edit Profile"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="First Name" value="Roshani" disabled={!editing} />
                <Input label="Middle Name" placeholder="Optional" disabled={!editing} />
                <Input label="Last Name" value="Sahu" disabled={!editing} />
                <Input
                  label="Email"
                  value="roshanishahu2003@gmail.com"
                  disabled
                  icon={<Mail size={16} />}
                  helper="Email cannot be changed"
                />
              </div>
            </section>

            {/* SECURITY INFO */}
            <section className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-gray-300">
                <ShieldCheck className="text-[#00F076]" />
                Your account is verified and secure
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

const Input = ({
  label,
  value,
  placeholder,
  disabled,
  icon,
  helper
}: any) => (
  <div className="space-y-2">
    <label className="text-sm text-gray-400">{label}</label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        disabled={disabled}
        defaultValue={value}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl
          ${icon ? "pl-10" : ""}
          bg-white/5 border border-white/10
          text-white outline-none
          focus:border-[#00F076]
          disabled:opacity-60`}
      />
    </div>
    {helper && <p className="text-xs text-gray-500">{helper}</p>}
  </div>
)

const StatusItem = ({
  label,
  value,
  color
}: {
  label: string
  value: string
  color?: "green" | "pink"
}) => {
  const colorMap: any = {
    green: "bg-green-500/20 text-green-400",
    pink: "bg-pink-500/20 text-pink-400"
  }

  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-400">{label}</span>
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold
        ${color ? colorMap[color] : "bg-white/10 text-gray-300"}`}
      >
        {value}
      </span>
    </div>
  )
}

export default ProfilePage
