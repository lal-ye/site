import React from 'react';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <>
      <header>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <article className="container">
          <h1>አንደምን ቆያችሁ</h1>
          <p>
            My name is <strong>Abenezer Kassahun</strong> and I am a <strong>
              <br />
              wannabe ፠ አበልፃጊ ፠
            </strong>.
          </p>
        </article>
        <article className="container">
          <h1>
            <a href="https://github.com/lal-ye/-Abenezer-Kassahun.github.io" target="_blank">Github</a>
          </h1>
        </article>
        <article className="container">
          <h1>Lets see how many things we can add to it !!!</h1>
          <p>Lets try and make it as wacky as much as possible</p>
          <Button>Click Me!</Button>
        </article>
      </main>
    </>
  );
}

export default App;
