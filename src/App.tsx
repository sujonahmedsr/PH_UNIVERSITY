import MainLayouts from "./components/layouts/MainLayouts"
import ProtectedRoute from "./components/layouts/ProtectedRoute"

function App() {

  return (
    <>
      <ProtectedRoute>
        <MainLayouts />
      </ProtectedRoute>

    </>
  )
}

export default App
