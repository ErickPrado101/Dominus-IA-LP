"use client"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import AutomationIcon from "@mui/icons-material/Psychology"
import IntegrationIcon from "@mui/icons-material/Hub"
import AnalyticsIcon from "@mui/icons-material/Analytics"

const ServicesSection = () => {
  const services = [
    {
      icon: <AutomationIcon sx={{ fontSize: 48, color: "#3f51b5" }} />,
      title: "Automatização Inteligente",
      description: "Elimine tarefas burocráticas e foque no que realmente importa",
      features: [
        "Processamento automático de documentos",
        "Fluxos de trabalho inteligentes",
        "Integração com sistemas existentes",
        "Redução de 80% no tempo operacional",
      ],
    },
    {
      icon: <IntegrationIcon sx={{ fontSize: 48, color: "#3f51b5" }} />,
      title: "Integração Completa",
      description: "Conecte todos os seus sistemas com nossa plataforma unificada",
      features: [
        "APIs robustas e escaláveis",
        "Sincronização em tempo real",
        "Suporte a múltiplas plataformas",
        "Migração sem interrupções",
      ],
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 48, color: "#3f51b5" }} />,
      title: "Analytics Avançado",
      description: "Insights poderosos para decisões estratégicas baseadas em dados",
      features: [
        "Dashboards interativos",
        "Previsões com IA",
        "Relatórios automatizados",
        "ROI mensurável e transparente",
      ],
    },
  ]

  return (
    <Box id="servicos" sx={{ py: 10, bgcolor: "background.default" }}>
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
            Nossos Serviços
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
            Soluções completas de IA que transformam a forma como sua empresa opera, gerando eficiência e resultados
            extraordinários.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className="card-hover"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    {service.icon}
                    <Typography variant="h5" sx={{ mt: 2, mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                      {service.description}
                    </Typography>
                  </Box>

                  <List dense>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: "#3f51b5", fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "0.9rem",
                              color: "text.primary",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ServicesSection
