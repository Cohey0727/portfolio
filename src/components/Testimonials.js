import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Testimonials extends Component {
  render() {
    let {resumeData, contents} = this.props;
    return (
      <section id="testimonials">
        <div style={{
          padding: 24,
          height: 420,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            height: '100%',
            width: 360,
          }}>
            <Carousel autoPlay>
              {
                contents.map((item) => {
                  return (
                    <div>
                      <img src={item.image.url}/>
                      <a href={item.url}>
                        <p className="legend">{item.title}</p>
                      </a>
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
