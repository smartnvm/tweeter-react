
import './App.css';
// import './original.css';

import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';


function App() {
  return (
    <body>
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <TweetList />
      </main>
    </body >
  );
}

export default App;
