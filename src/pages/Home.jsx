import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";
import Section, { SectionBody } from "../components/Section";
import PulicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Helmet title="Home">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeout={5000}
      />
      {/* end hero slider */}

      {/* section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link>
                <PulicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end section */}
    </Helmet>
  );
};

export default Home;
