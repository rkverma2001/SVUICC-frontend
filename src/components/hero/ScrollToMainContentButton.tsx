import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ScrollToMainContentButtonProps {
  onClick: () => void;
}

const ScrollToMainContentButton: React.FC<ScrollToMainContentButtonProps> = ({ onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseOutlineRef = useRef<SVGPathElement>(null);
  const scrollWheelRef = useRef<SVGPathElement>(null);
  const scrollWheelContainerRef = useRef<SVGPathElement>(null);
  const vector5Ref = useRef<SVGPathElement>(null);
  const vector6Ref = useRef<SVGPathElement>(null);
  const vector7Ref = useRef<SVGPathElement>(null);
  const vector8Ref = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const mouseOutline = mouseOutlineRef.current;
    const scrollWheel = scrollWheelRef.current;
    const scrollWheelContainer = scrollWheelContainerRef.current;
    const vector5 = vector5Ref.current;
    const vector6 = vector6Ref.current;
    const vector7 = vector7Ref.current;
    const vector8 = vector8Ref.current;
    const svg = svgRef.current;

    if (!button || !mouseOutline || !scrollWheel || !scrollWheelContainer || !vector5 || !vector6 || !vector7 || !vector8 || !svg) return;

    // Initial Animation
    gsap.fromTo(
      button,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power1.in',
        onComplete: () => {
          button.style.pointerEvents = 'auto';
        }
      }
    );
    
    button.style.pointerEvents = 'none';

    // Hover Animations
    const hoverTimeline = gsap.timeline({ paused: true, repeat: -1 }); // Repeat indefinitely
    hoverTimeline
    .to(scrollWheel, {
      y: 3,
      duration: 0.3,
      ease: 'power1.inOut',
    })
    .to(scrollWheel, {
      y: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    })
    .to([vector5, vector6], {
      scale: 0.8,
      duration: 0.3,
      ease: 'power1.inOut',
    }, "<")
    .to([vector5, vector6], {
        scale: 1,
        duration: 0.3,
        ease: 'power1.inOut',
    })
    .to([vector7, vector8], {
        scale: 0.8,
        duration: 0.3,
        ease: 'power1.inOut',
      }, "<")
      .to([vector7, vector8], {
        scale: 1,
        duration: 0.3,
        ease: 'power1.inOut',
      })
        .to(mouseOutline, {
            strokeDasharray: "8",
            duration: 0.1,
        }, "<")
        .to(mouseOutline, {
            rotation: 360,
            duration: 2,
            ease: "none",
        })

    // Hover Event Listeners
    const onMouseEnter = () => {
      hoverTimeline.play();
    };

    const onMouseLeave = () => {
        hoverTimeline.pause();
        hoverTimeline.seek(0);
        mouseOutline.style.strokeDasharray = "";
        mouseOutline.style.rotate = "0";
    };

    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      id="scrollToMainContent"
      className="scroll-to-main-cont bg-transparent cursor-pointer transition-all"
      onClick={onClick}
    >
      <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="93"
      viewBox="0 0 34 93"
      fill="none"
      >
        <g id="scrollToMainContent">
          <g id="Group">
            <path
            ref={mouseOutlineRef}
              id="mouseOutline"
              d="M1.1264 13.5977C1.30898 11.9826 1.73031 10.4097 2.44657 8.90693C3.75269 6.18234 5.76102 4.13187 8.48561 2.78362C10.6625 1.71626 12.9657 1.22471 15.3533 1.07022C15.5078 1.05618 15.6482 1.01404 15.8027 1C16.6875 1 17.5723 1 18.4571 1C19.4963 1.14044 20.5497 1.22471 21.5749 1.42133C24.4118 1.94097 26.9679 3.06451 29.0605 5.07284C31.2795 7.20758 32.5575 9.8479 33.021 12.8815C33.1755 13.8646 33.2316 14.8758 33.2316 15.8729C33.2457 19.1593 33.2457 22.4597 33.2457 30.746  M33.2597 30.9001C33.2597 33.4842 33.2597 36.0543 33.2597 38.6385C33.2597 40.9839 32.8384 43.231 31.8272 45.3516C30.5211 48.0622 28.5408 50.1127 25.8163 51.4328C22.7125 52.9496 19.398 53.3288 15.9853 53.2024C13.4011 53.1041 10.8872 52.6266 8.54178 51.489C5.33968 49.9301 3.17687 47.4442 1.92692 44.1298C1.2528 42.3321 1 40.4502 1 38.5261C1 31.2512 1 23.9762 1 13.7153"
              stroke="white"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={scrollWheelContainerRef}
              id="scrollWheelContainer"
              d="M14.0087 14.4172C14.0087 15.5143 13.9891 16.6114 14.0087 17.7292C14.0481 19.6129 15.2866 20.9791 16.9577 20.9998C18.6681 21.0205 19.9656 19.6543 19.9853 17.7292C20.0049 15.5764 20.0049 13.4236 19.9853 11.2708C19.9656 9.38713 18.7074 8.02093 17.0363 8.00023C15.3259 7.97953 14.0481 9.36643 14.0087 11.2708C13.9891 12.3265 14.0087 13.3615 14.0087 14.4172Z"
              stroke="white"
              strokeMiterlimit="10"
            />
            <path
            ref={scrollWheelRef}
              id="scrollWheel"
              d="M16.0029 11.9873C16.0029 12.156 15.9964 12.3248 16.0029 12.4968C16.016 12.7866 16.4289 12.9968 16.9859 13C17.556 13.0031 17.9885 12.793 17.9951 12.4968C18.0016 12.1656 18.0016 11.8344 17.9951 11.5032C17.9885 11.2134 17.5691 11.0032 17.0121 11C16.442 10.9969 16.016 11.2102 16.0029 11.5032C15.9964 11.6656 16.0029 11.8248 16.0029 11.9873Z"
              fill="#D9D9D9"
            />
          </g>
          <g id="scrollArrows">
            <path
            ref={vector5Ref}
              id="Vector_5"
              d="M13 79L18 84L23 79"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={vector6Ref}
              id="Vector_6"
              d="M13 87L18 92L23 87"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
            ref={vector7Ref}
              id="Vector_7"
              d="M13 71L18 76L23 71"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
            ref={vector8Ref}
              id="Vector_8"
              d="M13 63L18 68L23 63"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default ScrollToMainContentButton;