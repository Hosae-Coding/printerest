import { useEffect } from 'react';
import {
   Add,
   Chat,
   FavoriteRounded,
   NotificationAdd,
   Person,
   QuestionMark,
   SearchOffRounded,
   SearchRounded,
} from '@mui/icons-material';
import './App.css';
import MenuContainer from './components/MenuContainer';
import logo from './img/logo.png';
import Pin from './components/Pin';
import Data from './dummy/Data';

function App() {
   useEffect(() => {
      const allIcon = document.querySelectorAll('.iconContainer');

      function setMenuActive() {
         allIcon.forEach((n) => n.classList.remove('black'));
         this.classList.add('black');
      }

      allIcon.forEach((n) => n.addEventListener('click', setMenuActive));
   }, []);

   return (
      <div className="App">
         <div className="menuContainer">
            <img src={logo} alt="logo" className="logo" />
            <div className="subMenu">
               <div>
                  <MenuContainer icon={<Person />} />
                  <MenuContainer icon={<NotificationAdd />} />
                  <MenuContainer icon={<Chat />} />
               </div>{' '}
               <div>
                  <MenuContainer icon={<FavoriteRounded />} />
               </div>{' '}
               <div>
                  <MenuContainer icon={<QuestionMark />} />
                  <MenuContainer icon={<Add />} />
               </div>
            </div>
         </div>

         <main>
            <div className="searchBox">
               <input type="text" placeholder="Search.." />
               <SearchRounded className="search" />
            </div>
            <div className="mainContainer">
               {Data &&
                  Data.map((Data) => (
                     <Pin
                        key={Data.id}
                        pinSize={Data.size}
                        imgSrc={Data.imgSrc}
                        name={Data.name}
                        link={Data.link}
                     />
                  ))}
            </div>
         </main>
      </div>
   );
}

export default App;
