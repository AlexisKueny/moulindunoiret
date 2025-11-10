import { AppBar, Stack, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router";
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import { HomeRounded } from "@mui/icons-material";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        style={{
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "20px",
          }}>
            <Link to="/" style={{ textDecoration: "none", color: theme.palette.text.primary }}>
              <Stack direction={"row"} alignItems={"center"}>
                <HomeRounded/>
                <h3>Accueil</h3>
              </Stack>
            </Link>
            <Link to="/historique" style={{ textDecoration: "none", color: theme.palette.text.primary }}>
              <Stack direction={"row"} alignItems={"center"}>
                <HistoryEduRoundedIcon />
                <h3>Historique</h3>
              </Stack>
            </Link>
            <Link to="/projet" style={{ textDecoration: "none", color: theme.palette.text.primary }}>
              <Stack direction={"row"} alignItems={"center"}>
                <ArchitectureRoundedIcon />
                <h3>Projet</h3>
              </Stack>
            </Link>
            <Link to="/travaux" style={{ textDecoration: "none", color: theme.palette.text.primary }}>
              <Stack direction={"row"} alignItems={"center"}>
                <ConstructionRoundedIcon />
                <h3>Travaux</h3>
              </Stack>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;