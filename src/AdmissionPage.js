import React, { useState } from 'react';
import './AdmissionPage.css';
import { useNavigate } from 'react-router-dom';

const AdmissionPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        dob: '',
        fatherName: '',
        motherName: '',
        educationalQualification: '',
        phoneNumber: '',
        aadharNumber: '',
        preferredBatch: '',
        previousExperience: '',
        institutionType: [],
        institutionName: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                institutionType: checked
                    ? [...formData.institutionType, value]
                    : formData.institutionType.filter((item) => item !== value),
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Handle validations
        if (name === 'dob') {
            const age = calculateAge(value);
            setFormData({ ...formData, dob: value, age: age.toString() });
        }
        if (name === 'phoneNumber' && !/^\d{10}$/.test(value)) {
            setErrors({ ...errors, phoneNumber: 'Phone number must be exactly 10 digits.' });
        } else {
            setErrors({ ...errors, phoneNumber: '' });
        }
        if (name === 'aadharNumber' && !/^\d{12}$/.test(value)) {
            setErrors({ ...errors, aadharNumber: 'Aadhar number must be exactly 12 digits.' });
        } else {
            setErrors({ ...errors, aadharNumber: '' });
        }
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Final validation check
        for (const key in formData) {
            if (!formData[key] && key !== 'institutionType' && key !== 'previousExperience') {
                setErrors({ ...errors, [key]: `${key} is required.` });
                return;
            }
        }

        if (formData.phoneNumber.length !== 10) {
            setErrors({ ...errors, phoneNumber: 'Phone number must be exactly 10 digits.' });
            return;
        }
        if (formData.aadharNumber.length !== 12) {
            setErrors({ ...errors, aadharNumber: 'Aadhar number must be exactly 12 digits.' });
            return;
        }

        console.log('Form data submitted:', formData);
        navigate('/payment-gateway');
    };

    const maxDate = new Date().toISOString().split('T')[0]; // Max date for DOB

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Admission Form</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} readOnly />
                    {errors.age && <span className="error">{errors.age}</span>}
                </label>
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </label>
                <label>
                    D.O.B:
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} max={maxDate} required />
                    {errors.dob && <span className="error">{errors.dob}</span>}
                </label>
                <label>
                    Father's Name:
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                    {errors.fatherName && <span className="error">{errors.fatherName}</span>}
                </label>
                <label>
                    Mother's Name:
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
                    {errors.motherName && <span className="error">{errors.motherName}</span>}
                </label>
                <label>
                    Educational Qualification:
                    <input type="text" name="educationalQualification" value={formData.educationalQualification} onChange={handleChange} required />
                    {errors.educationalQualification && <span className="error">{errors.educationalQualification}</span>}
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                </label>
                <label>
                    Aadhar Number:
                    <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} required />
                    {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
                </label>
                <label>
                    Preferred Batch:
                    <select name="preferredBatch" value={formData.preferredBatch} onChange={handleChange} required>
                        <option value="">Select Batch</option>
                        <option value="batch1">Batch 1: 7.00 AM to 9.00 AM</option>
                        <option value="batch2">Batch 2: 5.00 PM to 7.00 PM</option>
                        <option value="batch3">Batch 3: 7.30 PM to 9.00 PM</option>
                    </select>
                    {errors.preferredBatch && <span className="error">{errors.preferredBatch}</span>}
                </label>
                <label>
                    Previous Experience:
                    <textarea name="previousExperience" value={formData.previousExperience} onChange={handleChange} rows="4"></textarea>
                    {errors.previousExperience && <span className="error">{errors.previousExperience}</span>}
                </label>
                <fieldset>
                    <legend>Institution Type</legend>
                    <label>
                        <input type="checkbox" name="institutionType" value="School" onChange={handleChange} />
                        School
                    </label>
                    <label>
                        <input type="checkbox" name="institutionType" value="College" onChange={handleChange} />
                        College
                    </label>
                    <label>
                        <input type="checkbox" name="institutionType" value="Work" onChange={handleChange} />
                        Work
                    </label>
                    {errors.institutionType && <span className="error">{errors.institutionType}</span>}
                </fieldset>
                <label>
                    Name of the Institution:
                    <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} />
                    {errors.institutionName && <span className="error">{errors.institutionName}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionPage;
