import logo from './logo.svg';
import './App.css';
import Header from './Header'
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';

const reasons = [
{
img: './images/icon1.png',
header: 'Declarative',
text: 'React makes it painles to create interactive UIs.',
id: 1
},

{
  img: './images/icon2.png',
  header: 'Components',
  text: 'Build encapsulated components that manage their state.',
  id: 2
  },

  {
    img: './images/icon3.png',
    header: 'Single-Way',
    text: 'A set of immutable values are passed to the components.',
    id: 3
    },

    {
      
      header: 'JSX',
      img: './images/icon4.png',
      text: 'Statically-typed. designed to run on modern browsers.',
      id: 4
      }




]





function App() {
  return (
    <div className="App">
<Header/>
<MainContent/>
<SecondaryContent reasons={reasons}/>

    </div>
  );
}

export default App;
