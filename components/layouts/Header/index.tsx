import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{word: 'Profile', link: '/profile'}, {word: 'Works', link: '/works'}, {word: 'Blog', link: '/blog'}, {word: 'Hobby', link: 'hobby'},{word: 'Contact', link: '/contact'}];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <NextLink href='/'>
        <Typography variant="h6" sx={{ my: 2 }}>
          Peishim Portfolio
        </Typography>
      </NextLink>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.word} disablePadding>
            <NextLink href={item.link}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.word} />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color='primary'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block'}}
          >
            <NextLink href='/'>
              Peishim Portfolio
            </NextLink>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item.word} sx={{ color: '#fff' }}>
                  <NextLink href={item.link}>
                    {item.word}
                  </NextLink>
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* ↓ページコンテンツをAppBar分下に移動させるためのToolbar */}
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}