import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import './myprofile.css';

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(false);
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

    // Log the backend URL and token for debugging
    console.log("Backend URL:", backendUrl);
    console.log("Token:", token);
    console.log("User Data:", userData);

    // Function to update user profile data
    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('phone', userData.phone);
            formData.append('address', JSON.stringify(userData.address));
            formData.append('gender', userData.gender);
            formData.append('dob', userData.dob);
            if (image) formData.append('image', image);

const { data } = await axios.get(`${backendUrl}/api/user/myprofile`, {
    headers: { Authorization: `Bearer ${token}` }
});

            if (data.success) {
                toast.success(data.message);
                await loadUserProfileData();
                setIsEdit(false);
                setImage(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return userData ? (
        <div className="profile-container">
            {isEdit ? (
                <label htmlFor="image">
                    <div className="image-upload">
                        <img className="profile-img" src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                        {!image && <img className="upload-icon" src={assets.upload_icon} alt="" />}
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </label>
            ) : (
                <img className="profile-img" src={userData.image} alt="" />
            )}

            {isEdit ? (
                <input className="name-input" type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
            ) : (
                <p className="name">{userData.name}</p>
            )}

            <hr className="divider" />

            {/* CONTACT INFO */}
            <div className="section">
                <p className="section-title">CONTACT INFORMATION</p>
                <div className="info-grid">
                    <p className="label">Email:</p>
                    <p className="email">{userData.email}</p>
                    <p className="label">Phone:</p>
                    {isEdit ? (
                        <input className="input" type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                    ) : (
                        <p className="email">{userData.phone}</p>
                    )}
                    <p className="label">Address:</p>
                    {isEdit ? (
                        <p>
                            <input className="input" type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                            <br />
                            <input className="input" type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} />
                        </p>
                    ) : (
                        <p className="address">{userData.address.line1} <br /> {userData.address.line2}</p>
                    )}
                </div>
            </div>

            {/* BASIC INFO */}
            <div className="section">
                <p className="section-title">BASIC INFORMATION</p>
                <div className="info-grid">
                    <p className="label">Gender:</p>
                    {isEdit ? (
                        <select className="dropdown" onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    ) : (
                        <p className="text">{userData.gender}</p>
                    )}

                    <p className="label">Birthday:</p>
                    {isEdit ? (
                        <input className="input" type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                    ) : (
                        <p className="text">{userData.dob}</p>
                    )}
                </div>
            </div>

            {/* BUTTONS */}
            <div className="button-container">
                {isEdit ? (
                    <button onClick={updateUserProfileData} className="save-button">Save information</button>
                ) : (
                    <button onClick={() => setIsEdit(true)} className="edit-button">Edit</button>
                )}
            </div>
        </div>
    ) : null;
};

export default MyProfile;
