import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  // Use custom color if provided, otherwise use extracted color
  const bannerColor = cardInfo.color ? cardInfo.color : rgb(colorArrays);

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      {/* ── Banner ── */}
      <div style={{background: bannerColor}} className="experience-banner">
        {/* Blurred overlay for readability */}
        <div className="experience-blurred_div"></div>
        {/* Company name */}
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
      </div>

      {/* ── Circular logo: outside banner so it isn't clipped ── */}
      <img
        crossOrigin={"anonymous"}
        ref={imgRef}
        className="experience-roundedimg"
        src={cardInfo.companylogo}
        alt={cardInfo.company}
        onLoad={() => getColorArrays()}
      />

      {/* ── Details ── */}
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
        {cardInfo.footerLink ? (
          <div className="experience-card-footer">
            {cardInfo.footerLink.map((link, i) => {
              return (
                <span
                  key={i}
                  className={
                    isDark ? "dark-mode experience-tag" : "experience-tag"
                  }
                  onClick={() => {
                    if (link.url) {
                      let win = window.open(link.url, "_blank");
                      win.focus();
                    }
                  }}
                >
                  {link.name}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
