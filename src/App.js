import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"
import './styles.css'

function App() {
  <Hero />
const cards = data.map(item => {
return (
  <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      number={item.stats.number}
      country={item.country}
      title={item.title}
      price={item.price}
  />
)
})        

return (
<div>
  <Navbar />
  <Hero />
  <section className="card-list">
  {cards}
  </section>
</div>
)
}

export default App;

