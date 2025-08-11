"use client"
import { Box, Typography, Container, Card, CardContent, Avatar, LinearProgress, Grid  } from "@mui/material"
import GroupIcon from "@mui/icons-material/Group"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import SecurityIcon from "@mui/icons-material/Security"

const AboutSection = () => {
  const stats = [
    { label: "Clientes Atendidos", value: "500+", icon: <GroupIcon sx={{ fontSize: 32, color: "#ffff" }} /> },
    { label: "Projetos Concluídos", value: "1000+", icon: <TrendingUpIcon sx={{ fontSize: 32, color: "#ffff" }} /> },
    { label: "Anos de Experiência", value: "5+", icon: <EmojiObjectsIcon sx={{ fontSize: 32, color: "#ffff" }} /> },
    { label: "Sistema Protegido", value: "100%", icon: <SecurityIcon sx={{ fontSize: 32, color: "#ffff" }} /> },
  ]

  const values = [
    {
      title: "Inovação Constante",
      description: "Sempre na vanguarda da tecnologia, implementando as soluções mais avançadas do mercado.",
      progress: 100,
    },
    {
      title: "Resultados Mensuráveis",
      description: "Focamos em entregar ROI comprovado e métricas claras de sucesso para nossos clientes.",
      progress: 100,
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica altamente qualificada disponível para garantir o sucesso do seu projeto.",
      progress: 100,
    },
  ]

  return (
    <Box id="sobre" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              background: "linear-gradient(135deg, #ffffff 0%, #3f51b5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sobre a Dominus IA
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.6,
              mb: 6,
            }}
          >
            Somos pioneiros em soluções de inteligência artificial para empresas. Nossa missão é democratizar o acesso à
            IA avançada, transformando negócios através da automação inteligente e inovação tecnológica.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid container item xs={12} sm={6} md={3} key={index}>
              <Card
                className="card-hover"
                sx={{
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "primary.main",
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Mission & Values */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              Nossa Missão
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: "text.primary",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              Transformar empresas através da inteligência artificial, oferecendo soluções personalizadas que
              automatizam processos, otimizam operações e geram crescimento sustentável. Acreditamos que a IA deve ser
              acessível, prática e orientada a resultados.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              Com uma equipe de especialistas e parcerias estratégicas com as maiores empresas de tecnologia do mundo,
              estamos preparados para levar seu negócio ao próximo nível.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: "white",
              }}
            >
              Nossos Diferenciais
            </Typography>
            {values.map((value, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white", fontWeight: 600 }}>
                    {value.progress}%
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  {value.description}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={value.progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "primary.main",
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection
