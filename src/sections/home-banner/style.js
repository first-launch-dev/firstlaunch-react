import { makeStyles } from '@mui/styles';
const useStyles =  makeStyles((theme) =>( {
    bannerInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 'calc(100vh - 64px)',
        position: 'relative',
        zIndex: 100,
    },
    bannerHeading: {
        color: '#000',
        fontWeight: 400,
        textAlign: 'center',
        color: '#fff'
        
    },
    bannerBtn: { ml: 1, mt: 5, px: 2, py: 1, boxShahdow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)' },
    headingUnderline: { fontWeight: 700, borderBottom: '3px solid #fb8c00' },
    video:{
        position: 'relative',
        width: '100%',
        right: 0,
        objectFit: 'cover',
        height: '100vh',

    },
    videoText:{
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        width: '-webkit-fill-available',
        left: 0
    },
    overlay:{
        content: '""',
        opacity: "0.7",
        position: "absolute",
        backgroundColor: '#303030',
        width: "100%",
        height: "100%",
        zIndex:" 22",
    }
}));


export default useStyles;