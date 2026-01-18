import { AppBar, Stack, Toolbar, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router";
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import { HomeRounded, type SvgIconComponent } from "@mui/icons-material";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

const Header = () => {
  const theme = useTheme();
  const location = useLocation();

  const NavLink = ({ to, icon: Icon, label }: { to: string; icon: SvgIconComponent; label: string }) => {
    const isActive = location.pathname === to;
    const linkStyle = { 
      textDecoration: "none", 
      color: isActive ? '#f44336' : theme.palette.text.primary 
    };
    const stackStyle = { textDecoration: "underline" };

    return (
      <Link to={to} style={linkStyle}>
        <Stack direction={"row"} alignItems={"center"} gap={0} sx={stackStyle}>
          <Icon />
          <h3 style={{ margin: 0 }}>{label}</h3>
        </Stack>
      </Link>
    );
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ boxShadow: 'none', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <Toolbar>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "20px" }}>
          <NavLink to="/" icon={HomeRounded} label="Accueil" />
          <NavLink to="/historique" icon={HistoryEduRoundedIcon} label="Historique" />
          <NavLink to="/projet" icon={ArchitectureRoundedIcon} label="Projet" />
          <NavLink to="/travaux" icon={ConstructionRoundedIcon} label="Travaux" />
          <NavLink to="/newsletter" icon={NewspaperRoundedIcon} label="Newsletter" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;