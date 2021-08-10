import styles from '../../styles/dashboardCard.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CustomCard = ({icon, title, amount, color, iconBg}) => {
    return (
        <div style={{paddingTop: '15px'}}>
            <Card className={styles.card}>
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