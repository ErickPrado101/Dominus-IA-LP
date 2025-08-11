"use client"
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from "@mui/material"
import Image from "next/image"

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "Vercel",
      description: "Deploy e hospedagem de alta performance",
      logo: "/vercel.png",
      color: "#000000",
    },
    {
      name: "N8N",
      description: "Automação de workflows avançada",
      logo: "/n8n3.png",
      color: "#ea4b71",
    },
    {
      name: "Supabase",
      description: "Backend como serviço escalável",
      logo: "/supabase.jpeg",
      color: "#3ecf8e",
    },
  ]

  const partners = [
    {
      name: "NASA",
      logo: "/nasa.svg",
      description: "Tecnologia usada na NASA agora nas suas mãos",
    },
    {
      name: "Spotify",
      logo: "/spotify-light.svg",
      description: "Sistema inovador e algoritmo mais preciso quanto a elegância usada no Spotify na sua empresa",
    },
    {
      name: "Amazon",
      logo: "/amazon-light.svg",
      description: "Infraestrutura robusta quanto o design utilizados na Amazon para maximizar seus lucros!",
    },
  ]

  return (
    <Box id="tecnologias" sx={{ py: 10, bgcolor: "background.paper" }}>
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
            Tecnologias de Ponta
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Utilizamos as melhores ferramentas do mercado para entregar soluções robustas, escaláveis e confiáveis para
            o seu negócio.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {technologies.map((tech, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className="card-hover"
                sx={{
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      bgcolor: tech.color,
                    }}
                  >
                    <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={60} height={60} />
                  </Avatar>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {tech.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Tecnologia Reconhecida Mundialmente
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Nossas soluções são baseadas em tecnologias utilizadas pelas maiores empresas do mundo, garantindo qualidade
            e confiabilidade excepcionais.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  bgcolor: "transparent",
                  boxShadow: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "center",
                  "&:hover": {
                    border: "1px solid rgba(26, 35, 126, 0.5)",
                    transform: "translateY(-4px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={80}
                    style={{ marginBottom: 16 }}
                  />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {partner.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default TechnologiesSection
