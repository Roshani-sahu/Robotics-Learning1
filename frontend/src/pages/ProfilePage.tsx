import React, { useState } from "react"
import {
  Camera,
  Mail,
  ShieldCheck,
} from "lucide-react"
import { useAuth } from '../context/AuthContext'
import { authAPI } from '../services/api'

const ProfilePage: React.FC = () => {
  const { user } = useAuth()
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Form State
  const [profileData, setProfileData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    photoURL: ''
  })

  // Fetch Profile on Load
  React.useEffect(() => {
    if (user) fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    try {
      const response = await authAPI.getProfile();
      const backendUser = response.data.user;
      setProfileData({
        firstName: backendUser.firstName || '',
        middleName: backendUser.middleName || '',
        lastName: backendUser.lastName || '',
        photoURL: backendUser.photoURL || ''
      });
    } catch (error) {
      console.error('Failed to fetch profile', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editing) {
      setEditing(true);
      return;
    }

    setSaving(true);
    try {
      await authAPI.updateProfile(profileData);
      setEditing(false);
      // alert('Profile updated!');
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = () => {
    // For now, prompt for URL or implement file upload later
    const url = prompt("Enter new profile image URL:", profileData.photoURL);
    if (url !== null) handleChange('photoURL', url);
  }

  if (loading) return <div className="text-white text-center pt-20">Loading profile...</div>

  return (
    <section className="bg-black text-white px-6">
      <div className="max-w-[1270px] mx-auto space-y-10">

        {/* ================= HEADER ================= */}
        <div>
          <h1 className="text-4xl font-semibold">Profile</h1>
          <p className="text-gray-400 mt-2">
            Manage your identity and account preferences
          </p>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ========== LEFT: IDENTITY PANEL ========== */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-gradient-to-br
              from-white/5 via-white/3 to-[#00F076]/10
              border border-white/10 p-8">

              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {profileData.photoURL ? (
                    <img
                      src={profileData.photoURL}
                      alt="Profile"
                      onError={(e) => {
                        // If image fails to load, clear the URL so it falls back to initials
                        // We do this by locally updating state only if it's not already cleared to avoid loops
                        // But simpler approach for now is just valid src check or manual state update
                        // For this implementation, let's keep it simple:
                        // optimizing by letting user re-upload or see broken image is better than complex fallback loops
                        // But to match request:
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const div = document.createElement('div');
                          div.className = "w-36 h-36 rounded-full bg-gradient-to-br from-[#00F076]/20 to-[#00F076]/5 ring-4 ring-[#00F076]/30 flex items-center justify-center text-4xl font-bold text-[#00F076]";
                          div.innerText = (profileData.firstName?.[0] || user?.email?.[0] || 'U').toUpperCase();
                          parent.insertBefore(div, e.currentTarget);
                        }
                      }}
                      className="w-36 h-36 rounded-full object-cover ring-4 ring-[#00F076]/30"
                    />
                  ) : (
                    <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#00F076]/20 to-[#00F076]/5 ring-4 ring-[#00F076]/30 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#00F076]">
                        {(profileData.firstName?.[0] || user?.email?.[0] || 'U').toUpperCase()}
                      </span>
                    </div>
                  )}

                  {editing && (
                    <button
                      onClick={handlePhotoUpload}
                      className="absolute bottom-2 right-2
                        w-9 h-9 rounded-full bg-[#00F076]
                        flex items-center justify-center text-black
                        hover:scale-105 transition"
                    >
                      <Camera size={18} />
                    </button>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  {profileData.firstName ? `${profileData.firstName} ${profileData.lastName}` : (user?.email?.split('@')[0] || 'User')}
                </h3>
                <p className="text-sm text-gray-400">
                  Student • {user?.emailVerified ? 'Verified' : 'Unverified'}
                </p>
              </div>

              {/* Account Chips */}
              <div className="mt-8 space-y-4">
                <StatusItem label="Role" value="Student" color="green" />
                <StatusItem label="Status" value={user?.emailVerified ? 'Verified' : 'Unverified'} color={user?.emailVerified ? 'green' : 'pink'} />
                <StatusItem label="Member Since" value={new Date().toLocaleDateString()} />
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
                  onClick={handleSave}
                  disabled={saving}
                  className={`px-5 py-2 rounded-xl border border-white/10
                  bg-white/5 hover:bg-white/10 transition
                  ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {saving ? "Saving..." : editing ? "Save Changes" : "Edit Profile"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  value={profileData.firstName}
                  onChange={(e: any) => handleChange('firstName', e.target.value)}
                  disabled={!editing}
                />
                <Input
                  label="Middle Name"
                  placeholder="Optional"
                  value={profileData.middleName}
                  onChange={(e: any) => handleChange('middleName', e.target.value)}
                  disabled={!editing}
                />
                <Input
                  label="Last Name"
                  value={profileData.lastName}
                  onChange={(e: any) => handleChange('lastName', e.target.value)}
                  disabled={!editing}
                />
                <Input
                  label="Email"
                  value={user?.email || ''}
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
                Your account is {user?.emailVerified ? 'verified and secure' : 'created but not verified'}
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
  helper,
  onChange
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
        value={value}
        onChange={onChange}
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
