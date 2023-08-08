import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { LoginLayout } from './layouts/Login'
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<ProfilePage />} />

        <Route path="/" element={<LoginLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/password-feedback" element={<PasswordFeedbackPage />} />
          <Route path="/agent-selection" element={<AgentSelectionPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
