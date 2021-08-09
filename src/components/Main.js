import Image from 'next/image'
import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import CustomDrawer from './CustomDrawer'
import avatar from '../../src/assets/icons/avatar.png'
import BellIcon from '../../src/assets/icons/BellIcon'
import ArrowCross from '../../src/assets/icons/ArrowCross'
import SearchIcon from '../../src/assets/icons/SearchIcon'
import MenuIcon from '../../src/assets/icons/MenuIcon'

const drawerWidth = 110;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '50px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '503px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Main({ children }) {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        color="secondary"
        style={{ background: 'transparent', boxShadow: 'none' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ paddingTop: '15px'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1}} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton  aria-label="show 4 new mails" >
              <ArrowCross />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="primary" size='small'>
                <BellIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <Avatar variant="rounded" size="large" style={{ background: 'transparent', boxShadow: 'none', transform: 'scale(1.3)', marginLeft: '10px'}}>
                <Image
                  src={avatar}
                  alt="avatar"
                />
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth, background: '#663399' },
          }}
        >
          <CustomDrawer />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}


export default Main;