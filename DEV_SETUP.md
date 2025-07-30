# Updated: DreamVersion – Development Setup Guide (Simplified)

## Prerequisites

### Required Software

- **Node.js**: Version 18 or higher
    
    - Install: [https://nodejs.org](https://nodejs.org)
        
    - Verify: `node --version`
        
- **npm**: Comes with Node.js
    
    - Verify: `npm --version`
        
- **Git**: [https://git-scm.com](https://git-scm.com)
    
    - Verify: `git --version`
        

### Recommended Tools

- **VS Code**
    
    - Extensions:
        
        - Prettier
            
        - ESLint
            
        - Tailwind CSS IntelliSense
            
        - GitLens
            
        - Auto Rename Tag
            

---

## Project Setup

### 1. Clone the Repository

bash

CopyEdit

`git clone [repository-url] cd dreamversion-web`

### 2. Install Dependencies

bash

CopyEdit

`npm install`

### 3. Configure Environment

bash

CopyEdit

`cp .env.example .env.local`

Edit `.env.local`:

env

CopyEdit

`NEXT_PUBLIC_SITE_URL=http://localhost:3000 NEXT_PUBLIC_ANALYTICS_ID=your-id FORM_SERVICE_ENDPOINT=https://formspree.io/f/your-form-id`

### 4. Run Development Server

bash

CopyEdit

`npm run dev`

View at: `http://localhost:3000`

---

## Development Workflow

### Daily Workflow

bash

CopyEdit

`git pull origin main git checkout -b feature/my-feature npm run dev`

Make changes, then:

bash

CopyEdit

`npm run lint npm run format`

Submit pull request to main when ready.

---

## Code Quality

### Formatting with Prettier

bash

CopyEdit

`npm run format`

### Linting with ESLint

bash

CopyEdit

`npm run lint`

---

## Structure Overview

pgsql

CopyEdit

`dreamversion-web/ ├── public/ ├── src/ │   ├── components/ │   ├── pages/ │   ├── styles/ │   └── utils/ └── .env.local`

- **Components**: PascalCase
    
- **Files**: camelCase
    
- **CSS Classes**: tailwind utility-first naming
    

---

## Troubleshooting

### Port 3000 Already in Use

bash

CopyEdit

`lsof -ti:3000 | xargs kill -9`

### Node Modules Broken

bash

CopyEdit

`rm -rf node_modules package-lock.json npm install`

### TypeScript Issues in VS Code

Open Command Palette → “TypeScript: Restart TS Server”

---

## Deployment

### Build for Production

bash

CopyEdit

`npm run build npm run start`

### Set Environment Variables in Vercel

- `NEXT_PUBLIC_SITE_URL`
    
- `NEXT_PUBLIC_ANALYTICS_ID`
    
- `FORM_SERVICE_ENDPOINT`
    

---

## IDE Configuration

Create `.vscode/settings.json` for consistent formatting:

json

CopyEdit

`{   "editor.defaultFormatter": "esbenp.prettier-vscode",   "editor.formatOnSave": true,   "editor.codeActionsOnSave": {     "source.fixAll.eslint": true   } }`

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
    
- [Tailwind Docs](https://tailwindcss.com/docs)
    
- [React Docs](https://react.dev)
    
- [TypeScript Docs](https://www.typescriptlang.org/docs/)