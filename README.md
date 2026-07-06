
```
Event-Hive
├─ client
│  ├─ .env.example
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.svg
│  │  └─ icons.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  ├─ adminApi.js
│  │  │  ├─ authApi.js
│  │  │  ├─ axiosClient.js
│  │  │  ├─ bookingApi.js
│  │  │  ├─ eventApi.js
│  │  │  └─ organizerApi.js
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ hero.png
│  │  │  ├─ react.svg
│  │  │  └─ vite.svg
│  │  ├─ components
│  │  │  ├─ admin
│  │  │  │  ├─ OrganizerApprovalCard.jsx
│  │  │  │  └─ PlatformStatsCard.jsx
│  │  │  ├─ booking
│  │  │  │  ├─ BookingSummary.jsx
│  │  │  │  ├─ SeatLegend.jsx
│  │  │  │  └─ SeatMap.jsx
│  │  │  ├─ common
│  │  │  │  ├─ Badge.jsx
│  │  │  │  ├─ Button.jsx
│  │  │  │  ├─ Input.jsx
│  │  │  │  ├─ Loader.jsx
│  │  │  │  └─ Modal.jsx
│  │  │  ├─ events
│  │  │  │  ├─ EventCard.jsx
│  │  │  │  ├─ EventFilters.jsx
│  │  │  │  └─ EventGrid.jsx
│  │  │  ├─ layout
│  │  │  │  ├─ Footer.jsx
│  │  │  │  ├─ Navbar.jsx
│  │  │  │  └─ ProtectedRoute.jsx
│  │  │  └─ organizer
│  │  │     ├─ EventForm.jsx
│  │  │     ├─ OrganizerEventCard.jsx
│  │  │     └─ SalesTable.jsx
│  │  ├─ context
│  │  │  ├─ AuthContext.jsx
│  │  │  └─ SocketContext.jsx
│  │  ├─ hooks
│  │  │  ├─ useAuth.js
│  │  │  ├─ useSeatSelection.js
│  │  │  └─ useSocket.js
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ admin
│  │  │  │  ├─ AdminEventsPage.jsx
│  │  │  │  ├─ AdminOrganizersPage.jsx
│  │  │  │  └─ AdminOverviewPage.jsx
│  │  │  ├─ CheckoutPage.jsx
│  │  │  ├─ ConfirmationPage.jsx
│  │  │  ├─ DashboardPage.jsx
│  │  │  ├─ EventDetailsPage.jsx
│  │  │  ├─ EventListingPage.jsx
│  │  │  ├─ LandingPage.jsx
│  │  │  ├─ LoginPage.jsx
│  │  │  ├─ organizer
│  │  │  │  ├─ CreateEventPage.jsx
│  │  │  │  ├─ EditEventPage.jsx
│  │  │  │  ├─ OrganizerDashboard.jsx
│  │  │  │  └─ OrganizerEventBookings.jsx
│  │  │  └─ SignupPage.jsx
│  │  ├─ router.jsx
│  │  ├─ store
│  │  │  ├─ slices
│  │  │  │  ├─ authSlice.js
│  │  │  │  └─ bookingSlice.js
│  │  │  └─ store.js
│  │  └─ utils
│  │     ├─ formatCurrency.js
│  │     └─ validators.js
│  └─ vite.config.js
├─ docker-compose.yml
├─ package-lock.json
├─ package.json
├─ README.md
├─ server
│  ├─ .env.example
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  └─ src
│     ├─ app.js
│     ├─ config
│     │  ├─ db.js
│     │  ├─ env.js
│     │  └─ redis.js
│     ├─ controllers
│     │  ├─ adminController.js
│     │  ├─ authController.js
│     │  ├─ bookingController.js
│     │  ├─ eventController.js
│     │  └─ organizerController.js
│     ├─ middlewares
│     │  ├─ authMiddleware.js
│     │  ├─ errorHandler.js
│     │  ├─ ownershipMiddleware.js
│     │  ├─ rateLimiter.js
│     │  ├─ roleMiddleware.js
│     │  └─ validateRequest.js
│     ├─ models
│     │  ├─ Booking.js
│     │  ├─ Event.js
│     │  ├─ Seat.js
│     │  └─ User.js
│     ├─ queues
│     │  ├─ bullClient.js
│     │  └─ producers
│     │     └─ addTicketJob.js
│     ├─ routes
│     │  ├─ adminRoutes.js
│     │  ├─ authRoutes.js
│     │  ├─ bookingRoutes.js
│     │  ├─ eventRoutes.js
│     │  └─ organizerRoutes.js
│     ├─ services
│     │  ├─ bookingService.js
│     │  ├─ eventService.js
│     │  ├─ recommendationService.js
│     │  └─ seatLockService.js
│     ├─ sockets
│     │  ├─ seatEvents.js
│     │  └─ socketServer.js
│     ├─ utils
│     │  ├─ apiError.js
│     │  ├─ apiResponse.js
│     │  ├─ aysncHandler.js
│     │  ├─ generateToken.js
│     │  └─ logger.js
│     └─ validators
│        ├─ authSchema.js
│        ├─ bookingSchema.js
│        └─ eventSchema.js
├─ shared
│  └─ constants.js
└─ worker
   ├─ .env.example
   ├─ package-lock.json
   ├─ package.json
   ├─ src
   │  ├─ config
   │  │  ├─ db.js
   │  │  └─ redis.js
   │  ├─ jobs
   │  │  ├─ generateTicketPdf.js
   │  │  ├─ sendConfirmationEmail.js
   │  │  └─ updateRecommendations.js
   │  ├─ processors
   │  │  └─ ticketProcessor.js
   │  └─ utils
   │     └─ mailer.js
   └─ worker.js

```
(eventhive_architecture.png)