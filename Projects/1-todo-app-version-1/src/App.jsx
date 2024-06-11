import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import Card from "./Components/Card.jsx"

function App() {
  return (
    <>
      <Navbar />
      <div className="cards" >
        <Card title="card 1" description="Card 1 Description"></Card>
        <Card title="card 2" description="Card 2 Description"></Card>
        <Card title="card 3" description="Card 3 Description"></Card>
        <Card title="card 4" description="Card 4 Description"></Card>
      </div>
      <Footer />
    </>
  )



}

export default App
