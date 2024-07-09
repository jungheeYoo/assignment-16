import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './Country';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// Recoil + Forms
// 오늘의 강의: React JS 마스터클래스: From #6.0 to #6.10
// Using Recoil and React Hook Form build an app like this one:

/* 
User should be able to add a country to the "내가 가고싶은 나라들" list.
User should be able to remove a country from the "내가 가고싶은 나라들" list.
User should be able to move a country from the "내가 가고싶은 나라들" list to the "내가 가본 나라들" list.
User should be able to move a country from the "내가 가본 나라들" list back to the "내가 가고싶은 나라들" list.
User should be able to move a country from the "내가 가본 나라들" to the "내가 좋아하는 나라들" list.
User should be able to move a country from the "내가 좋아하는 나라들" list back to the "내가 가본 나라들" list.
All user actions should be persisted to localStorage and should be restored when the user refreshes the page.
The form should be validated using React Hook Form, and the user should not be able to submit the form if the input is empty.
*/

// Recoil, React Hook Form and Styled Components are already installed in the blueprint.
// Water.css is already imported in the blueprint.
