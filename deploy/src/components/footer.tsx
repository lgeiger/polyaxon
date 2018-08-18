import * as React from 'react';

function Footer() {
  const iconStyle = {
    verticalAlign: 'middle',
  };
  return (
    <div className="hero-foot">
      <footer className="footer">
        <div className="content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column">
                  <div>
                    <a href="/" title="home" className="brand">
                      <h3>Polyaxon</h3>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/polyaxon" target="_blank" className="social-icon">
                      <svg
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        viewBox="0 0 40 40"
                        style={iconStyle}
                      >
                        <g>
                          <path
                            d="m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"></path>
                        </g>
                      </svg>
                    </a>
                    <a href="https://hub.docker.com/r/polyaxon" target="_blank" className="social-icon">
                      <svg
                        fill="currentColor"
                        height="1.6em"
                        width="1.6em"
                        viewBox="0 0 24 24"
                        style={iconStyle}
                        version="1.1"
                      >
                        <g id="surface1">
                          <path
                            d="M 13 1 L 13 4 L 16 4 L 16 1 Z M 5 5 L 5 8 L 8 8 L 8 5 Z M 9 5 L 9 8 L 12 8 L 12 5 Z M 13 5 L 13 8 L 16 8 L 16 5 Z M 18.3125 7.84375 C 17.9375 7.878906 17.289063 8.507813 17 9.03125 C 16.269531 10.339844 16.828125 11.988281 16.96875 12.34375 C 16.644531 12.761719 15 13 15 13 L 0.96875 13 C 0.148438 13.027344 0 14.246094 0 14.53125 C -0.0351563 19.5 3.710938 21.988281 7.96875 22 C 14.132813 22.019531 17.871094 19.5625 20.03125 16 L 23 16 C 22.492188 15.871094 21.820313 15.660156 22 15 C 21.800781 15.292969 21.09375 15.582031 20.25 15.625 C 20.335938 15.476563 20.421875 15.339844 20.5 15.1875 C 21.824219 15.109375 22.585938 14.488281 23.15625 13.9375 C 23.808594 13.308594 23.960938 12.953125 24 12.59375 C 24.0625 12.050781 22.617188 11.113281 20.84375 10.90625 C 20.675781 9.261719 18.871094 7.789063 18.3125 7.84375 Z M 1 9 L 1 12 L 4 12 L 4 9 Z M 5 9 L 5 12 L 8 12 L 8 9 Z M 9 9 L 9 12 L 12 12 L 12 9 Z M 13 9 L 13 12 L 16 12 L 16 9 Z M 18.4375 9.9375 C 18.726563 10.261719 19.3125 10.992188 19.4375 11.65625 C 19.519531 12.089844 20.121094 12.429688 20.5625 12.46875 C 21.25 12.53125 21.671875 12.664063 22.0625 12.78125 C 21.933594 13.027344 21.054688 13.550781 19.78125 13.5 C 19.441406 13.484375 19.128906 13.6875 19 14 C 18.921875 14.199219 18.632813 14.632813 18.21875 15.15625 C 18.132813 15.105469 18.050781 15.058594 17.96875 15 C 17.515625 15.425781 15.355469 16.308594 13.96875 15 C 13.1875 15.917969 10.75 15.917969 9.96875 15 C 9.714844 15.703125 6.59375 15.902344 5.96875 15 C 5.792969 15.8125 2.992188 16.199219 1.96875 15 L 1.96875 15.5 C 1.949219 15.328125 1.945313 15.15625 1.96875 15 C 1.96875 15 4.289063 15 5.96875 15 C 7.648438 15 8.082031 15 9.96875 15 C 11.855469 15 13.339844 15.003906 13.96875 15 C 14.132813 15 14.984375 15 15 15 C 17.03125 14.875 18.011719 13.761719 18.34375 13.5 C 18.597656 13.300781 18.851563 12.785156 18.625 12.40625 C 18.609375 12.378906 18.003906 10.660156 18.4375 9.9375 Z M 2.0625 16 L 17.46875 16 C 15.738281 17.8125 12.570313 20.101563 7.96875 20 C 6.574219 19.96875 5.101563 19.753906 4.09375 18.96875 C 5.792969 18.910156 7.28125 18.59375 7.28125 18.59375 C 7.714844 18.511719 7.988281 18.089844 7.90625 17.65625 C 7.824219 17.222656 7.402344 16.917969 6.96875 17 C 6.933594 17.007813 4.667969 17.5625 2.59375 17.3125 C 2.476563 17.097656 2.21875 16.570313 2.0625 16 Z M 8.4375 17 C 8.179688 17 7.96875 17.210938 7.96875 17.46875 C 7.96875 17.726563 8.179688 17.9375 8.4375 17.9375 C 8.695313 17.9375 8.90625 17.726563 8.90625 17.46875 C 8.90625 17.40625 8.898438 17.367188 8.875 17.3125 C 8.84375 17.371094 8.757813 17.40625 8.6875 17.40625 C 8.582031 17.40625 8.53125 17.292969 8.53125 17.1875 C 8.53125 17.117188 8.535156 17.09375 8.59375 17.0625 C 8.542969 17.042969 8.496094 17 8.4375 17 Z "/>
                        </g>
                      </svg>
                    </a>
                    <a href="https://twitter.com/polyaxonAI" target="_blank" className="social-icon">
                      <svg
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        viewBox="0 0 40 40"
                        style={iconStyle}
                      >
                        <g>
                          <path
                            d="m37.7 9.1q-1.5 2.2-3.7 3.7 0.1 0.3 0.1 1 0 2.9-0.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3 0.8 0.1 1.7 0.1 5 0 9-3-2.4-0.1-4.2-1.5t-2.6-3.5q0.8 0.1 1.4 0.1 1 0 1.9-0.3-2.5-0.5-4.1-2.5t-1.7-4.6v0q1.5 0.8 3.3 0.9-1.5-1-2.4-2.6t-0.8-3.4q0-2 0.9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-0.2-0.9-0.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-0.5 4.6-1.7-0.8 2.5-3.2 3.9 2.1-0.2 4.2-1.1z"></path>
                        </g>
                      </svg>
                    </a>
                    <a href="https://medium.com/polyaxon" target="_blank" className="social-icon">
                      <svg
                        fill="currentColor"
                        height="1.7em"
                        width="1.7em"
                        viewBox="0 0 50 50"
                        style={iconStyle}
                        version="1.1"
                      >
                        <g id="surface1">
                          <path
                            d="M 18 41.578125 C 18 42.46875 17.523438 43 16.847656 43 C 16.609375 43 16.34375 42.933594 16.0625 42.792969 L 5.164063 37.273438 C 4.523438 36.949219 4 36.089844 4 35.367188 L 4 8.3125 C 4 7.597656 4.378906 7.175781 4.921875 7.175781 C 5.113281 7.175781 5.328125 7.226563 5.550781 7.339844 L 5.933594 7.535156 C 5.933594 7.535156 5.9375 7.535156 5.9375 7.535156 L 17.949219 13.617188 C 17.96875 13.628906 17.984375 13.648438 18 13.664063 Z M 30.585938 8.882813 L 31.320313 7.675781 C 31.582031 7.246094 32.0625 7 32.550781 7 C 32.664063 7 32.78125 7.015625 32.894531 7.046875 C 32.980469 7.066406 33.070313 7.097656 33.164063 7.144531 L 45.832031 13.558594 C 45.835938 13.558594 45.835938 13.5625 45.835938 13.5625 L 45.847656 13.566406 C 45.855469 13.570313 45.855469 13.582031 45.863281 13.585938 C 45.925781 13.636719 45.953125 13.722656 45.910156 13.792969 L 33.292969 34.558594 L 32.003906 36.675781 L 23.644531 20.304688 Z M 20 30.605469 L 20 17.5625 L 28.980469 35.15625 L 20.902344 31.066406 Z M 46 41.578125 C 46 42.414063 45.503906 42.890625 44.773438 42.890625 C 44.445313 42.890625 44.070313 42.796875 43.675781 42.597656 L 41.867188 41.679688 L 33.789063 37.589844 L 46 17.496094 Z "/>
                        </g>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/polyaxon" target="_blank" className="social-icon">
                      <svg
                        fill="currentColor"
                        height="1.7em"
                        width="1.7em"
                        viewBox="0 0 32 32"
                        style={iconStyle}
                        className="social-icon"
                      >
                        <g id="surface1">
                          <path
                            d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z "></path>
                        </g>
                      </svg>
                    </a>
                    <a href="https://angel.co/polyaxon" target="_blank" className="social-icon">
                      <svg
                        fill="currentColor"
                        height="1.7em"
                        width="1.4em"
                        viewBox="5 3 20 20"
                        style={iconStyle}
                        className="social-icon"
                      >
                        <g id="surface1">
                          <path
                            d="M 17.25 2.03125 C 16.585938 2.132813 15.988281 2.925781 15.84375 3.9375 L 15.03125 9.5625 C 16.046875 9.425781 17.085938 9.355469 17.90625 9.5 L 18.65625 4.34375 C 18.820313 3.191406 18.304688 2.140625 17.53125 2.03125 C 17.433594 2.015625 17.34375 2.015625 17.25 2.03125 Z M 10.1875 2.53125 C 10.089844 2.535156 10 2.5625 9.90625 2.59375 C 9.171875 2.855469 8.890625 3.964844 9.28125 5.0625 L 11.21875 10.53125 C 11.34375 10.40625 11.492188 10.296875 11.65625 10.25 C 12.242188 10.082031 13.054688 9.882813 13.9375 9.71875 L 11.9375 4.09375 C 11.59375 3.132813 10.859375 2.5 10.1875 2.53125 Z M 7.75 9.28125 C 7.449219 9.257813 7.121094 9.351563 6.875 9.5625 C 6.382813 9.984375 6.328125 10.722656 6.75 11.21875 L 9.0625 13.9375 C 9.484375 14.429688 10.226563 14.484375 10.71875 14.0625 C 11.210938 13.640625 11.265625 12.902344 10.84375 12.40625 L 8.53125 9.6875 C 8.320313 9.441406 8.050781 9.304688 7.75 9.28125 Z M 16.59375 10.5 C 15.242188 10.480469 13.488281 10.882813 12.46875 11.0625 C 11.90625 11.164063 11.601563 11.792969 11.75 12.34375 C 11.890625 12.875 12.421875 13.132813 12.96875 13.125 C 13.765625 13.109375 16.0625 13.0625 16.0625 13.0625 L 16.15625 14.3125 C 16.15625 14.3125 11.828125 16.203125 12.9375 19.03125 C 10.554688 16.109375 15 13.9375 15 13.9375 C 15 13.9375 13.613281 14.136719 13.46875 14.15625 C 12.949219 14.226563 12.160156 14.109375 11.96875 13.84375 C 11.898438 14.265625 11.714844 14.589844 11.34375 14.90625 C 10.945313 15.246094 10.457031 15.398438 10 15.375 C 10.277344 16.03125 10.070313 16.867188 9.4375 17.40625 C 8.671875 18.058594 7.46875 17.832031 6.96875 17.09375 C 6.628906 16.589844 5.980469 15.390625 5.65625 14.78125 L 7.1875 16.5625 C 7.609375 17.054688 8.351563 17.109375 8.84375 16.6875 C 9.335938 16.265625 9.390625 15.523438 8.96875 15.03125 L 7.4375 13.25 C 7.015625 12.757813 6.273438 12.703125 5.78125 13.125 C 4.050781 14.246094 5.1875 17.679688 5.875 18.78125 C 7.214844 20.921875 8.914063 22.148438 12.1875 22 C 15.488281 21.851563 17.367188 20.554688 18.40625 16.65625 C 18.964844 14.558594 19.621094 11.40625 17.78125 10.6875 C 17.460938 10.5625 17.042969 10.507813 16.59375 10.5 Z "></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div>Made with <i className="love">♥</i></div>
                </div>
                <div className="column">
                  <ul>
                    <li>
                      <h4>Info</h4>
                    </li>
                    <li>
                      <a href="https://docs.polyaxon.com">Docs</a>
                    </li>
                    <li>
                      <a href="https://docs.polyaxon.com/tutorials/">Tutorials</a>
                    </li>
                    <li>
                      <a href="https://github.com/polyaxon/polyaxon-examples">Examples</a>
                    </li>
                    <li>
                      <a href="https://medium.com/polyaxon">Blog</a>
                    </li>
                    <li>
                      <a href="https://polyaxon.com/about/">About</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>
                      <h4>Support</h4>
                    </li>
                    <li>
                      <a href="https://github.com/polyaxon/polyaxon/issues">Issue Tracker</a>
                    </li>
                    <li>
                      <a
                        href="https://join.slack.com/t/polyaxon/shared_invite/enQtMzQ0ODc2MDg1ODc0LWY2ZTdkMTNmZjBlZmRmNjQxYmYwMTBiMDZiMWJhODI2ZTk0MDU4Mjg5YzA5M2NhYzc5ZjhiMjczMDllYmQ2MDg">Slack
                        Channel
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@polyaxon.com">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div>
                    <h4>Products</h4>
                    <div><a href="https://polyaxon.com/signup/">Subscribe</a></div>
                  </div>
                  <br/>
                  <div>
                    <p>Our mission is to make deep learning simple and accessible to enterprises,
                      if you have special requirements, get in touch with our team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="has-text-centered">© 2018 Polyaxon. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;