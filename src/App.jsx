import React from "react";

import Background from "./components/Background";
import ResponsiveText from "./components/ResponsiveText";
import SlideInText from "./components/SlideInText";
import ProjectRows from "./components/ProjectRows"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Background />

      <div className="above-background" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="responsive-text-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="responsive-text"
            style={{
              width: "70%",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <ResponsiveText
              text="FULL-STACK"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />

            <ResponsiveText
              text="WEB DEVELOPER"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
        </div>

        <SlideInText
          className="left"
          lines="#FRONTEND"
          direction="left"
          distance="offscreen"
          start="top 65%"
          respectReducedMotion={false}
        />
        <SlideInText
          className="right"
          lines="#BACKEND"
          direction="right"
          distance="offscreen"
          start="top 65%"
          respectReducedMotion={false}
        />
        <SlideInText
          className="center"
          lines="#WEBDESIGN"
          direction="left"
          distance="offscreen"
          start="top 65%"
          respectReducedMotion={false}
        />

        <ProjectRows />

        <Footer />
      </div>
    </>
  );
}