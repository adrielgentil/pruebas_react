import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';

function App() {
  let peliculas = [
    {
      title: 'oblivion',
      year:'2012',
      score:'8.1',
      director:'Joss Whedon',
      release:'1 May 2015',
      duration:'2h21',
      cast:'Robert Downey Jr., Chris Evans, Chris Hemsworth',
      image:'images/uploads/mv1.jpg'
    },
    {
      title: 'into the wild',
      year:'2014',
      score:'7.8',
      director:'Anthony Russo, Joe Russo',
      release:'1 May 2015',
      duration:'2h21',
      cast:'Samuel L. Jackson, Chris Evans, Scarlett Johansson',
      image:'images/uploads/mv2.jpg'
    },
    {
      title: 'blade runner',
      year:'2015',
      score:'7.3',
      director:'Peyton Reed',
      release:'1 May 2015',
      duration:'2h21',
      cast:'Paul Rudd, Michael Douglas',
      image:'images/uploads/mv3.jpg'
    }
  ]
  return (
    <PageWrapper>
      <Pelicula title='oblivion' year='2012' score='8.1' director='Joss Whedon' release='1 May 2015' duration='2h21'
        cast='Robert Downey Jr., Chris Evans, Chris Hemsworth' image='images/uploads/mv1.jpg'>
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      </Pelicula>

      <Pelicula title='into the wild' year='2014' score='7.8' director='Anthony Russo, Joe Russo' release='1 May 2015' duration='2h21'
        cast='Samuel L. Jackson, Chris Evans, Scarlett Johansson' image='images/uploads/mv2.jpg'>
        As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
      </Pelicula>

      <Pelicula title='blade runner' year='2015' score='7.3' director='Peyton Reed' release='1 May 2015' duration='2h21'
        cast='Paul Rudd, Michael Douglas' image='images/uploads/mv3.jpg'>
        As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
      </Pelicula>
    </PageWrapper>

  );
}

export default App;
