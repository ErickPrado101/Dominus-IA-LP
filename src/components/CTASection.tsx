"use client"
import { Box, Typography, Container, Button, Grid, Card, CardContent } from "@mui/material"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5527997074035?text=Olá! Gostaria de começar a transformação digital da minha empresa com a Dominus IA.",
      "_blank",
    )
  }

  const handleConsultation = () => {
    window.open(
      "https://wa.me/5527997074035?text=Olá! Gostaria de agendar uma consultoria gratuita para conhecer melhor os serviços da Dominus IA.",
      "_blank",
    )
  }

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #1a237e 0%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: "white",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Pronto para Revolucionar
              <br />
              <span style={{ color: "#3f51b5" }}>Seu Negócio?</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              Junte-se às empresas que já estão colhendo os frutos da transformação digital. Nossa equipe está pronta
              para criar a solução perfeita para o seu negócio.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<RocketLaunchIcon />}
                onClick={handleWhatsApp}
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
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
                startIcon={<PhoneIcon />}
                onClick={handleConsultation}
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Agendar Consulta
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h5" sx={{ mb: 3, color: "white", fontWeight: 600 }}>
                  Contato Direto
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <EmailIcon sx={{ color: "#ffffff", fontSize: 32, mb: 1 }} />
                  <Typography variant="body1" sx={{ color: "white" }}>
                    dominusaioficial@gmail.com
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <PhoneIcon sx={{ color: "#ffffff", fontSize: 32, mb: 1 }} />
                  <Typography variant="body1" sx={{ color: "white" }}>
                    + 55 (27) 99707-4035
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Resposta em até 2 horas
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CTASection
