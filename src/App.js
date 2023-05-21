import './App.css';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Skill from './Components/Skill';
import About from './Components/About';
import Service from './Components/Service';
import Client from './Client';
import Calltoaction from './Calltoaction';
import Team from './Components/Team';
// import Pricing from './Pricing';
import Footer from './Footer';

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Header2 / >
        <
        Skill / >
        <
        About / >
        <
        Service / >
        <
        Client / >
        <
        Calltoaction / >
        <
        Team / > { /* <Pricing /> */ } <
        Footer / >
        <
        /div>
    );
}

export default App;