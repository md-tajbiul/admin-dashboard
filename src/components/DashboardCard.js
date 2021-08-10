import styles from '../../styles/dashboardCard.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "24px",
        boxShadow: "none",
        margin: "5px 12px",
        height: "136px",
        width: "396px",
        display: "flex",
        alignItems: "center",
    }
}));

const CustomCard = ({icon, title, amount, color, iconBg}) => {
    const classes = useStyles();
    return (
        <div style={{paddingTop: '15px'}}>
            <Card className={classes.root}>
            <CardContent>
                <div className={styles.cardBox}>
                    <div className={styles.cardIcon} style={{backgroundColor: iconBg}}>
                    {icon}
                    </div>
                    <div className={styles.cardText}>
                        <p>{title}</p>
                        <span style={{color:color}}>{amount}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}

export default CustomCard