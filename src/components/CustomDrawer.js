import { useRouter } from 'next/router';
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '../assets/icons/HomeIcon';
import DashboardIcon from '../assets/icons/DashboardIcon';
import TableIcon from '../assets/icons/TableIcon';
import ClipIcon from '../assets/icons/ClipIcon';
import DocumentsIcon from '../assets/icons/DocumentsIcon';
import NotesIcon from '../assets/icons/NotesIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import WeatherIcon from '../assets/icons/WeatherIcon';
import SquareIcon from '../assets/icons/SquareIcon';
import BoxIcon from '../assets/icons/BoxIcon';
import RectangularIcon from '../assets/icons/RectangularIcon';

import styles from '../../styles/customDrawer.module.css';

const CustomDrawer = () => {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <Toolbar >
                <Link href="/"><h2 className={styles.banner}>Gull</h2></Link>
            </Toolbar>

            <List className={`${styles.lists}`}>
                <Link href="/">
                    <ListItem button className={router.pathname == "/" ? "active" : ""}>
                        <DashboardIcon />
                        <p>DashBoard</p>
                    </ListItem>
                </Link>
                <Link href="/rectangular">
                    <ListItem button className={router.pathname == "/rectangular" ? "active" : ""}>
                        <RectangularIcon />
                        <p>Rectangular</p>
                    </ListItem>
                </Link>
                <Link href="/table">
                    <ListItem button className={router.pathname == "/table" ? "active" : ""}>
                        <TableIcon />
                        <p>Table</p>
                    </ListItem>
                </Link>
                <Link href="/clipboard">
                    <ListItem button className={router.pathname == "/clipboard" ? "active" : ""}>
                        <ClipIcon />
                        <p>ClipBoard</p>
                    </ListItem>
                </Link>
                <Link href="/documents">
                    <ListItem button className={router.pathname == "/documents" ? "active" : ""}>
                        <DocumentsIcon />
                        <p>Documents</p>
                    </ListItem>
                </Link>
                <Link href="/notes">
                    <ListItem button className={router.pathname == "/notes" ? "active" : ""}>
                        <NotesIcon />
                        <p>Notes</p>
                    </ListItem>
                </Link>
                <Link href="/profile">
                    <ListItem button className={router.pathname == "/profile" ? "active" : ""}>
                        <ProfileIcon />
                        <p>Profile</p>
                    </ListItem>
                </Link>
                <Link href="/weather">
                    <ListItem button className={router.pathname == "/weather" ? "active" : ""}>
                        <WeatherIcon />
                        <p>Weather</p>
                    </ListItem>
                </Link>
                <Link href="/square">
                    <ListItem button className={router.pathname == "/clipboard" ? "active" : ""}>
                        <SquareIcon />
                        <p>Square</p>
                    </ListItem>
                </Link>
                <Link href="/box">
                    <ListItem button className={router.pathname == "/box" ? "active" : ""}>
                        <BoxIcon />
                        <p>Box</p>
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}

export default CustomDrawer
