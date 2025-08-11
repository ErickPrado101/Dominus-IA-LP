import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { theme } from "./theme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dominus IA - Soluções de IA para Empresas",
  description:
    "Transforme seu negócio com IA first. Automatização, inovação e resultados massivos para empresas progressivas.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
