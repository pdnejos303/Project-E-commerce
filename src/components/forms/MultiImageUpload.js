// src/components/forms/MultiImageUpload.js
import React, { useState } from 'react';
import { Box, Typography, Button, LinearProgress, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

/*
MultiImageUpload.js

หน้าที่ (ไทย):
- ฟอร์มสำหรับอัปโหลดภาพหลายไฟล์
- ผู้ใช้สามารถเลือกไฟล์ผ่าน dialog หรือ drag&drop (สมมุติ)
- แสดงตัวอย่างรูปภาพที่เลือก
- ลบรูปที่ไม่ต้องการออกก่อนอัปโหลด
- ตรวจสอบประเภทรูปภาพ (jpg, png) และขนาด (สมมุติ <=5MB)
- ปุ่มอัปโหลดและแสดง progress bar ขณะอัปโหลด (mock)

Functionality (English):
- A form for uploading multiple images.
- Allows user to select multiple files, preview them, remove unwanted ones.
- Validate file type (jpg, png) and size (<=5MB).
- Show upload progress with a LinearProgress bar (mock).
- On upload, calls a callback to handle the images.
*/

const MAX_SIZE_MB = 5; 
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

const MultiImageUpload = ({ onUpload }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    let validFiles = [];
    let hasError = false;

    selectedFiles.forEach(file => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        hasError = true;
        setError('Only JPG and PNG files are allowed.');
      } else if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        hasError = true;
        setError(`File ${file.name} exceeds ${MAX_SIZE_MB}MB limit.`);
      } else {
        validFiles.push(file);
      }
    });

    if (!hasError) {
      setError('');
    }

    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setError('No files selected.');
      return;
    }
    setError('');
    setUploading(true);
    setUploadProgress(0);
    // สมมุติการอัปโหลดทีละนิดเพื่อโชว์ progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          onUpload && onUpload(files);
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Upload Images</Typography>
      <input
        type="file"
        multiple
        accept="image/jpeg,image/png"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        id="multi-image-input"
      />
      <label htmlFor="multi-image-input">
        <Button variant="outlined" component="span">
          Select Images
        </Button>
      </label>

      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {files.map((file, index) => {
          const previewUrl = URL.createObjectURL(file);
          return (
            <Box key={index} sx={{ position: 'relative', width: 100, height: 100 }}>
              <Box 
                component="img"
                src={previewUrl}
                alt={file.name}
                sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 1 }}
              />
              <IconButton 
                size="small" 
                sx={{ position: 'absolute', top: 4, right: 4, backgroundColor: 'rgba(0,0,0,0.5)' }} 
                onClick={() => handleRemoveFile(index)}
              >
                <DeleteIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          );
        })}
      </Box>

      {uploading && (
        <Box sx={{ mt: 2 }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
          <Typography variant="body2">{uploadProgress}%</Typography>
        </Box>
      )}

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleUpload} disabled={uploading || files.length === 0}>
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default MultiImageUpload;
