import { useState } from "react";
import cadastresData from "../assets/cadastres.json";
import scierieData from "../assets/scierie.json";
import proprietairesData from "../assets/proprietaires.json";
import { TimelinePlayer } from "../common/TimelinePlayer";
import AutoCarousel from "../common/AutoCarousel";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

const History = () => {
    const [selectedDisplay, setSelectedDisplay] = useState<string>("cadastres");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const getDisplay = () => {
        switch (selectedDisplay) {
            case "cadastres":
            case "proprietaires":
                const data = selectedDisplay === "cadastres" ? cadastresData : proprietairesData;
                return <TimelinePlayer key="timeline" data={data} isPlaying={isPlaying} />;
            case "scierie":
                return <AutoCarousel key="carousel" data={scierieData} isPlaying={isPlaying} interval={3000}/>;
            default:
                return null;
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Button variant="contained" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? "Pause" : "Play"}
                </Button>
                <FormControl sx={{ width: "220px" }} size="small">
                    <InputLabel sx={{ color: "black" }}>Choisir un thème</InputLabel>
                    <Select
                        label="Choisir un thème"
                        value={selectedDisplay}
                        onChange={(e) => setSelectedDisplay(e.target.value)}
                    >
                        <MenuItem value="cadastres">cadastres</MenuItem>
                        <MenuItem value="proprietaires">proprietaires</MenuItem>
                        <MenuItem value="scierie">scierie</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: 50, height: "700px" }}>
                {getDisplay()}
            </div>
        </div>
    );
};

export default History;