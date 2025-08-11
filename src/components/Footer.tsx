"use client"
import { Box, Typography, Container, Grid, Link, IconButton } from "@mui/material"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.default", py: 6, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SmartToyIcon sx={{ mr: 1, color: "#3f51b5", fontSize: 32 }} />
              <Typography
                variant="h6"
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
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
              Transformando empresas através da inteligência artificial. Soluções inovadoras para um futuro mais
              eficiente e inteligente.
            </Typography>
            <Box>
              <IconButton sx={{ color: "#3f51b5", mr: 1 }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "#3f51b5", mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "#3f51b5" }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Serviços
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Automatização
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Integração
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Analytics
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Consultoria
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Empresa
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Sobre Nós
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Equipe
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Carreiras
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Blog
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Suporte
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Contato
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                FAQ
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Documentação
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Status
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Privacidade
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Termos
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                Cookies
              </Link>
              <Link
                href="#"
                sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                LGPD
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255, 255, 255, 0.1)", textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} Dominus IA. Todos os direitos reservados. Desenvolvido com ❤️ para revolucionar
            o futuro dos negócios.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
