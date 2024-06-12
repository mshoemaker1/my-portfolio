import { data } from "../../projectData";
import Section from "@/components/Section";
import HeroHeader from "@/components/HeroHeader";
import { Divider } from "@/components/Divider";
import { ResearchPins } from "./ResearchPins";
import { FilterLibrary } from "./FilterLibrary";
import Image from "next/image";
import SectionBullets from "@/components/Section/SectionBullets";
import siteMap from "../../../public/little-cup/site-map.png";
import devicesHome from "../../../public/little-cup/devices-home.png";
import userTests001 from "../../../public/little-cup/user-tests-001.png";
import userTests002 from "../../../public/little-cup/user-tests-002.png";
import hifiDesktop from "../../../public/little-cup/hifi-desktop.png";
import hifiMobile from "../../../public/little-cup/hifi-mobile.png";

const projectData = data.find(
  (project) => project.path === "/projects/little-cup"
);

const { path, bg, hero } = projectData!;

export default function LittleCup() {
  return (
    <main>
      {projectData && (
        <HeroHeader
          path={path}
          bg={bg}
          heroImage={hero.image}
          heroAlt={hero.alt}
          heroBulletPoints={hero.bulletPoints}
          heroContent={hero.content}
        />
      )}
      <div className="flex flex-col">
        <Section
          title="Research"
          header="Refining the challenge"
          content={[
            "Through research, I found that there was an untapped market for a product tailored to identifying and reviewing coffee shops. Users aren’t just looking for their caffeine fix, they are looking for places to study and places to support their community.",
          ]}
          disableBottomPadding
        />
        <Section
          header="From Overwhelming to Efficient: Ensuring the User has filters tailored to caffeinated beverages and a tidy map to view locations."
          content={[
            "To evaluate the current options available for finding coffee shops, I conducted a competitive analysis. This allowed me to gain a deeper understanding of both the benefits and pain points a user experiences in their search.",
            "I chose two popular sites that rely on user-generated reviews (Classpass, Yelp) as well as a site that specifically searches for local coffee shops (Find Me Coffee).",
          ]}
        />
        <ResearchPins />
        <Section
          header="Filter library built from user feedback"
          content={[
            "I conducted three semi-structured interviews. Based on the interviews, I built the Filter library.",
          ]}
        />
        <FilterLibrary />
        <Divider />
        <Section
          title="Ideate"
          header="Constructing the site map"
          content={[
            "Taking inspiration from the competitive analysis, I built a simple site map to serve as the foundation for the website.",
          ]}
        />
        <div className="flex justify-center">
          <div className="dark:bg-white p-8 md:rounded-lg">
            <Image
              src={siteMap}
              alt="Site map diagram"
              className="w-full max-w-[830px]"
            />
          </div>
        </div>
      </div>
      <Section header="Designing for multiple screen sizes" />
      <div className="flex items-center justify-center bg-[url('/little-cup/lofi-background.jpg')] bg-center bg-cover">
        <div className="flex items-center justify-center bg-bronze-300 px-[75px] py-[40px] my-24 md:rounded-lg">
          <Image
            src={devicesHome}
            alt="Home page lo-fi drawings"
            className="w-[650px]"
          />
        </div>
      </div>
      <Divider />
      <Section
        title="Test"
        header="Round 1: User Testing identifies opportunities for improving the navigation  & log-in processes"
        bgColor="bronze"
      />
      <div className="flex flex-col lg:flex-row bg-bronze-500 justify-center items-center pb-36">
        <div className="w-full max-w-[786px]">
          <Image src={userTests001} alt="Hi-fi testing versions" />
        </div>
        <div className="flex lg:w-[295px] px-16 mt-12">
          <ul className="list-disc">
            <li className="text-black">
              Navigation Bar has Call To Actions that are out of context. Move
              Call to Actions to be in context with content.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-bronze-500 justify-center items-center pb-36">
        <div className="flex flex-col w-full max-w-[724px] lg:mr-[62px]">
          <div className="flex flex-row text-black">
            <p className="mr-[calc(54%-78px)] md:mr-[calc(54%-76px)]">
              Tested Version
            </p>
            <p>Iterated Version</p>
          </div>
          <Image src={userTests002} alt="Hi-fi testing versions" />
        </div>
        <div className="flex lg:w-[295px] px-16 mt-12">
          <ul className="list-disc">
            <li className="text-black">
              Log-in modal is cluttered and unclear. Simplify log-in modal for
              users.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-550 py-20">
        <Section title="Final design" bgColor="neutral" disableBottomPadding />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="relative w-[145px]">
            <Image
              src={hifiMobile}
              alt="Hi-fi mobile design"
              placeholder="blur"
              className="lg:absolute lg:top-[68px] lg:left-[32px]"
            />
          </div>
          <Image
            src={hifiDesktop}
            alt="Hi-fi desktop design"
            placeholder="blur"
            className="w-[700px]"
          />
        </div>
        <Divider borderColor="border-white" marginBottom={false} />
        <Section
          title="Reflect"
          header="Learnings"
          content={[""]}
          disableBottomPadding
          bgColor="neutral"
        />
        <SectionBullets
          points={[
            "Language for filters is important. As an examples, I went through a few iterations before landing on “Serves Hot Food.",
            "Call to action buttons need to be  in context. “Write a Review” doesn’t make sense without the context of a specific shop or product to write the review about.",
          ]}
          bgColor="neutral"
        />
        <Section header="Next Steps" bgColor="neutral" disableBottomPadding />
        <SectionBullets
          points={[
            "Evaluating the benefits of offering log-in creation and storage.",
            "Testing blog-like content to see if users engage with it. This is inspired by The Infatuation website.",
            "Adding additional filters based on popular searches.",
          ]}
          bgColor="neutral"
        />
      </div>
    </main>
  );
}
