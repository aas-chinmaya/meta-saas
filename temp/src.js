// 1st test
{
    src
├── app
│   ├── (auth)                  # Auth-related routes (nested routing)
│   │   ├── login
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   ├── signup
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   └── otp
│   │       ├── page.js
│   │       └── layout.js
│   ├── (super-admin)            # Super Admin Dashboard and routes
│   │   ├── dashboard
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   ├── users
│   │   │   ├── page.js
│   │   │   └── [id]
│   │   │       ├── page.js
│   │   │       └── layout.js
│   │   └── settings
│   │       └── page.js
│   ├── (tenant)                 # Tenant Dashboard and routes
│   │   ├── dashboard
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   ├── agents
│   │   │   ├── page.js
│   │   │   └── [id]
│   │   │       ├── page.js
│   │   │       └── layout.js
│   │   └── campaigns
│   │       └── page.js
│   ├── (agent)                  # Agent Dashboard and routes
│   │   ├── dashboard
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   ├── customers
│   │   │   ├── page.js
│   │   │   └── [id]
│   │   │       ├── page.js
│   │   │       └── layout.js
│   │   └── inbox
│   │       └── page.js
│   ├── (analytics)              # Analytics Dashboard and routes
│   │   ├── reports
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   └── engagement
│   │       └── page.js
│   ├── (shared)                 # Shared pages (accessible to all roles)
│   │   ├── notifications
│   │   │   ├── page.js
│   │   │   └── layout.js
│   │   └── profile
│   │       └── page.js
│   ├── api                      # API routes
│   │   ├── auth
│   │   │   ├── login.js
│   │   │   ├── logout.js
│   │   │   └── otp.js
│   │   ├── users
│   │   │   ├── create.js
│   │   │   ├── delete.js
│   │   │   ├── get.js
│   │   │   └── update.js
│   │   ├── messaging
│   │   │   ├── send.js
│   │   │   └── receive.js
│   │   └── analytics
│   │       ├── data.js
│   │       └── engagement.js
│   ├── layout.js
│   └── page.js
├── components
│   ├── auth
│   ├── dashboard
│   ├── forms
│   ├── ui                        # External UI libraries (Mantine, Hero UI, etc.)
│   └── common
├── hooks
│   ├── useAuth.js
│   ├── useRole.js
│   ├── useDashboard.js
│   ├── useWebSocket.js
│   ├── useMessaging.js
│   └── useAnalytics.js
├── lib
│   ├── api.js
│   ├── auth.js
│   └── utils.js
├── redux
│   ├── slices
│   │   ├── authSlice.js
│   │   ├── userSlice.js
│   │   ├── dashboardSlice.js
│   │   ├── messageSlice.js
│   │   └── analyticsSlice.js
│   └── store.js
├── types
│   ├── user.js
│   ├── auth.js
│   ├── dashboard.js
│   ├── message.js
│   └── analytics.js
├── styles
│   └── globals.css
├── middleware.js                # JWT-based authentication and RBAC
└── .env

}
/// 2nd final 
{



    src
├── app
│   ├── layout.js                      # Global layout (Header, Footer, Sidebar)
│   ├── (auth)                         # Auth routes
│   │   ├── login
│   │   │   ├── page.js
│   │   │   ├── layout.js
│   │   └── signup
│   │       ├── page.js
│   │       ├── layout.js
│   ├── (super-admin)                  # Super Admin Dashboard
│   │   ├── layout.js                  # Super Admin-specific layout
│   │   ├── dashboard
│   │   │   ├── page.js
│   │   ├── users
│   │       ├── page.js
│   │       └── [id]
│   │           ├── page.js
│   │           ├── layout.js
│   ├── (tenant)                       # Tenant Dashboard
│   │   ├── layout.js                  # Tenant-specific layout
│   │   ├── dashboard
│   │   │   ├── page.js
│   │   ├── agents
│   │       ├── page.js
│   │       └── [id]
│   │           ├── page.js
│   ├── (agent)                        # Agent Dashboard
│   │   ├── layout.js                  # Agent-specific layout
│   │   ├── dashboard
│   │   │   ├── page.js
│   │   ├── customers
│   │       ├── page.js
│   │       └── [id]
│   │           ├── page.js
│   ├── (analytics)                    # Analytics Dashboard
│   │   ├── layout.js                  # Analytics-specific layout
│   │   ├── reports
│   │       ├── page.js
│   │   └── engagement
│   │       ├── page.js
│   ├── api                            # API routes for server actions
│   │   ├── auth
│   │   │   ├── login.js
│   │   │   ├── logout.js
│   │   │   └── otp.js
│   │   └── users
│   │       ├── create.js
│   │       ├── delete.js
│   │       ├── get.js
│   │       └── update.js
├── components                         # Reusable UI components
│   ├── auth
│   │   ├── LoginForm.js
│   │   ├── SignupForm.js
│   ├── layout
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Sidebar.js
│   │   ├── RoleSwitcher.js
│   ├── dashboard
│   │   ├── DashboardCard.js
│   │   └── StatsWidget.js
│   ├── forms
│   │   ├── UserForm.js
│   │   └── AgentForm.js
│   ├── common
│   │   ├── Button.js
│   │   ├── Modal.js
│   │   ├── Tooltip.js
│   │   └── ErrorBoundary.js           # Handles component-level errors
├── hooks                              # Custom hooks
│   ├── useAuth.js
│   ├── useRole.js
│   ├── useDashboard.js
│   ├── useWebSocket.js
│   ├── useAnalytics.js
├── lib                                # Utilities and helpers
│   ├── api.js
│   ├── auth.js
│   ├── socket.js
│   ├── analytics.js
│   ├── messaging.js
│   └── utils.js
├── middleware.js                      # Middleware for route protection and handling
├── redux                              # State management with Redux Toolkit
│   ├── slices
│   │   ├── authSlice.js
│   │   ├── userSlice.js
│   │   ├── dashboardSlice.js
│   │   ├── agentSlice.js
│   │   └── analyticsSlice.js
│   └── store.js
├── types                              # Types and global interfaces
│   ├── auth.js
│   ├── user.js
│   ├── dashboard.js
├── services                           # External service integration
│   ├── websocket.js
│   ├── analytics.js
│   ├── messaging.js
├── utils                              # Helper functions and debugging
│   ├── format.js                      # String, date, and number formatting
│   ├── validate.js                    # Form and input validation
│   ├── logger.js                      # Centralized logging
│   ├── errorHandler.js                # Centralized error handling
├── styles                             # Global and module styles
│   ├── globals.css
│   ├── dashboard.css
│   ├── auth.css
└── public                             # Static assets (favicon, logos, etc.)

}


