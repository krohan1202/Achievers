import React from "react";
import "./footer.css";
import Logo from "../../assets/Pics/Home/1-Navbar/Logo.png";

function Footer() {

    return (
        <div className="ach__footer">
            <span className="ach__footer--aboutPart">
                <ul>
                <li className="ach__footer--aboutPart--li"><p className="ach__footer--aboutPart--heading">ABOUT</p></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="#">Contact Us</a></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="#">About Us</a></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="/careers">Careers</a></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="#">Achiever Stories</a></li>
                <li className="ach__footer--aboutPart--li"><a className="ach__footer--aboutPart--links" href="#">Press</a></li>
                </ul>
            </span>

            <span className="ach__footer--policyPart">
                <ul className="ach__footer--ul">
                <li className="ach__footer--policyPart--li"><p className="ach__footer--policyPart--heading">POLICY</p></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="#">Return Policy</a></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="#">Terms of Use</a></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="#">Security</a></li>
                <li className="ach__footer--policyPart--li"><a className="ach__footer--policyPart--links" href="#">Privacy</a></li>
                </ul>
            </span>

            <hr className="ach__footer--verticalLine"></hr>

            <iframe className="ach__footer--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6968075786313!2d88.34359781479097!3d22.515555985212245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270cad6279779%3A0x75e981a9bff8fd2b!2s162%2C%20Shyama%20Prasad%20Mukherjee%20Rd%2C%20Sahanagar%2C%20Kalighat%2C%20Kolkata%2C%20West%20Bengal%20700026!5e0!3m2!1sen!2sin!4v1618663419696!5m2!1sen!2sin"></iframe>

            <span className="ach__footer--addressPart">
                <p className="ach__footer--addressPart--heading">Address</p>
                <p className="ach__footer--addressPart--campus">Main Campus (Kolkata)</p>
                <p className="ach__footer--addressPart--campusAddress">Rashbehari Branch Office: 162, S.P. Mukherjee Road, Rashbehari Avenue (Ground Floor), Kolkata - 700026</p>
            </span>

            <hr className="ach__footer--horizontalLine"></hr>

            <img className="ach__footer--logo" src={Logo} />

            <span className="ach__footer--social">
                <p className="ach__footer--social--heading">Social</p>

                <span className="ach__footer--social--icons">
                <a href="#">
                    <svg className="ach__footer--social--icons-yt" viewBox="0 0 682 682" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M647.18 181.191C639.812 153.8 618.216 132.208 590.829 124.832C540.796 111.143 340.659 111.143 340.659 111.143C340.659 111.143 140.531 111.143 90.4975 124.313C63.637 131.681 41.5141 153.804 34.1463 181.191C20.9795 231.221 20.9795 334.975 20.9795 334.975C20.9795 334.975 20.9795 439.252 34.1463 488.758C41.5219 516.145 63.1102 537.737 90.5014 545.113C141.057 558.807 340.667 558.807 340.667 558.807C340.667 558.807 540.796 558.807 590.829 545.636C618.22 538.264 639.812 516.672 647.188 489.285C660.351 439.252 660.351 335.501 660.351 335.501C660.351 335.501 660.877 231.221 647.18 181.191V181.191ZM276.94 430.826V239.123L443.363 334.975L276.94 430.826Z" fill="white"/>
                    </svg>
                </a>

                <a href="#">
                    <svg className="ach__footer--social--icons-Play" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M387.584 337.877L326.443 277.76L101.995 499.093L387.584 337.877Z" fill="white"/>
                    <path d="M387.584 174.229L101.995 13.0132L326.443 234.347L387.584 174.229Z" fill="white"/>
                    <path d="M477.077 286.442C495.381 272.149 495.381 239.936 475.861 225.642L415.957 191.552L349.12 256.064L415.957 320.576L477.077 286.442Z" fill="white"/>
                    <path d="M43.3919 512L304.384 255.957L43.3919 0.0213333V0C30.1866 6.80533 21.3333 19.2 21.3333 35.3067V476.693C21.3333 492.8 30.1866 505.195 43.3919 512V512Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="512" height="512" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </a>

                <a href="#">
                    <svg className="ach__footer--social--icons-wp" viewBox="0 0 682 682" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M567.166 113.896C507.349 54.0097 427.798 21.0146 343.049 20.9795C168.415 20.9795 26.2881 163.102 26.2179 337.783C26.1945 393.623 40.7818 448.132 68.5086 496.179L23.5603 660.354L191.517 616.296C237.796 641.541 289.898 654.844 342.92 654.86H343.053C517.667 654.86 659.809 512.725 659.876 338.037C659.911 253.377 626.986 173.779 567.166 113.896ZM343.049 601.354H342.94C295.689 601.334 249.347 588.635 208.91 564.647L199.299 558.938L99.6305 585.084L126.233 487.91L119.97 477.947C93.609 436.019 79.6891 387.559 79.7125 337.803C79.7671 192.612 197.902 74.4897 343.154 74.4897C413.492 74.5131 479.611 101.939 529.328 151.715C579.045 201.491 606.408 267.652 606.385 338.017C606.323 483.219 488.196 601.354 343.049 601.354V601.354ZM487.493 404.128C479.579 400.163 440.656 381.018 433.398 378.372C426.147 375.73 420.863 374.415 415.591 382.337C410.311 390.259 395.142 408.093 390.522 413.373C385.901 418.657 381.289 419.321 373.371 415.356C365.453 411.395 339.946 403.032 309.706 376.062C286.175 355.071 270.288 329.147 265.667 321.225C261.055 313.295 265.628 309.424 269.141 305.069C277.71 294.427 286.292 283.27 288.93 277.99C291.572 272.706 290.249 268.082 288.266 264.121C286.292 260.16 270.46 221.194 263.864 205.338C257.433 189.908 250.912 191.992 246.05 191.75C241.437 191.52 236.157 191.473 230.877 191.473C225.601 191.473 217.024 193.452 209.765 201.381C202.51 209.307 182.062 228.456 182.062 267.422C182.062 306.388 210.428 344.031 214.385 349.315C218.343 354.599 270.21 434.56 349.62 468.846C368.508 477.01 383.252 481.877 394.752 485.525C413.718 491.551 430.971 490.7 444.614 488.663C459.825 486.388 491.447 469.51 498.05 451.02C504.645 432.526 504.645 416.679 502.662 413.373C500.688 410.072 495.408 408.093 487.493 404.128V404.128Z" fill="white"/>
                    </svg>
                </a>

                <a href="#">
                    <svg className="ach__footer--social--icons-insta" viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M510.5 150.235C509.303 123.084 504.912 104.418 498.623 88.243C492.134 71.074 482.152 55.7027 469.073 42.9244C456.295 29.9473 440.822 19.8635 423.852 13.4763C407.584 7.18656 389.015 2.79586 361.864 1.59875C334.509 0.300252 325.825 0 256.448 0C187.07 0 178.386 0.300252 151.133 1.49736C123.982 2.69447 105.315 7.08908 89.1446 13.3749C71.9717 19.8635 56.6004 29.8459 43.8221 42.9244C30.845 55.7027 20.7651 71.1754 14.374 88.1455C8.08427 104.418 3.69356 122.983 2.49645 150.134C1.19796 177.488 0.897705 186.172 0.897705 255.55C0.897705 324.928 1.19796 333.612 2.39507 360.864C3.59218 388.016 7.98678 406.682 14.2765 422.857C20.7651 440.026 30.845 455.397 43.8221 468.175C56.6004 481.153 72.0731 491.236 89.0432 497.624C105.315 503.913 123.88 508.304 151.036 509.501C178.285 510.702 186.972 510.998 256.35 510.998C325.728 510.998 334.412 510.702 361.665 509.501C388.816 508.304 407.482 503.913 423.653 497.624C457.995 484.346 485.146 457.195 498.424 422.857C504.71 406.585 509.104 388.016 510.301 360.864C511.498 333.612 511.799 324.928 511.799 255.55C511.799 186.172 511.697 177.488 510.5 150.235ZM464.484 358.868C463.384 383.824 459.192 397.3 455.698 406.284C447.112 428.546 429.444 446.214 407.182 454.801C398.198 458.294 384.624 462.486 359.766 463.582C332.813 464.783 324.73 465.079 256.549 465.079C188.368 465.079 180.183 464.783 153.328 463.582C128.372 462.486 114.896 458.294 105.912 454.801C94.8338 450.706 84.75 444.218 76.5652 435.733C68.0802 427.446 61.5916 417.464 57.4972 406.386C54.0034 397.402 49.8116 383.824 48.7158 358.969C47.5148 332.017 47.2185 323.929 47.2185 255.749C47.2185 187.568 47.5148 179.383 48.7158 152.532C49.8116 127.576 54.0034 114.1 57.4972 105.116C61.5916 94.0336 68.0802 83.9537 76.6666 75.765C84.9489 67.2799 94.9313 60.7914 106.013 56.7009C114.998 53.2071 128.575 49.0152 153.43 47.9156C180.382 46.7185 188.47 46.4182 256.646 46.4182C324.929 46.4182 333.012 46.7185 359.867 47.9156C384.823 49.0152 398.299 53.2071 407.284 56.7009C418.362 60.7914 428.445 67.2799 436.63 75.765C445.115 84.0512 451.604 94.0336 455.698 105.116C459.192 114.1 463.384 127.674 464.484 152.532C465.681 179.485 465.981 187.568 465.981 255.749C465.981 323.929 465.681 331.915 464.484 358.868Z" fill="white"/>
                    <path d="M256.448 124.281C183.977 124.281 125.179 183.076 125.179 255.55C125.179 328.024 183.977 386.819 256.448 386.819C328.921 386.819 387.716 328.024 387.716 255.55C387.716 183.076 328.921 124.281 256.448 124.281ZM256.448 340.701C209.433 340.701 171.297 302.569 171.297 255.55C171.297 208.531 209.433 170.399 256.448 170.399C303.466 170.399 341.598 208.531 341.598 255.55C341.598 302.569 303.466 340.701 256.448 340.701V340.701Z" fill="white"/>
                    <path d="M423.556 119.091C423.556 136.014 409.834 149.736 392.906 149.736C375.983 149.736 362.261 136.014 362.261 119.091C362.261 102.164 375.983 88.4458 392.906 88.4458C409.834 88.4458 423.556 102.164 423.556 119.091V119.091Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="511" height="511" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </a>

                <a href="#">
                    <svg className="ach__footer--social--icons-fb" viewBox="0 0 511 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M255.502 1.06396C114.393 1.06396 0 115.457 0 256.565C0 383.123 92.1133 487.934 212.889 508.23V309.87H151.255V238.488H212.889V185.854C212.889 124.784 250.189 91.504 304.676 91.504C330.772 91.504 353.199 93.4485 359.709 94.305V158.14L321.918 158.158C292.293 158.158 286.581 172.233 286.581 192.895V238.452H357.271L348.051 309.833H286.581V509.937C412.995 494.551 511 387.07 511 256.492C511 115.457 396.607 1.06396 255.502 1.06396Z" fill="white"/>
                    </svg>
                </a>
                </span>
            </span>
        </div>
    )
}

export default Footer;