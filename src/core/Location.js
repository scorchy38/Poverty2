import React from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/button";
import "font-awesome/css/font-awesome.min.css";
import "aos/dist/aos.css";
import Map from "./Assests/location.svg";

const Location = () => {
  AOS.init({
    offset: 110,
    duration: 500,
    delay: 12,
  });

  return (
    <>
      <div className="container p-2">
        <div data-aos="zoom-in" className="row m-auto">
          <div className="col-sm-4 offset-md-1 pt-5">
            <img src={Map} style={{ width: "100%" }} />
          </div>
          <div className="offset-md-1 col-sm-6 pb-5">
            <h1 data-aos="zoom-in" className="m-1 mb-4 text-left font">
              Locations
            </h1>
            <p className="text-left mb-3 m-1 font3">
              Dance Out Of Poverty’s offices and centers are available at many
              locations for you to reach out. Dance Out Of Poverty’s offices and
              centers are available at many locations for you to reach out.
            </p>

            <p className="text-left mb-3 m-1 font3">
              Dance Out Of Poverty’s offices and centers are available at many
              locations for you to reach out.
            </p>

            <p className="text-left m-1 font3">
              Dance Out Of Poverty’s offices and centers are available at many
              locations for you to reach out. Dance Out Of Poverty’s offices and
              centers are available at many locations for you to reach out.
            </p>
          </div>
        </div>
        {/* <div data-aos="zoom-in" className="col-sm-10 offset-md-1 mt-5 mb-0 p-0">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1SbJGhYxUHgBvMzxphkmbEPKKnYRkXBR7" width="100%" height="350px"></iframe>
                </div> */}
      </div>

      <div className="container mt-5 p-2">
        <div className="row m-auto">
          <div className="offset-md-1 col-sm-11">
            <div className="row m-auto">
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      ART BOX- Shop.9 jaggi farm bhagwati garden extn ,uttam
                      nagar near dwarka mor metro.station pillar no 781, New
                      Delhi, Delhi 110059
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/drive/u/1/folders/16lXfXgirDWs6oZTx_PVP5xRNrUr8XpjA"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      Gyanda Bharti educational and charitable- Imperial tower
                      no 2, 2503, J P Greens wish town, sector 128, Noida
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/drive/folders/10vhezdTXDHrcjMCzMBESBsFrtdqIuWzD?usp=sharing"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>AAINA FOUNDATION-Shakur basti railway station </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=177itEbv5StEECDygcOwdKai9QXCvpteh"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      GOONJ- Flat no. J-93, Rajesh Pilot marg, Sarita Vihar,
                      Delhi-76 (near H block market)
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1jY1QfOTUIlE6tdZSKBFFozlS53XmiKFl"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      SAKSHI- Jasola vihar saheen bhag (near MCD primary school)
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1BOOzlnwyireY2ADRVYqw57QlJawprEP7"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      UMMEED-J-27,chandan hola villege gujjar mohola ,behind
                      stone forever ,main chatter pur mandir road leadind to
                      radah swami satsang beas centre new delhi.
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1bTT6OHk8aMUyG6BI9xwEcoBG6xktQlZX"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      SHURUAT- Bodh mandir dharamshala,block-c,mandir wali
                      gali,oop,adarsh nagar,police station,azad pur,delhi-110033
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=17AOBGAR45mCgghJSqvl5BbNFZBLA8R0P"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      NAV CHETNA- adjoining park of morden public school b block
                      shalimar bagh west delhi
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1GEY0inZfVie6euIt6kMUc5FRv-fQR5Is"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      VOICE OF SLUM- House No.78,Gali Number 3, Chhalera, Block
                      D, Sector 44, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/folderview?id=1M3GJK09P6sk1ikiqFMYpyPBGpltyLrqA"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      SLUM SOCCER -R.K PURAM SEC-6 AMBEDKAR BASTI SUBHASH PARK
                      DELHI -110022
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/folderview?id=1M7bMpNjsQt4oT7HgFSkjNFPXv-s5cukw"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      U & V- BLOCK MAHARAJA AGRASEN MARG ,WEST SHALIMAR BAGH NEW
                      DELHI -110088{" "}
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/folderview?id=1NyTXUV1A4_lk4N3SlGwdZNwCyC4A93cf"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>
                      Madrasi jhuggi- Dera gazikhan, parwana road, pitampura,
                      Delhi- 110034
                    </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/folderview?id=1MH5sUsjph7J8tU0lmKfdmWCH6WlX_kea"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>LAWRANCE ROAD (NEAR BRITANIA CHOWK )</p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=11wyX6UMhkOq-r6M3vFaW_6hHFOZsgyWd"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>GOYLA DAIRY (NEAR DWARKA SEC-10 )</p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1TMIIEHitDAbKzvy-Hm6xsvdc8RnDRxQ3"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>SANJAY CAM CHANKYAPURI </p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1izZI5tO9nCUqpL5EnyOCrayajx44L0tW"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p> HANUMAN MAJDOOR CAM R.K PURAM SEC -4</p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=1-Odt3_uMMD4RRXS0Qsu5sp-wb7HALYUX"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>HASTAL (NEAR UTTAM NAGAR )</p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=101_zXV8YMp3oB0vGVK02l0kbvG3q9cpj"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" className="col-sm-3 m-4 locard">
                <div className="row m-auto">
                  <div className="col-sm-12 mb-2 p-1">
                    <p>BHATI MINES ( NEAR CHATTAR PUR)</p>
                  </div>
                  <div className="col-sm-12 mb-1 p-1">
                    <div className="mb-1 text-center">
                      <a
                        href="https://drive.google.com/open?id=165Q_w6v3puaNdDBgkhZL3_Y5sIKjfcn-"
                        className="btn btn-warning text-center"
                        target="_blank"
                      >
                        Pictures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboo">
        <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
      </div>
    </>
  );
};

export default Location;
