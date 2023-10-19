import { Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { HeroProvider } from './contexts/HeroContext'

import { LoginLayout } from './layouts/Login'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Nav } from './components/Nav'

import { AgentSelectionPage } from './pages/AgentSelection'
import { HomePage } from './pages/Home'
import { LoginPage } from './pages/Login'
import { PasswordFeedbackPage } from './pages/PasswordFeedback'
import { PasswordRecoveryPage } from './pages/PasswordRecovery'
import { ProfilePage } from './pages/Profile'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <HeroProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/perfil/:id" element={<ProfilePage />} />

          <Route path="/" element={<LoginLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/password-recovery"
              element={<PasswordRecoveryPage />}
            />
            <Route
              path="/password-feedback"
              element={<PasswordFeedbackPage />}
            />
            <Route path="/agent-selection" element={<AgentSelectionPage />} />
          </Route>

          <Route
            path="*"
            element={
              <>
                <Nav />

                <div>
                  <h2>404 Not Found</h2>
                </div>
              </>
            }
          />
        </Routes>
      </HeroProvider>
    </ThemeProvider>
  )
}

export default App
