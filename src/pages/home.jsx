import HomeBanner from "../sections/home-banner";
import HomePartner from "../sections/home-partner";
import HomeServices from "../sections/home-services";
import HomeServices1 from "../sections/home-services1";
import HomeTeam from "../sections/home-team";
import HomeVideo from "../sections/home-videos/index.";

const Home = ({
  isArabic,
  launchWithUs,
  aboutUs,
  ourTeam,
  talentTrack,
  fade,
  setFade,
  banner,
  scrollToSection,
}) => {
  return (
    <>
      <HomeBanner
        scrollToSection={scrollToSection}
        launchWithUs={launchWithUs}
        banner={banner}
        setFade={setFade}
        fade={fade}
        isArabic={isArabic}
      />
      <HomeServices1 launchWithUs={launchWithUs} isArabic={isArabic} />
      <HomePartner />
      <HomeVideo aboutUs={aboutUs} />
      <HomeServices talentTrack={talentTrack} />
      <HomeTeam ourTeam={ourTeam} />
    </>
  );
};

export default Home;
