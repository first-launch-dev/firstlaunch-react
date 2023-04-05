import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function VideoModal({ video, open, setOpen }) {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                    height: 'auto'
                }}
            >
                {/* {onClose ? ( */}
                    <IconButton
                        aria-label="close"
                        onClick={()=>{
                            setOpen(false)
                        }}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                            zIndex: 50
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                {/* ) : null} */}
                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}/> */}
                {/* <DialogContent sx={{
                    '.css-153eyq5-MuiModal-root-MuiDialog-root .MuiDialogContent-root':{
                        padding: 0
                    }
                }} dividers> */}
                <video style={{ width: '100%' }} loop autoPlay>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* </DialogContent> */}
            </BootstrapDialog>
        </div>
    );
}