import { createBrowserRouter } from 'react-router-dom'

import { AppearanceForm } from './components/Settings/appearance-form'
import { ProfileForm } from './components/Settings/profile-form'
import { AppLayout } from './pages/_layout/app'
import { DashLayout } from './pages/_layout/dash'
import { WelcomeLayout } from './pages/_layout/welcome'
import { Dashboard } from './pages/App/Home/Dashboard'
import { Lesson } from './pages/App/Home/Lesson'
import { Missions } from './pages/App/Home/Missions'
import { Profile } from './pages/App/Home/Profile'
import { Settings } from './pages/App/Home/Settings'
import { Welcome } from './pages/App/Home/Welcome'
import { Home } from './pages/App/Index'
import { Register } from './pages/Auth/Register'
import { SignIn } from './pages/Auth/SignIn'
import { SignUp } from './pages/Auth/SignUp'
import { ProtectedRoute } from './ProtectedRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/auth',
    element: <AppLayout />,
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/auth',
    element: <AppLayout />,
    children: [{ path: 'signup', element: <SignUp /> }],
  },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    children: [{ index: true, element: <Welcome /> }],
  },
  {
    path: '/dashboard',
    element: <DashLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'missions', element: <Missions /> },
          { path: 'profile', element: <Profile /> },

          {
            path: 'settings',
            element: <Settings />,
            children: [
              { path: 'profile', element: <ProfileForm /> },
              { path: 'account', element: <div>Account Settings</div> },
              { path: 'appearance', element: <AppearanceForm /> },
              {
                path: 'notifications',
                element: <div>Notifications Settings</div>,
              },
              { path: 'display', element: <div>Display Settings</div> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/lesson/:lessonId',
    element: <WelcomeLayout />,
    children: [{ index: true, element: <Lesson /> }],
  },
])
