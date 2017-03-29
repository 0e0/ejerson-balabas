import React, { Component } from 'react';

import Strips from '../containers/strips';
import Navigation from './navigation';
import Timeline from '../containers/timeline';

export default class Music extends Component {

  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className='code-div'>
            <h1 className='code-title'>why code?</h1>
            <h2 className='reason-to-code'>I don&#39;t like doing anything if it doesn&#39;t contribute to my mission.
            My initial reason why I wanted to code, like most people, is the promise of making a lot of money.
            But that mindset eventually made it imposible for me to want to code. I was stuck and didn&#39;t know how to
            motivate myself or at least decide to choose what to work on.
            </h2>
            <h2 className='timeline-title'>timeline</h2>
            <Timeline
              classID='timeline-key'
              month='2016'
              activity='activity'
              resourceOne='resource'
              story='There&#39;s so much resources available online on how to learn how to code. My goal for this timeline is to help those who are from different backgrounds to feel less intimidated by the idea of coding.'
            />

            <Timeline
              classID='timeline-div'
              month='september'
              activity='Started learning Mongo DB, Express, React and Redux'
              resourceOne='react.teachable.com'
              story='After learning how to use JQuery, adjusting to how React works was a bit challenging. I became more comfortable with react after coming across Stephen Grider video tutorials in udemy. I do believe that the best way to learn how to code is by creating projects, but in the case of react due to JavaScript fatigue, using a less stressful method helps to ease pain.'
            />

            <Timeline
              classID='timeline-div'
              month='august'
              activity='Testing (Travis CI) and NPM Build System'
              resourceOne='udemy.com'
              story='Learning how to test my code sucked. But I see the benefit of it. This was a tough month, the coding bootcamp I participated in seemed to loose its appeal to me. Mainly because of how much some of my pair complained during the pair programming sessions.'
            />

            <Timeline
              classID='timeline-div'
              month='july'
              activity='Started learning JavaScript and JQuery'
              resourceOne='thinkful.com'
              story='Learning Javascript was very challenging, mainly because of how I am as a person. I don&#39;t like not knowing every single detail of a paticular line of code. I learned that seeing the bigger picture is as important.'
            />

            <Timeline
              classID='timeline-div'
              month='june'
              activity='Started learning HTML5 and CSS3'
              resourceOne='freecodecamp.com'
              story='Once I&#39;ve decided to learn how to code, I initially had my reservations. Nonetheless, I went for it and narrowed my choices to either learning on my own or participating in a coding bootcamp. I went for the latter.'
            />
        </div>

      </div>
    );
  }
};
