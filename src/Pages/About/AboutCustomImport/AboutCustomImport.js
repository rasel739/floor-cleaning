import SendIcon from "@mui/icons-material/Send";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ReactCardFlipper from "react-card-flipper";
import OurServiceNavStyle from "../../../assets/css/ourServiceNav.module.css";

const AboutCustomImport = () => {
  return {
    Box,
    Container,
    Typography,
    OurServiceNavStyle,
    Grid,
    CardMedia,
    Button,
    Card,
    CardActionArea,
    CardContent,
    ReactCardFlipper,
    TextField,
    SendIcon,
  };
};

export default AboutCustomImport;
