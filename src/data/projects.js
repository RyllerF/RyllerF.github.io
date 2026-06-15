
import projectAnalysis from "../assets/projects/analysis.svg"
import crudImage from "../assets/projects/Crud.png"
import datavalo from "../assets/datavalo.png"


export const projects = [
  {
    id: 1,
    title: "ETL Pipeline — Olist E-Commerce",
    category: "ETL & Análise de Dados",
    description:
      "Pipeline ETL completo sobre o dataset público da Olist (~100k pedidos). Arquitetura Raw → Staging → Mart com Star Schema, 11 checks de qualidade e R$ 13,5 mi processados em ~25s.",
    image: projectAnalysis,
    githubUrl: "https://github.com/RyllerF/olist-ecommerce-etl",
    tags: ["Python", "Pandas", "SQLAlchemy", "SQLite", "Loguru"],
  },
  {
    id: 2,
    title: "Data Valorant",
    category: "ETL & SQL Analytics",
    description:
      "Pipeline ETL com dados da API pública do Valorant. Coleta via requests, transformação com Pandas e carga em PostgreSQL para análise de agentes, mapas e armas por categoria.",
    image: datavalo,
    githubUrl: "https://github.com/RyllerF/valorant-pipeline",
    tags: ["Python", "PostgreSQL", "SQLAlchemy", "Requests", "Pandas"],
  },
  {
    id: 3,
    title: "Análise de Campanhas de Marketing",
    category: "Power BI",
    description:
      "Dashboard com 4 visões: campanhas, perfil do cliente, comportamento de compra e padrões por país. Identifica conversão, segmentação demográfica e relação entre renda, gastos e canais.",
    image:
      "https://raw.githubusercontent.com/RyllerF/dashboard-marketing/refs/heads/main/analise-marketing/img/VisaoCampanhas.png",
    githubUrl: "https://github.com/RyllerF/dashboard-marketing",
    tags: ["Power BI", "DAX", "Modelagem de Dados"],
  },
  {
    id: 4,
    title: "Dashboard de Vendas e Margem de Lucro",
    category: "Power BI",
    description:
      "Análise de vendas, custos de envio e margem de lucro. KPIs de ticket médio, evolução da margem ao longo do tempo, lucro por categoria e custo de envio por mercado.",
    image:
      "https://raw.githubusercontent.com/RyllerF/dashboard-vendas-powerbi/refs/heads/main/dash-vendas/img/dashboard.png",
    githubUrl: "https://github.com/RyllerF/dashboard-vendas-powerbi",
    tags: ["Power BI", "DAX", "KPIs", "Modelagem de Dados"],
  },
  {
    id: 5,
    title: "Dashboard Analítico de Vendas Globais",
    category: "Power BI",
    description:
      "Dashboard interativo para vendas globais com filtros por ano, segmento e país. Análise por categoria, volume de pedidos, descontos e distribuição geográfica das vendas.",
    image:
      "https://raw.githubusercontent.com/RyllerF/analise-vendas-powerbi/main/analise-vendas/imagens/Pagina1.png",
    githubUrl: "https://github.com/RyllerF/analise-vendas-powerbi",
    tags: ["Power BI", "DAX", "Visualização", "UX"],
  },
  {
    id: 6,
    title: "CRUD de Usuários — Fullstack",
    category: "Backend & Fullstack",
    description:
      "Aplicação fullstack com operações CRUD, integração a banco de dados e estruturação de APIs. Deploy disponível na Vercel para demonstração ao vivo.",
    image: crudImage,
    githubUrl: "https://github.com/RyllerF/CRUD-Gerenciar-de-Usuarios",
    liveUrl:
      "https://crud-gerenciar-de-usuarios-git-main-ryllerfonsecas-projects.vercel.app",
    tags: ["Node.js", "TypeScript", "Prisma", "MongoDB", "Next.js", "React"],
  },
//
]
