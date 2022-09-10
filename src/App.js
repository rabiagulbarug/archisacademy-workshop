import './App.css';

const App = () => {
    return (
        <div className="App">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="list-item">
                        <img
                            src='/assets/hero/Darklogo.jpg'
                            alt="app-logo"
                            className="app-logo"
                        />
                    </li>
                    <li className="list-item">About</li>
                    <li className="list-item">Products</li>
                    <li className="list-item">Pricing</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Jobs</li>
                    <li className="list-item">More
                        <span className="chevron-down">
                                <img src="/assets/hero/chevron-down.jpg" alt="chevron down"/>
                            </span>
                    </li>
                </ul>
                <ul className="nav-list-right">
                    <li className="list-item">
                        <img
                            src="/assets/hero/play-store.png"
                            alt="google-play"
                            className="store-images"
                        />
                    </li>
                    <li className="list-item">
                        <img
                            src="/assets/hero/app-store.png"
                            alt="app-store"
                            className="store-images"
                        />
                    </li>
                </ul>
            </nav>
            <div className="hero">
                <div className="content-container">
                    <div className="content">
                        <h1>Organise projects. <br/>Get more done.</h1>
                        <button>Get Started</button>
                    </div>
                    <div className="phone-mockup">
                        <img src="/assets/hero/phoneMockup.svg" alt="phone-mockup"/>
                    </div>
                </div>
            </div>
            <div className="logo-clouds">
                <div className="logos-section">
                    <ul>
                        <li><img src="/assets/logo/airbnblogo.jpg" alt="airbnb"/></li>
                        <li><img src="/assets/logo/hubspotlogo.jpg" alt="hubspot"/></li>
                        <li><img src="/assets/logo/googlelogo.jpg" alt="google"/></li>
                        <li><img src="/assets/logo/microsoftlogo.jpg" alt="microsoft"/></li>
                        <li><img src="/assets/logo/walmartlogo.jpg" alt="walmart"/></li>
                        <li><img src="/assets/logo/fedexlogo.jpg" alt="fedex"/></li>
                    </ul>
                </div>
            </div>
            <div className="features">
                <div className="heading">
                    <h2>Tailor-made features</h2>
                    <p>
                        Lorem ipsum is common placeholder text used to demonstrate<br/>
                        the graphic elements of a document or visual presentation.
                    </p>
                </div>
                <div className="features-list">
                    <div className="row-1">
                        <div className="feature-icons">
                            <img src="/assets/icons/icon-1.jpg" alt="feature-1"/>

                            <div className="feature-details">
                                <h5>Robust workflow</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Sed erat nibh tristique ipsum.
                                </p>
                            </div>
                        </div>

                        <div className="feature-icons">
                            <img src="/assets/icons/icon-2.jpg" alt="feature-2"/>

                            <div className="feature-details">
                                <h5>Flexibility</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Sed erat nibh tristique ipsum.
                                </p>
                            </div>
                        </div>

                        <div className="feature-icons">
                            <img src="/assets/icons/icon-3.jpg" alt="feature-3"/>

                            <div className="feature-details">
                                <h5>User friendly</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Sed erat nibh tristique ipsum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row-2">
                        <div className="feature-icons">
                            <img src="/assets/icons/icon-4.jpg" alt="feature-4"/>

                            <div className="feature-details">
                                <h5>Multiple layouts</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Sed erat nibh tristique ipsum.
                                </p>
                            </div>
                        </div>

                        <div className="feature-icons">
                            <img src="/assets/icons/icon-5.jpg" alt="feature-5"/>

                            <div className="feature-details">
                                <h5>Better components</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Sed erat nibh tristique ipsum.
                                </p>
                            </div>
                        </div>

                        <div className="feature-icons">
                            <img src="/assets/icons/icon-6.jpg" alt="feature-6"/>

                            <div className="feature-details">
                                <h5>Well organised</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Sed erat nibh tristique ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="double-quotes">
                    <img
                        src="/assets/testimonial/quoteMark.jpg"
                        alt="double-quote-background"
                    />
                </div>
                <div className="section-heading">
                    <h2>Real Stories from Real Customers</h2>
                    <p>Get inspired by these stories.</p>
                </div>
                <div className="testimonial-1">
                    <img
                        className="logo"
                        src="/assets/logo/airbnblogo.jpg"
                        alt="airbnb-logo"
                    />
                    <div className="testimonial-content">
                        <img className="quotemark" src="" alt="quotemark"/>
                        <div className="feedback-person">
                            <p className="feedback">
                                I used landify and created a landing<br/>
                                page for my startup within a week. The <br/>Landify UI Kit is
                                simple and highly<br/>
                                intuitive, so anyone can use it.
                            </p>
                            <div className="person-details">
                                <p className="person-name">Jone Cooper</p>
                                <p className="person-position">CEO, Airbnb</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-2">
                    <img
                        className="logo"
                        src="/assets/logo/bookMyShowLogo.jpg"
                        alt="logo"
                    />
                    <div className="testimonial-content">
                        <img className="quotemark" src="" alt="quotemark"/>
                        <div className="feedback-person">
                            <p className="feedback">
                                Landify saved our time in <br/>
                                designing my company page.
                            </p>
                            <div className="person-details">
                                <p className="person-name">Kristin Watson</p>
                                <p className="person-position">Co-Founder, BookMyShow</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-3">
                    <img
                        className="logo"
                        src="/assets/logo/hubspotlogo.jpg"
                        alt="hubsport-logo"
                    />
                    <div className="testimonial-content">
                        <img className="quotemark" src="" alt="quotemark"/>
                        <div className="feedback-person">
                            <p className="feedback">
                                To quickly start my startup<br/>
                                landing page design, I was<br/>
                                looking for a landing page UI<br/>
                                Kit. Landify is one of the best<br/>
                                landing page UI kit I have<br/>
                                come across. It’s so flexible,<br/>
                                well organised and easily<br/>
                                editable.
                            </p>
                            <div className="person-details">
                                <p className="person-name">Floyd Miles</p>
                                <p className="person-position">Vice President, GoPro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats">
                <div className="section-heading">
                    <h2 className="section-title">Our 18 years of achievement</h2>
                    <p className="section-description">With our super powers we have reached this</p>
                </div>
                <div className="counts">
                    <div className="count-row-1">
                        <div className="count-icons">
                            <img src="/assets/icons/Icon-7.jpg" alt="icon7"/>
                            <div className="count-detail">
                                <p className="number-detail">10,000+</p>
                                <p className="description-detail">Downloads per day</p>
                            </div>
                        </div>
                        <div className="count-icons">
                            <img src="/assets/icons/Icon-8.jpg" alt="icon8"/>
                            <div className="count-detail">
                                <p className="number-detail">2 Million</p>
                                <p className="description-detail">Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="count-row-2">
                        <div className="count-icons">
                            <img src="/assets/icons/Icon-9.jpg" alt="icon9"/>
                            <div className="count-detail">
                                <p className="number-detail">500+</p>
                                <p className="description-detail">Clients</p>
                            </div>
                        </div>
                        <div className="count-icons">
                            <img src="/assets/icons/Icon-10.jpg" alt="icon10"/>
                            <div className="count-detail">
                                <p className="number-detail">140</p>
                                <p className="description-detail">Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-single">
                <div className="feature-phone-mockup">
                    <img src="/assets/feature/phone-mockup-single.jpg" alt="phone mockup"/>
                </div>
                <div className="feature-content">
                    <div className="content-headline">
                        <h3 className="headline">Headline</h3>
                    </div>
                    <div className="content-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Condimentum diam orci pretium a pharetra, feugiat cursus.
                            Dictumst risus, sem egestas odio cras adipiscing vulputate.
                            Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                        </p>
                    </div>
                    <div className="content-button">
                        <button>Get started</button>
                        <img src="/assets/icons/right-arrow.jpg" alt="right-arrow"/>
                    </div>
                </div>
            </div>
            <div className="feature-single-six">
                <div className="feature-details-section">
                    <div className="section-title">
                        <h3>Enter the world of all fashion trends</h3>
                    </div>
                    <div className="section-detail">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Venenatis scelerisque at quam congue posuere libero in sit quam.
                            Consequat, scelerisque non tincidunt sit lectus senectus.</p>
                    </div>
                </div>
                <div className="cover-image">
                    <img src="/assets/feature/cover-image.jpg" alt="cover image"/>
                </div>
            </div>
            <div className="cta">
                <div className="cta-content">
                    <div className="message">
                        <h2>
                            Manage your projects<br/>
                            from your mobile
                        </h2>
                        <p>
                            Download the app to manage your projects, keep track of the<br/>
                            progress and complete tasks without procastinating. Stay on<br/>
                            track and complete on time!
                        </p>
                    </div>
                    <div className="get-the-app">
                        <p>Get the App</p>
                        <div className="badges">
                            <img src="/assets/hero/play-store.png" alt="play-store"/>
                            <img src="/assets/hero/app-store.png" alt="app-store"/>
                        </div>
                    </div>
                </div>
                <div className="phone-mockup-1">
                    <img src="/assets/feature/phoneMockup1.png" alt="phone-mockup-1"/>
                </div>
                <div className="phone-mockup-2">
                    <img src="/assets/feature/phoneMockup2.png" alt="phone-mockup-2"/>
                </div>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <img src="/assets/logo/Logo.png" alt="footer-logo"/>
                    <div className="links">
                        <div className="footer-row-1">
                            <ul>
                                <li>Download Now</li>
                                <li>License</li>
                            </ul>
                        </div>
                        <div className="footer-row-2">
                            <ul>
                                <li>About</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Careers</li>
                                <li>Help</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <p>© 2020 Landify UI Kit. All rights reserved</p>
                </div>
                <div className="footer-right">
                    <p>Get the App</p>
                    <img src="/assets/hero/app-store.png" alt="app-store"/>
                    <img src="/assets/hero/play-store.png" alt="play-store"/>
                </div>
            </div>
        </div>
    );
}

export default App;
