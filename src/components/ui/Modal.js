// src/components/ui/Modal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

/*
Modal.js

หน้าที่ (ไทย):
- แสดงหน้าต่าง Modal สำหรับการยืนยันหรือนำเสนอข้อมูลเสริม
- มีปุ่ม Confirm และ Cancel

Functionality (English):
- A reusable modal dialog with a title, content, and confirm/cancel buttons.
- Calls onConfirm on confirm click, and onClose when cancelled.
*/

const CustomModal = ({
  open,
  onClose,
  title,
  content,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {typeof content === 'string' ? (
          <Typography>{content}</Typography>
        ) : (
          content
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelText}</Button>
        <Button onClick={onConfirm} variant="contained">{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
