<template>
  <!-- page wrapper -->
  <div class="boxed_wrapper">
    <!-- preloader -->
    <div class="preloader"
      v-if="loading">
    </div>
    <!-- preloader -->

    <div v-else>
      <!-- main header -->
      <header class="main-header home-1">
          <div class="outer-container">
              <div class="container">
                  <div class="main-box clearfix">
                      <div class="logo-box pull-left">
                          <figure class="logo"><a href="index-2.html"><img src="@/assets/images/adev-logo-02.png" alt="" width="200px"></a></figure>
                      </div>
                      <div class="menu-area pull-right">
                          <!--Mobile Navigation Toggler-->
                          <div class="mobile-nav-toggler">
                              <i class="icon-bar"></i>
                              <i class="icon-bar"></i>
                              <i class="icon-bar"></i>
                          </div>
                          <nav class="main-menu navbar-expand-md navbar-light">
                              <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                  <ul class="navigation clearfix">
                                      <li class="current dropdown"><a href="#">Home</a>
                                          <ul class="megamenu clearfix">
                                              <li><a href="index-2.html">App Landing</a></li>
                                              <li><a href="e-commerce.html">E-Commerce</a></li>
                                              <li><a href="seo.html">SEO</a></li>
                                              <li><a href="account-billing.html">Account & Billing</a></li>
                                              <li><a href="app-showcase.html">App Showcase</a></li>
                                              <li><a href="hr-management.html">HR Management</a></li>
                                              <li><a href="email-marketing.html">Email Marketing</a></li>
                                              <li><a href="payment-processing.html">Payment Processing</a></li>
                                              <li><a href="startup.html">Startup</a></li>
                                              <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                              <li><a href="cloud-saas.html">Cloud Based Saas</a></li>
                                              <li><a href="prototype-wireframing.html">Prototype & Wireframing</a></li>
                                              <li><a href="crm-management.html">CRM Management</a></li>
                                              <li><a href="project-management.html">Project Management</a></li>
                                              <li><a href="digital-studio.html">Digital Studio</a></li>
                                              <li><a href="crypto.html">Crypto</a></li>
                                              <li><a href="ride-sharing.html">Ride Sharing</a></li>
                                              <li><a href="web-hosting.html">Web Hosting</a></li>
                                              <li><a href="home-charity.html">Home Charity</a></li>
                                          </ul>
                                      </li> 
                                      <li class="dropdown"><a href="#">Pages</a>
                                          <ul>
                                              <li class="dropdown"><a href="#">Team Page</a>
                                                  <ul>
                                                      <li><a href="team.html">Team 01</a></li>
                                                      <li><a href="team-2.html">Team 02</a></li>
                                                      <li><a href="team-3.html">Team 03</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Service Page</a>
                                                  <ul>
                                                      <li><a href="service.html">Our Services</a></li>
                                                      <li><a href="service-details.html">Service Details</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Pricing Page</a>
                                                  <ul>
                                                      <li><a href="pricing.html">Pricing 01</a></li>
                                                      <li><a href="pricing-2.html">Pricing 02</a></li>
                                                      <li><a href="pricing-3.html">Pricing 03</a></li>
                                                      <li><a href="pricing-4.html">Pricing 04</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Testimonial Page</a>
                                                  <ul>
                                                      <li><a href="testimonial.html">Testimonial 01</a></li>
                                                      <li><a href="testimonial-2.html">Testimonial 02</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="about.html">About Us</a></li>
                                              <li><a href="faq.html">Faq</a></li>
                                              <li><a href="error.html">Error Page</a></li>
                                          </ul>
                                      </li>
                                      <li class="dropdown"><a href="#">Portfolio</a>
                                          <ul>
                                              <li><a href="portfolio.html">Portfolio 01</a></li>
                                              <li><a href="portfolio-2.html">Portfolio 02</a></li>
                                              <li><a href="portfolio-3.html">Portfolio 03</a></li>
                                              <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                          </ul>
                                      </li>
                                      <li class="dropdown"><a href="#">Element</a>
                                          <ul>
                                              <li class="dropdown"><a href="#">Miscellaneous 01</a>
                                                  <ul>
                                                      <li><a href="optimization-application.html">Optimization Application</a></li>
                                                      <li><a href="device-friendly.html">Device Friendly</a></li>
                                                      <li><a href="software-product.html">Software Product</a></li>
                                                      <li><a href="betterlook-layout.html">Betterlook Layout</a></li>
                                                      <li><a href="whereyou-layout.html">Whereyou Layout</a></li>
                                                      <li><a href="popular-causes.html">Popular Causes</a></li>
                                                      <li><a href="wework-layout.html">We work Layout</a></li>
                                                      <li><a href="campaing-layout.html">Campaing Layout</a></li>
                                                      <li><a href="donate-layout.html">Donate Layout</a></li>
                                                      <li><a href="make-difference.html">Make Difference</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Miscellaneous 02</a>
                                                  <ul>
                                                      <li><a href="solve-problem.html">Solve Problem</a></li>
                                                      <li><a href="marketing-benefits.html">Marketing Benefits</a></li>
                                                      <li><a href="streamline-layout.html">Streamline Layout</a></li>
                                                      <li><a href="powerful-management.html">Powerful Management</a></li>
                                                      <li><a href="transactions-work.html">Transactions Work</a></li>
                                                      <li><a href="increase-website.html">Increase Website</a></li>
                                                      <li><a href="managed-wordpress.html">Managed Wordpress</a></li>
                                                      <li><a href="history-layout.html">History Layout</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Feature Layout</a>
                                                  <ul>
                                                      <li><a href="feature-layout-1.html">Feature Layout 01</a></li>
                                                      <li><a href="feature-layout-2.html">Feature Layout 02</a></li>
                                                      <li><a href="feature-layout-3.html">Feature Layout 03</a></li>
                                                      <li><a href="feature-layout-4.html">Feature Layout 04</a></li>
                                                      <li><a href="feature-layout-5.html">Feature Layout 05</a></li>
                                                      <li><a href="feature-layout-6.html">Feature Layout 06</a></li>
                                                      <li><a href="feature-layout-7.html">Feature Layout 07</a></li>
                                                      <li><a href="feature-layout-8.html">Feature Layout 08</a></li>
                                                      <li><a href="feature-layout-9.html">Feature Layout 09</a></li>
                                                      <li><a href="feature-layout-10.html">Feature Layout 10</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Subscribe Layout</a>
                                                  <ul>
                                                      <li><a href="subscribe-layout-1.html">Subscribe Layout 01</a></li>
                                                      <li><a href="subscribe-layout-2.html">Subscribe Layout 02</a></li>
                                                      <li><a href="subscribe-layout-3.html">Subscribe Layout 03</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Video Layout</a>
                                                  <ul>
                                                      <li><a href="video-layout-1.html">Video Layout 01</a></li>
                                                      <li><a href="video-layout-2.html">Video Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Download Layout</a>
                                                  <ul>
                                                      <li><a href="download-layout-1.html">Download Layout 01</a></li>
                                                      <li><a href="download-layout-2.html">Download Layout 02</a></li>
                                                      <li><a href="download-layout-3.html">Download Layout 03</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Rider Layout</a>
                                                  <ul>
                                                      <li><a href="rider-layout-1.html">Rider Layout 01</a></li>
                                                      <li><a href="rider-layout-2.html">Rider Layout 02</a></li>
                                                      <li><a href="rider-layout-3.html">Rider Layout 03</a></li>
                                                      <li><a href="rider-layout-4.html">Rider Layout 04</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Solution Layout</a>
                                                  <ul>
                                                      <li><a href="solution-layout-1.html">Solution Layout 01</a></li>
                                                      <li><a href="solution-layout-2.html">Solution Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">News Layout</a>
                                                  <ul>
                                                      <li><a href="news-layout-1.html">News Layout 01</a></li>
                                                      <li><a href="news-layout-2.html">News Layout 02</a></li>
                                                      <li><a href="news-layout-3.html">News Layout 03</a></li>
                                                      <li><a href="news-layout-4.html">News Layout 04</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Application Layout</a>
                                                  <ul>
                                                      <li><a href="application-layout-1.html">Application Layout 01</a></li>
                                                      <li><a href="application-layout-2.html">Application Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Organization Layout</a>
                                                  <ul>
                                                      <li><a href="organization-layout-1.html">Organization Layout 01</a></li>
                                                      <li><a href="organization-layout-2.html">Organization Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Work Layout</a>
                                                  <ul>
                                                      <li><a href="work-layout-1.html">Work Layout 01</a></li>
                                                      <li><a href="work-layout-2.html">Work Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Service Layout</a>
                                                  <ul>
                                                      <li><a href="service-layout-1.html">Service Layout 01</a></li>
                                                      <li><a href="service-layout-2.html">Service Layout 02</a></li>
                                                      <li><a href="service-layout-3.html">Service Layout 03</a></li>
                                                      <li><a href="service-layout-4.html">Service Layout 04</a></li>
                                                      <li><a href="service-layout-5.html">Service Layout 05</a></li>
                                                      <li><a href="service-layout-6.html">Service Layout 06</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Recruitment Layout</a>
                                                  <ul>
                                                      <li><a href="recruitment-layout-1.html">Recruitment Layout 01</a></li>
                                                      <li><a href="recruitment-layout-2.html">Recruitment Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Reasons Layout</a>
                                                  <ul>
                                                      <li><a href="reasons-layout-1.html">Reasons Layout 01</a></li>
                                                      <li><a href="reasons-layout-2.html">Reasons Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Hosting Layout</a>
                                                  <ul>
                                                      <li><a href="hosting-layout-1.html">Hosting Layout 01</a></li>
                                                      <li><a href="hosting-layout-2.html">Hosting Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Counter Layout</a>
                                                  <ul>
                                                      <li><a href="counter-layout-1.html">Counter Layout 01</a></li>
                                                      <li><a href="counter-layout-2.html">Counter Layout 02</a></li>
                                                  </ul>
                                              </li>
                                              <li class="dropdown"><a href="#">Pricing Layout</a>
                                                  <ul>
                                                      <li><a href="pricing-layout-1.html">Pricing Layout 01</a></li>
                                                      <li><a href="pricing-layout-2.html">Pricing Layout 02</a></li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </li>
                                      <li class="dropdown"><a href="#">Latest News</a>
                                          <ul>
                                              <li><a href="blog.html">Latest News</a></li>
                                              <li><a href="blog-details.html">News Details</a></li>
                                          </ul>
                                      </li>                              
                                      <li><a href="contact.html">Contact</a></li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>

          <!--sticky Header-->
          <div class="sticky-header">
              <div class="container clearfix">
                  <figure class="logo-box"><a href="index-2.html"><img src="@/assets/images/small-logo.png" alt=""></a></figure>
                  <div class="menu-area">
                      <nav class="main-menu clearfix">
                          <!--Keep This Empty / Menu will come through Javascript-->
                      </nav>
                  </div>
              </div>
          </div>
      </header>
      <!-- main-header end -->

      <!-- Mobile Menu  -->
      <div class="mobile-menu">
          <div class="menu-backdrop"></div>
          <div class="close-btn"><i class="fas fa-times"></i></div>
          
          <nav class="menu-box">
              <div class="nav-logo"><a href="index-2.html"><img src="@/assets/images/logo.png" alt="" title=""></a></div>
              <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
              <div class="contact-info">
                  <h4>Contact Info</h4>
                  <ul>
                      <li>Chicago 12, Melborne City, USA</li>
                      <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                      <li><a href="mailto:info@example.com">info@example.com</a></li>
                  </ul>
              </div>
              <div class="social-links">
                  <ul class="clearfix">
                      <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                      <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                      <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                      <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                  </ul>
              </div>
          </nav>
      </div><!-- End Mobile Menu -->

      <!-- banner-section -->
      <section class="banner-section">
          <div class="bg-layer" :style="{ backgroundImage: `url(${backgroundUrl[0]})` }"></div>
          <div class="pattern-bg" :style="{ backgroundImage: `url(${backgroundUrl[1]})` }"></div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12 content-column reset">
                      <div class="content-box">
                          <h1>ADEV Software e Recursos de TI</h1>
                          <div class="text">Moldando negócios com soluções inteligentes e ajudando pessoas com tecnologia. Venha construir algo incrível com agente!</div>
                          <div class="btn-box"><a href="#">Fale com um consultor!</a></div>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div class="image-box float-bob-y clearfix">
                          <figure class="image image-1 wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms"><img src="@/assets/images/resource/phone-1.png" alt=""></figure>
                          <figure class="image image-2 wow fadeInUp" data-wow-delay="1500ms" data-wow-duration="1500ms"><img src="@/assets/images/resource/phone-2.png" alt=""></figure>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- banner-section end -->

      <!-- feature-section -->
      <section class="feature-section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-5 col-md-12 col-sm-12 image-column">
                      <div id="iamge_block_01">
                          <div class="image-box float-bob-y">
                              <figure class="image wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="@/assets/images/resource/phone-3.png" alt=""></figure>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-7 col-md-12 col-sm-12 content-column">
                      <div id="content_block_01">
                          <div class="content-box">
                              <div class="sec-title">
                                  <h2>Amazing Features</h2>
                                  <p>Cumque adipisci anim quisque provident posuere blandit accumsan delectus quam quos interdum sociosqu.</p>
                              </div>
                              <div class="inner-box wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                  <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                          <div class="single-item">
                                              <div class="bg-layer" :style="{ backgroundImage: `url(${backgroundUrl[2]})` }"></div>
                                              <div class="icon-box"><i class="flaticon-app-1"></i></div>
                                              <h5><a href="#">Unique Design</a></h5>
                                              <div class="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                          </div>
                                      </div>
                                      <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                          <div class="single-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                              <div class="bg-layer" :style="{ backgroundImage: `url(${backgroundUrl[2]})` }"></div>
                                              <div class="icon-box"><i class="flaticon-target"></i></div>
                                              <h5><a href="#">Easy And New Project</a></h5>
                                              <div class="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                          </div>
                                      </div>
                                      <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                          <div class="single-item wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                              <div class="bg-layer" :style="{ backgroundImage: `url(${backgroundUrl[2]})` }"></div>
                                              <div class="icon-box"><i class="flaticon-shipping"></i></div>
                                              <h5><a href="#">Track Anything</a></h5>
                                              <div class="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                          </div>
                                      </div>
                                      <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                          <div class="single-item wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                                              <div class="bg-layer" :style="{ backgroundImage: `url(${backgroundUrl[2]})` }"></div>
                                              <div class="icon-box"><i class="flaticon-dashboard"></i></div>
                                              <h5><a href="#">Unlimited Dashboard</a></h5>
                                              <div class="text">Integer quis mollis lacus maecenas in ornare ex sed scelerisque nec elit nec vehicula duis pretium libero</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- feature-section -->

      <!-- video-section -->
      <section class="video-section">
          <div class="bg-column" :style="{ backgroundImage: `url(${backgroundUrl[8]})` }"></div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12 video-column">
                      <div class="video-inner">
                          <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption="">
                              <i class="flaticon-play-button"></i>
                              <span class="ripple"></span>
                          </a>
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_04">
                          <div class="content-box">
                              <div class="sec-title"><h2>Video Demo App</h2></div>
                              <div class="text">Retarget past customers with second-chance offers and reach new audiences with geo-targeted campaigns during peak dining times using Forks’ push notifications.</div>
                              <div class="btn-box"><a href="#" class="theme-btn-two">Play Video Now</a></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- video-section end -->
    
    <!-- team-style-two -->
    <section class="team-style-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 inner-content">
                    <div class="inner-content">
                         <div class="team-block-two">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure class="image-box"><a href="#"><img src="../assets/images/resource/team-13.jpg" alt=""></a></figure>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 content-column d-flex">
                                    <div class="content-box my-auto">
                                        <span>Developer</span>
                                        <h4><a href="#">Roberto Willis</a></h4>
                                        <div class="text">Even the most beautiful brand is nothing without the audience and their reactions</div>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-two">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure class="image-box"><a href="#"><img src="../assets/images/resource/team-14.jpg" alt=""></a></figure>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 content-column d-flex">
                                    <div class="content-box my-auto">
                                        <span>Developer</span>
                                        <h4><a href="#">Foqrul mub</a></h4>
                                        <div class="text">Even the most beautiful brand is nothing without the audience and their reactions</div>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 inner-content">
                    <div class="inner-content">
                        <div class="team-block-two">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure class="image-box"><a href="#"><img src="../assets/images/resource/team-16.jpg" alt=""></a></figure>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 content-column d-flex">
                                    <div class="content-box my-auto">
                                        <span>Head of Finance</span>
                                        <h4><a href="#">Tamim Rf</a></h4>
                                        <div class="text">Even the most beautiful brand is nothing without the audience and their reactions</div>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="team-block-two">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure class="image-box"><a href="#"><img src="../assets/images/resource/team-17.jpg" alt=""></a></figure>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 content-column d-flex">
                                    <div class="content-box my-auto">
                                        <span>Ceo-founder</span>
                                        <h4><a href="#">Emdad Hanza</a></h4>
                                        <div class="text">Even the most beautiful brand is nothing without the audience and their reactions</div>
                                        <ul class="team-social">
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- team-style-two end -->
   
    
    <!-- main-footer -->
    <footer class="main-footer style-five style-six">
        <div class="image-layer" :style="{ backgroundImage: `url(${backgroundUrl[12]})` }"></div>
        <div class="container">
            <div class="footer-top">
                <div class="widget-section">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="about-widget footer-widget">
                                <figure class="footer-logo"><a href="index-2.html"><img src="@/assets/images/adev-logo-02.png" alt="" width="200px"></a></figure>
                                <div class="text">Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor .........</div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="links-widget footer-widget">
                                <h4 class="widget-title">Services</h4>
                                <div class="widget-content">
                                    <ul class="list clearfix">
                                        <li><a href="#">Business Dashboards</a></li>
                                        <li><a href="#">Sales Analytics</a></li>
                                        <li><a href="#">Digital Marketing</a></li>
                                        <li><a href="#">Financial Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="contact-widget footer-widget">
                                <h4 class="widget-title">Contact Us</h4>
                                <div class="widget-content">
                                    <ul class="contact-info clearfix">
                                        <li><i class="fas fa-map-marker-alt"></i> 25 Bedford St. New York City.</li>
                                        <li><i class="fas fa-phone"></i><a href="tel:0665184575181">(+066) 518 - 457 - 5181</a></li>
                                        <li><i class="fas fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></li>
                                    </ul>
                                </div>
                                <ul class="social-links clearfix">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-skype"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="links-widget footer-widget">
                                <h4 class="widget-title">About Company</h4>
                                <div class="widget-content">
                                    <ul class="list clearfix">
                                        <li><a href="#">Appway Online</a></li>
                                        <li><a href="#">Our Leadership</a></li>
                                        <li><a href="#">Carrers</a></li>
                                        <li><a href="#">What We Do</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom clearfix">
                <ul class="footer-nav pull-right">
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Legal</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">&copy; 2020 <a href="#">appway</a>. All rights reserved</div>
    </footer>
    <!-- main-footer end -->
    </div>
  </div><!-- End of .page_wrapper -->
</template>

<script>

export default {
  name: 'home',

  data() {
    return {
      loading: true,
    }
  },

  computed: {
    backgroundUrl() {
      const bgArray = [
        require('../assets/images/icons/banner-1.png'),
        require('../assets/images/icons/vactor-1.png'),
        require('../assets/images/resource/case-1.png'),
        require('../assets/images/icons/feature-icon-1.png'),
        require('../assets/images/icons/feature-icon-2.png'),
        require('../assets/images/icons/feature-icon-3.png'),
        require('../assets/images/icons/image-shap-1.png'),
        require('../assets/images/icons/image-shap-2.png'),
        require('../assets/images/background/video-bg.jpg'),
        require('../assets/images/icons/testimonial-bg.png'),
        require('../assets/images/icons/shap-3.png'),
        require('../assets/images/icons/footer-bg.png'),
        require('../assets/images/icons/footer-bg-6.png'),
        require('../assets/images/icons/layer-image-7.png')
      ]
      return bgArray
    },
  },

  mounted() {
    this.loading = false
  }
}
</script>

<style scoped>
.content-column.reset {
  margin-top: -145px;
}
</style>
