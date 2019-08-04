import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='card-container'>
          <main>
            <header>
              <span initials='JS' />
              <h2>Jane Smith</h2>
            </header>

            <ul>
              <li>
                <span>B-day: </span>Jan. 1st 1980
              </li>
              <li>
                <span>Addr: </span>123 Uptown St.
              </li>
              <li>
                <span>Phone: </span>555-555-5555
              </li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
