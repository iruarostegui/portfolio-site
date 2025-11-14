# Portfolio

Un portfolio moderno construido con Next.js, Tailwind CSS y shadcn/ui.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Build para Producción

```bash
npm run build
npm start
```

## 📦 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **shadcn/ui** - Componentes UI reutilizables

## 🎨 Componentes shadcn/ui

Para agregar componentes de shadcn/ui, usa:

```bash
npx shadcn@latest add [component-name]
```

Ejemplos:
- `npx shadcn@latest add button`
- `npx shadcn@latest add card`
- `npx shadcn@latest add dialog`

## 🚢 Despliegue en Vercel

Este proyecto está listo para desplegarse en Vercel:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El despliegue se realizará automáticamente

O usa la CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## 📁 Estructura del Proyecto

```
├── app/              # App Router de Next.js
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Página principal
│   └── globals.css   # Estilos globales
├── components/       # Componentes React
│   └── ui/          # Componentes shadcn/ui
├── lib/             # Utilidades
└── public/          # Archivos estáticos
```

## 📝 Notas

- Los componentes de shadcn/ui se instalan en `components/ui/`
- Las utilidades compartidas están en `lib/utils.ts`
- Los estilos globales y variables CSS están en `app/globals.css`

