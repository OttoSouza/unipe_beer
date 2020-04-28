import { makeStyles } from "@material-ui/core/styles";

const AboutStyles = makeStyles({
    paperContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    paper: {
        marginTop: '20px',
        marginBottom: '20px',
        width: '70%',
        padding: '10px',
    },

    principal: {
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: '10px',
        paddingBottom: '5px',
    },

    subtitles: {
        fontSize: '15px',
        marginLeft: '20px', 
        display: 'flex'
    },
    
    icon: {
        paddingRight: '5px'
    }
});

export default AboutStyles;
