import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    bannerHeading: {
        color: theme.palette.text.black,
        fontWeight: 400,
    },
    headingUnderline: { color: '#fb8c00', },
    para: {
        fontSize: 14,
        textAlign: 'justify',
        fontWeight: 400,
        color: theme.palette.text.paraprimary,
    },
    img: {
        position: 'relative'
    },
    playbtn:{
        content: '"some content"',
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        cursor: 'pointer'
    },
    btn:{
        background: '#ff9800',
        height: 50,
        width: 50,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    btnGold:{
        background: '#FF9800'
    }
}));


export default useStyles;