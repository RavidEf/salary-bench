import './globals.css';
import Image from 'next/image';
import FemaleDev from '../public/images/female-dev-headshot.jpg';
import MaleDev from '../public/images/male-dev-headshot.jpg';
import CarouselCompanies from './components/carousel';
import { handelClickToLogin } from './components/navigationlogin';
import ChartSVG from './components/svgtest';

export default function Home() {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="home-hero-section">
            <div className="hero-headline-message">
              <h1 className="text-5xl font-bold">
                The Salary Benchmark for <br />
                Developers{' '}
              </h1>
              <h3 className="py-6">
                Evaluate your value - enter your salary to see if you're
                <br /> being fairly compensated in comparison to the market.
              </h3>

              <button className="btn btn-primary" onClick={handelClickToLogin}>
                Add your salary
              </button>
            </div>
            <div className="hero-image-container">
              <svg
                className="svg-hero-2"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="649.67538"
                height="516.23162"
                viewBox="0 0 649.67538 516.23162"
              >
                <path
                  d="M759.79588,701.91485c-8.99256-7.59865-14.45479-19.60227-13.02232-31.28789s10.30472-22.42829,21.81332-24.90978,24.62761,4.38768,28.12315,15.62987c1.92376-21.6745,4.14055-44.25714,15.66409-62.715,10.43429-16.71314,28.50667-28.672,48.09305-30.81147s40.20832,5.941,52.42363,21.40027,15.20618,37.93388,6.6509,55.68241c-6.30238,13.07474-17.91359,22.80511-30.07923,30.72128a194.12948,194.12948,0,0,1-132.77224,29.04621"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#f2f2f2"
                />
                <path
                  d="M893.52217,574.20948a317.62446,317.62446,0,0,0-44.26411,43.95415,318.55051,318.55051,0,0,0-49.85571,83.314c-.89774,2.19991,2.67454,3.15752,3.56229.98208a316.7584,316.7584,0,0,1,93.16976-125.638c1.8443-1.5018-.78314-4.10164-2.61223-2.61223Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#fff"
                />
                <path
                  d="M434,707.11581H383a6.50745,6.50745,0,0,1-6.5-6.5v-106a6.50745,6.50745,0,0,1,6.5-6.5h51a6.50745,6.50745,0,0,1,6.5,6.5v106A6.50745,6.50745,0,0,1,434,707.11581Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#6c63ff"
                />
                <path
                  d="M555.00008,708.11581h-51a7.50836,7.50836,0,0,1-7.5-7.5v-206a7.50836,7.50836,0,0,1,7.5-7.5h51a7.50836,7.50836,0,0,1,7.5,7.5v206A7.50836,7.50836,0,0,1,555.00008,708.11581Zm-51-219a5.50623,5.50623,0,0,0-5.5,5.5v206a5.50622,5.50622,0,0,0,5.5,5.5h51a5.50622,5.50622,0,0,0,5.5-5.5v-206a5.50622,5.50622,0,0,0-5.5-5.5Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#3f3d56"
                />
                <path
                  d="M676.00008,708.11581h-51a7.50836,7.50836,0,0,1-7.5-7.5v-337a7.50836,7.50836,0,0,1,7.5-7.5h51a7.50836,7.50836,0,0,1,7.5,7.5v337A7.50836,7.50836,0,0,1,676.00008,708.11581Zm-51-350a5.50623,5.50623,0,0,0-5.5,5.5v337a5.50622,5.50622,0,0,0,5.5,5.5h51a5.50622,5.50622,0,0,0,5.5-5.5v-337a5.50622,5.50622,0,0,0-5.5-5.5Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#3f3d56"
                />
                <path
                  d="M798.12948,707.61581h-51a6.50753,6.50753,0,0,1-6.5-6.5v-475a6.50753,6.50753,0,0,1,6.5-6.5h51a6.50753,6.50753,0,0,1,6.5,6.5v475A6.50753,6.50753,0,0,1,798.12948,707.61581Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#6c63ff"
                />
                <path
                  d="M480.94169,414.24247a10.05581,10.05581,0,0,0-10.48188-11.30867L452.6832,370.32469l-4,14,12.17889,29.88574a10.11027,10.11027,0,0,0,20.0796.032Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#a0616a"
                />
                <polygon
                  points="68.816 351.113 78.717 358.342 111.312 323.589 96.698 312.92 68.816 351.113"
                  fill="#a0616a"
                />
                <path
                  d="M335.82708,548.54689H374.3578a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H350.71393a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,335.82708,548.54689Z"
                  transform="translate(38.89227 1022.53744) rotate(-143.86855)"
                  fill="#2f2e41"
                />
                <polygon
                  points="121.201 389.377 133.461 389.376 139.293 342.088 121.199 342.089 121.201 389.377"
                  fill="#a0616a"
                />
                <path
                  d="M393.73673,577.75756h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H408.62359a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,393.73673,577.75756Z"
                  transform="translate(550.8686 978.49895) rotate(179.99738)"
                  fill="#2f2e41"
                />
                <path
                  d="M433.1832,396.82469s6,58-9,98l-11,76h-19l2-90-7-80S403.1832,364.82469,433.1832,396.82469Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#2f2e41"
                />
                <polygon
                  points="93.021 208.94 113.021 277.94 74.021 339.94 93.521 356.44 138.021 286.94 125.021 201.94 93.021 208.94"
                  fill="#2f2e41"
                />
                <circle
                  cx="144.02483"
                  cy="29.6531"
                  r="24.56103"
                  fill="#a0616a"
                />
                <path
                  d="M398.6832,255.32469s15-10,32,12l4.5,138.5s-13-18-40-1-33-2-33-2S343.1832,259.82469,398.6832,255.32469Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#ccc"
                />
                <path
                  d="M429.47327,266.9755h0a17.50586,17.50586,0,0,1,16.53679,16.56026l3.1731,60.28892,21,57-12,10-39-68-7.98473-55.89313A17.50587,17.50587,0,0,1,429.47327,266.9755Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#ccc"
                />
                <path
                  d="M401.14009,239.96055c4.01526,4.27712,11.47215,1.98106,11.99535-3.86208a7.05905,7.05905,0,0,0-.00889-1.36328c-.27013-2.58827-1.76543-4.9381-1.40725-7.67094a4.02264,4.02264,0,0,1,.7362-1.88313c3.19965-4.28461,10.71059,1.9164,13.73032-1.96233,1.85163-2.37835-.32494-6.12294,1.096-8.78115,1.87537-3.5084,7.43013-1.7777,10.91355-3.69907,3.87574-2.13777,3.64392-8.08425,1.09265-11.7012-3.11139-4.411-8.56664-6.76475-13.95392-7.104s-10.73745,1.11709-15.767,3.07715c-5.71454,2.227-11.38133,5.3048-14.898,10.32961-4.27662,6.11072-4.68817,14.326-2.54936,21.47132C393.42083,231.15805,397.8612,236.46783,401.14009,239.96055Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#2f2e41"
                />
                <path
                  d="M923.647,707.69147H276.353a1.19069,1.19069,0,0,1,0-2.38137H923.647a1.19069,1.19069,0,0,1,0,2.38137Z"
                  transform="translate(-275.16231 -191.88419)"
                  fill="#3f3d56"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="companies-section">
        <h3 className="companies-text">Supported by strong companies</h3>
      </div>
      <div>
        <CarouselCompanies />
      </div>
      <section className="below-fold-container">
        <div className="developer-trust-container">
          <div className="graph-illustration">
            <ChartSVG />
          </div>
          <div className="dev-trust">
            <h2>Trusted by +25,000 Developers</h2>
            <p>
              Join our large pool of developers to see
              <br /> if you are compensated according to today’s market.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="persona1">
          <div className="testemo-text">
            “Bench My Salary showed me that I'm paid fairly compared to the
            market. <br />
            It's a really useful tool for finding out your worth and what you
            can aspire to.”
          </div>
          <div className="testemo-person-image">
            <Image
              className="femaleDev"
              src={FemaleDev}
              height={200}
              width={200}
              alt="female-developer-image"
            />
          </div>
          <div className="testemo-person-title">
            <div>
              {' '}
              <b>Gal G.</b>
            </div>
            <div>Mid-Level Android Developer with 4 yrs of experience</div>
          </div>
        </div>
        <div className="persona2">
          <div className="testemo-text">
            “With Bench My Salary I found out I should be better compensated,
            since the market is paying a lot more than my current position.{' '}
            <br />
            After negotiation based on the salary benchmark comparision, I
            received a significant salary raise.”
          </div>
          <div className="testemo-person-image">
            <Image
              className="femaleDev"
              src={MaleDev}
              height={200}
              width={200}
              alt="female-developer-image"
            />
          </div>
          <div className="testemo-person-title">
            <div>
              {' '}
              <b>Ron W.</b>
            </div>
            <div>
              Senior Software Developer with 6 yrs of experience
              <br />
              Negotiated his salary up to 88,000 €
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
