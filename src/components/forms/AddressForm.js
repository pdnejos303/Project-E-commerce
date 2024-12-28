// src/components/forms/AddressForm.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, Alert } from '@mui/material';

/*
AddressForm.js

หน้าที่ (ไทย):
- ฟอร์มสำหรับกรอกข้อมูลที่อยู่ของผู้ใช้งาน เช่น ในหน้าโปรไฟล์หรือขั้นตอน Checkout
- ผู้ใช้ใส่ชื่อผู้รับ, เบอร์โทร, ที่อยู่, รหัสไปรษณีย์ และอาจตั้งค่าที่อยู่นี้เป็นค่าหลัก

Functionality (English):
- An address form for users to input their recipient name, phone number, address details, postal code.
- Option to mark this address as default.
- Validate required fields before saving.
*/

const AddressForm = ({ onSave }) => {
  const [recipientName, setRecipientName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  const [saved, setSaved] = useState(false);

  // ตรวจสอบว่ากรอกข้อมูลครบ
  // Validate input fields
  const isValid = recipientName.trim() && phone.trim() && street.trim() && district.trim() && province.trim() && postalCode.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const addressData = {
        recipientName,
        phone,
        street,
        district,
        province,
        postalCode,
        isDefault
      };
      onSave && onSave(addressData);
      setSaved(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Address Form</Typography>
      {saved && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Address saved successfully!
        </Alert>
      )}
      <TextField
        label="Recipient Name"
        fullWidth
        required
        sx={{ mb: 2 }}
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
      />
      <TextField
        label="Phone Number"
        fullWidth
        required
        sx={{ mb: 2 }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        label="Street / House No."
        fullWidth
        required
        sx={{ mb: 2 }}
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <TextField
        label="District / City"
        fullWidth
        required
        sx={{ mb: 2 }}
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      />
      <TextField
        label="Province / State"
        fullWidth
        required
        sx={{ mb: 2 }}
        value={province}
        onChange={(e) => setProvince(e.target.value)}
      />
      <TextField
        label="Postal Code"
        fullWidth
        required
        sx={{ mb: 2 }}
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />

      <FormControlLabel
        control={<Checkbox checked={isDefault} onChange={(e) => setIsDefault(e.target.checked)} />}
        label="Set as default address"
      />

      <Button variant="contained" type="submit" disabled={!isValid}>
        Save Address
      </Button>
    </Box>
  );
};

export default AddressForm;
