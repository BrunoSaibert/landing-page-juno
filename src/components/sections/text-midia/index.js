import React from 'react';

// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";

import Image from "../../atoms/image";

import { Section, Title, Description, Separator } from './styles';

export default function TextMidia({ title, description, image, bgColor, color, separatorColor, id }) {
  return (
    <Section id={id} bgColor={bgColor}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-6 offset-lg-1 order-2">
            {title && <Title as="h2" color={color}>{title}</Title>}
            {description &&
              <>
                <Separator bgColor={separatorColor} />
                <Description
                  color={color}
                  dangerouslySetInnerHTML={{ __html: description }} />
              </>
            }
          </div>

          {image &&
            <div className={`col-12 col-sm-4 offset-sm-4 col-md-4 offset-md-0 col-lg-3 offset-lg-1 order-last order-lg-${image.order || "last"}`}>
              <Image filename={image.src} alt={image.alt} />
            </div>
          }
        </div>
      </div>
    </Section>
  );
}
