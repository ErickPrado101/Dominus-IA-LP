"use client"
import { useState } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import SmartToyIcon from "@mui/icons-material/SmartToy"

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setMobileOpen(false)
    }

    const handleWhatsApp = () => {
        window.open(
            "https://wa.me/5527997074035?text=Olá! Gostaria de saber mais sobre os serviços da Dominus IA.",
            "_blank",
        )
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const menuItems = ["Serviços", "Tecnologias", "Sobre", "Contato"]

    const drawer = (
        <Box sx={{ width: 250, bgcolor: "background.default", height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item, index) => {
                    const sectionIds = ["servicos", "tecnologias", "sobre", "contato"]
                    return (
                        <ListItem key={item} onClick={() => scrollToSection(sectionIds[index])}>
                            <ListItemText primary={item} sx={{ color: "white", textAlign: "center" }} />
                        </ListItem>
                    )
                })}
                <ListItem>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleWhatsApp}>
                        Começar Agora
                    </Button>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "rgba(0, 0, 0, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                <Toolbar>
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <Box
                            component="img"
                            src="logo.jpg"
                            alt="Logo Dominus IA"
                            sx={{
                                mr: 1,
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                objectFit: "cover",
                                display: "inline-block",
                            }}
                        />

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 700,
                                background: "linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Dominus IA
                        </Typography>
                    </Box>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={{ color: "#ffffff" }} />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                            {menuItems.map((item, index) => {
                                const sectionIds = ["servicos", "tecnologias", "sobre", "contato"];
                                return (
                                    <Button
                                        key={item}
                                        color="inherit"
                                        onClick={() => scrollToSection(sectionIds[index])}
                                        sx={{
                                            fontWeight: 500,
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                        }}
                                    >
                                        {item}
                                    </Button>
                                );
                            })}
                            <Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={handleWhatsApp}>
                                Começar Agora
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>


            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    "& .MuiDrawer-paper": {
                        bgcolor: "background.default",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

export default Navbar
