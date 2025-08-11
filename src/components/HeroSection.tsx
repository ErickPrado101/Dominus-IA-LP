"use client"
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5527997074035?text=Olá! Gostaria de saber mais sobre os serviços da Dominus IA.",
      "_blank",
    )
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #1a237e 0%, #000000 70%)",
        display: "flex",
        alignItems: "center",
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: "linear-gradient(135deg, #ffffff 0%, #3f51b5 50%, #1a237e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              O Futuro da IA
              <br />
              <span style={{ color: "#ffffff" }}>Está Aqui</span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Transforme seu negócio com soluções de IA first. Automatização inteligente, resultados massivos e
              tecnologia de ponta para empresas progressivas.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<RocketLaunchIcon />}
                onClick={handleWhatsApp}
                sx={{
                  bgcolor: "primary.main",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Começar Agora
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("sobre")}
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Saiba Mais
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card className="card-hover" sx={{ height: "100%" }}>
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <AutoAwesomeIcon sx={{ fontSize: 48, color: "#3f51b5", mb: 2 }} />
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      IA Avançada
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Tecnologia reconhecida pela NASA, Spotify e Amazon
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card className="card-hover" sx={{ height: "100%" }}>
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <TrendingUpIcon sx={{ fontSize: 48, color: "#3f51b5", mb: 2 }} />
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      Resultados Massivos
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Automatização que gera crescimento exponencial
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection
