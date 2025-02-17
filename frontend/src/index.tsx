import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import 'styles/index.css'
import App from 'components/App'
import { BackgroundProvider } from 'context/BackgroundColorContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BackgroundProvider>
    <App />
  </BackgroundProvider>
)
