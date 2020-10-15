import React, {useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Question from './components/Question';
import Result from './components/Result';
import Intro from './components/Intro';
import Landing from './components/Landing';

function App() {
  
  const scores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  }
  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores))
    //eslint-disable-next-line
  }, [])
  const questions = [
    "You have shared a close family's photo on the internet.",
    
    "Your passwords consist of a mix of numbers letters and symbols",

    "You use a Two-factor authentication app",
    
    "You've logged out of your account after using a public computer or friend's phone.",
    
    `You've enabled "remember my password" on your laptop`,
    
    "You've clicked on links sent to you via email",
    
    'You check to see the "https://" on the address bar before proceeding to do anything',
    
    "You've accidentally downloaded a virus to your computer",
    
    "You've downloaded songs and movies illegally from a random website",
    
    "Would you immediately click on a link sent to you by an acquaintance?",
  ]
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/home' component={Intro} />
          <Route exact path='/quiz' component={Intro} />
          <Route exact path='/results' component={Result} />

          <Route 
            exact
            path='/quiz/q1'
            component={() => <Question question={questions[0]} id={1} yes={0} no={1} next={'/quiz/q2'} />}
          />

          <Route 
            exact
            path='/quiz/q2'
            component={() => <Question question={questions[1]} id={2} yes={1} no={0} next={'/quiz/q3'} />}
          />

          <Route 
            exact
            path='/quiz/q3'
            component={() => <Question question={questions[2]} id={3} yes={1} no={0} next={'/quiz/q4'} />}
          />

          <Route 
            exact
            path='/quiz/q4'
            component={() => <Question question={questions[3]} id={4} yes={1} no={0} next={'/quiz/q5'} />}
          />

          <Route 
            exact
            path='/quiz/q5'
            component={() => <Question question={questions[4]} id={5} yes={0} no={1} next={'/quiz/q6'} />}
          />

          <Route 
            exact
            path='/quiz/q6'
            component={() => <Question question={questions[5]} id={6} yes={0} no={1} next={'/quiz/q7'} />}
          />

          <Route 
            exact
            path='/quiz/q7'
            component={() => <Question question={questions[6]} id={7} yes={1} no={0} next={'/quiz/q8'} />}
          />

          <Route 
            exact
            path='/quiz/q8'
            component={() => <Question question={questions[7]} id={8} yes={0} no={1} next={'/quiz/q9'} />}
          />

          <Route 
            exact
            path='/quiz/q9'
            component={() => <Question question={questions[8]} id={9} yes={0} no={1} next={'/quiz/q10'} />}
          />

          <Route 
            exact
            path='/quiz/q10'
            component={() => <Question question={questions[9]} id={10} yes={0} no={1} next={'/results'} />}
          />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
