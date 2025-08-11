"use client"
import React from "react"
import { Box, Typography, Container, Grid, Card, CardContent, TextField, Button, IconButton } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import SendIcon from "@mui/icons-material/Send"

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsApp = () => {
    const message = `Olá! Meu nome é ${formData.name}${
      formData.company ? ` da empresa ${formData.company}` : ""
    }. ${formData.message || "Gostaria de saber mais sobre os serviços da Dominus IA."}`
    window.open(`https://wa.me/5527997074035?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEmailContact = () => {
    const subject = "Contato - Dominus IA"
    const body = `Nome: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    window.open(`mailto:dominusaioficial@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`)
  }

  const contactInfo = [
    {
      icon: <WhatsAppIcon sx={{ fontSize: 32, color: "#25D366" }} />,
      title: "WhatsApp",
      description: "Resposta imediata",
      value: "+ 55 (27) 99707-4035",
      action: () => window.open("https://wa.me/5527997074035", "_blank"),
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32, color: "#3f51b5" }} />,
      title: "Email",
      description: "Resposta em até 2h",
      value: "dominusaioficial@gmail.com",
      action: () => window.open("mailto:dominusaioficial@gmail.com"),
    },
    
  ]

  return (
    <Box id="contato" sx={{ py: 10, bgcolor: "background.paper" }}>
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
            Entre em Contato
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Pronto para transformar seu negócio? Nossa equipe está aqui para ajudar você a dar o próximo passo.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Envie sua Mensagem
                </Typography>
                <Grid container spacing={3}>                 
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Empresa"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        onClick={handleWhatsApp}
                        sx={{
                          bgcolor: "#25D366",
                          "&:hover": { bgcolor: "#128C7E" },
                          flex: 1,
                          minWidth: 200,
                        }}
                      >
                        Enviar via WhatsApp
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<SendIcon />}
                        onClick={handleEmailContact}
                        sx={{ flex: 1, minWidth: 200 }}
                      >
                        Enviar por Email
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    className="card-hover"
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onClick={info.action}
                  >
                    <CardContent sx={{ p: 3, textAlign: "center" }}>
                      <IconButton
                        sx={{
                          mb: 2,
                          bgcolor: "rgba(26, 35, 126, 0.1)",
                          "&:hover": { bgcolor: "rgba(26, 35, 126, 0.2)" },
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                        {info.description}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {info.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Card sx={{ mt: 3, bgcolor: "primary.main" }}>
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 2, color: "white", fontWeight: 600 }}>
                  🚀 Consultoria Gratuita
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.9)", mb: 3 }}>
                  Agende uma conversa de 30 minutos para descobrir como a IA pode transformar seu negócio.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "rgba(255, 255, 255, 0.9)" },
                  }}
                  onClick={() =>
                    window.open(
                      "https://wa.me/5527997074035?text=Olá! Gostaria de agendar uma consultoria gratuita.",
                      "_blank",
                    )
                  }
                >
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactSection
