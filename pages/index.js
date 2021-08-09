import Head from 'next/head';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PersonIcon from '../src/assets/icons/PersonIcon';
import OrdersIcon from '../src/assets/icons/OrdersIcon';
import SalesIcon from '../src/assets/icons/SalesIcon';
import ExpenseIcon from '../src/assets/icons/ExpenseIcon';
import DashboardCard from '../src/components/DashboardCard';

const fakeData = [
  {
    icon: <PersonIcon />,
    title: 'New Leds',
    amount: '205',
    color: '#663399',
    iconBg: '#F2F1FE'
  },
  {
    icon: <SalesIcon />,
    title: 'Sales',
    amount: '$4021',
    color: '#3981F7',
    iconBg: '#C5DBFF'
  },
  {
    icon: <OrdersIcon />,
    title: 'Orders',
    amount: '80',
    color: '#5DAE49',
    iconBg: '#BCDDB3'
  },
  {
    icon: <ExpenseIcon />,
    title: 'Expense',
    amount: '$1200',
    color: '#FFC620',
    iconBg: '#FFF6E0'
  },
]

export default function Home() {
  return (
    < >
      <Grid container>
        {
          fakeData && fakeData.map((item, i) => {
            return (
              <Grid item xs={3} md={3} sm={12} key={i}>
                <DashboardCard
                  icon={item.icon}
                  title={item.title}
                  amount={item.amount}
                  iconBg={item.iconBg}
                  color={item.color}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}
