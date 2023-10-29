import { Box, Button, Modal, Typography } from '@mui/material';
import { MouseEventHandler } from 'react';

interface ModalProps {
  open?: boolean;
  handleCancelClick?: MouseEventHandler;
  handleDeleteClick?: MouseEventHandler;
}

function ModalElement({ open, handleCancelClick, handleDeleteClick }: ModalProps) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    borderRadius: '12px',
    boxShadow: 24,
    py: '20px',
    px: '28px'
  };
  return (
    <>
      <Modal open={open}>
        <Box sx={{ ...style, width: 350 }}>
          <Box>
            <Typography variant="h6">Подтверждение</Typography>
            <Typography variant="body1" sx={{ mt: '6px' }}>
              Удалить Олег Петров из избранных?
            </Typography>
          </Box>
          <Box sx={{ alignSelf: 'flex-end' }}>
            <Button onClick={handleCancelClick}>Отмена</Button>
            <Button onClick={handleDeleteClick}>Удалить</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ModalElement;
