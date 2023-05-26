import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card' ;
import data from './data';
import logo from './images/airbnb-Logo1.png' ; 

function App() {
  const cards = data.map(item => {
    return(<Card 
      
      img={item.coverImg} rating={item.stats.rating} 
      reviewCount={item.stats.reviewCount} location={item.location} price={item.price}
      title={item.title} openSpots={item.openSpots}
 
      />)
  })
  return (
    <div className="App">
   
     <Navbar />
     <Hero />
    <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}

export default App;

 /* <Card 
     img="virat.png"
     rating="5.0"
     reviewCount="6"
     location="India"
     title="Life Lessons with Virat Kohli"
     price="$136"
     /> */
