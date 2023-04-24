import AboutPage from "./pages/AboutPage"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import Header from "./components/Header"
import AboutIconLink from "./components/AboutIconLink"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
