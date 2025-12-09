import { AppBar, Stack, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router";
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import { HomeRounded } from "@mui/icons-material";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

const Header = () => {
  const theme = useTheme();

  const linkStyle = { textDecoration: "none", color: theme.palette.text.primary };
  const stackStyle = { textDecoration: "underline" };

  const NavLink = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => (
    <Link to={to} style={linkStyle}>
      <Stack direction={"row"} alignItems={"center"} gap={0} sx={stackStyle}>
        <Icon />
        <h3 style={{ margin: 0 }}>{label}</h3>
      </Stack>
    </Link>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0} style={{ boxShadow: 'none' }}>
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