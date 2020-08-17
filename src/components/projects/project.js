import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Project = ({ title, description, image, icons, alt, link }) => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      duration="2"
      delay="1"
      animateOnce="true"
      className="fl w-50 pa4"
    >
      <article className="br2 b--black-10 mv4 mw9 center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            style={{
              height: "250px",
              width: "100%",
              objectFit: "cover",
            }}
            src={image}
            className="db w-100 br2 shadow-5"
            alt={alt}
          />
        </a>
        <div className="pa3 ph3-ns pb3-ns shadow-5 bg-white">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">{title}</h1>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
          <div className="icons flex flex-wrap">
            {icons.map((icon) => {
              return (
                <i
                  className={icon}
                  style={{ fontSize: "2em", margin: "5px" }}
                />
              );
            })}
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
};

export default Project;