//3rd final 

{
    project-root
├── backend                                # Express Backend
│   ├── config                            # Configurations (e.g., DB, environment)
│   │   ├── db.js
│   │   ├── env.js
│   ├── controllers                       # Business logic and request handling
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── agentController.js
│   ├── middlewares                       # Custom middlewares
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   ├── models                            # Mongoose models
│   │   ├── User.js
│   │   ├── Agent.js
│   ├── routes                            # Express routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   ├── services                          # External service handling (e.g., WhatsApp, Instagram)
│   │   ├── authService.js
│   │   ├── messagingService.js
│   │   ├── analyticsService.js
│   ├── utils                             # Helper functions and reusable logic
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   ├── .env                              # Environment variables
│   ├── index.js                          # Main Express entry file
├── frontend                               # Next.js Frontend
│   ├── app
│   │   ├── layout.js                     # Global layout (Header, Footer, Sidebar)
│   │   ├── (auth)                        # Auth routes
│   │   │   ├── login
│   │   │   │   ├── page.js
│   │   │   └── signup
│   │   │       ├── page.js
│   │   ├── (super-admin)                 # Super Admin Dashboard
│   │   │   ├── layout.js
│   │   │   ├── dashboard
│   │   │   │   ├── page.js
│   │   │   └── users
│   │       ├── page.js
│   │       └── [id]
│   │           ├── page.js
│   │   ├── (tenant)                      # Tenant Dashboard
│   │   │   ├── layout.js
│   │   │   ├── dashboard
│   │   │   │   ├── page.js
│   │   │   └── agents
│   │       ├── page.js
│   │       └── [id]
│   │           ├── page.js
│   ├── components                        # Reusable UI components
│   │   ├── auth
│   │   │   ├── LoginForm.js
│   │   │   ├── SignupForm.js
│   │   ├── layout
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Sidebar.js
│   │   │   ├── RoleSwitcher.js
│   │   ├── forms
│   │   │   ├── UserForm.js
│   │   │   └── AgentForm.js
│   ├── hooks                             # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useRole.js
│   │   ├── useDashboard.js
│   ├── lib                               # Utilities and helpers
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── socket.js
│   │   ├── messaging.js
│   │   ├── analytics.js
│   └── redux                             # Redux Toolkit (State Management)
│       ├── slices
│       │   ├── authSlice.js
│       │   ├── userSlice.js
│       │   ├── dashboardSlice.js
│       │   ├── agentSlice.js
│       │   └── analyticsSlice.js
│       └── store.js
├── .gitignore                            # Ignore files
├── package.json                          # Dependencies
├── README.md                             # Project documentation

}