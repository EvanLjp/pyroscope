import React from 'react';

import styles from './LogoLink.module.scss';

// TODO: move this to assets pipeline. for now just embedding it here because this is less likely to break
function svgLogo() {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          cx="49.4236252%"
          cy="92.6627823%"
          fx="49.4236252%"
          fy="92.6627823%"
          r="195.066755%"
          gradientTransform="translate(0.494236,0.926628),scale(1.000000,0.735610),rotate(-90.000000),translate(-0.494236,-0.926628)"
          id="radialGradient-1"
        >
          <stop stopColor="#FFB90C" offset="0%" />
          <stop stopColor="#F9243A" offset="38.390924%" />
          <stop stopColor="#F9243A" offset="50.5405%" />
          <stop stopColor="#B51424" offset="73.98091%" />
          <stop stopColor="#B51424" offset="100%" />
        </radialGradient>
      </defs>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="fire-part"
          transform="translate(148.516736, 0.000000)"
          fillRule="nonzero"
        >
          <g
            id="whole-thing"
            transform="translate(363.983264, 495.000000) scale(-1, 1) rotate(-180.000000) translate(-363.983264, -495.000000) translate(0.483264, 0.000000)"
          >
            <g
              id="g70"
              transform="translate(-0.000091, 0.685815)"
              fill="url(#radialGradient-1)"
            >
              <path
                d="M65.3646667,571.739321 L65.4492471,571.698868 C19.5139147,505.999969 -5.32464048,424.477859 1.04305801,336.877516 L1.04305801,336.877516 C14.0321963,158.179446 159.192462,13.7596653 338.059844,1.5917266 L338.059844,1.5917266 C419.418369,-3.93888015 495.500283,17.3823334 558.456522,57.4611191 L558.456522,57.4611191 L481.301947,162.097965 C437.516468,136.521928 399.367671,129.590556 363.486536,130.155994 L363.486536,130.155994 C234.497143,130.155994 129.556988,235.032238 129.556988,363.946998 L129.556988,363.946998 C129.556988,492.865683 234.497143,597.738003 363.486536,597.738003 L363.486536,597.738003 C492.483783,597.738003 597.427864,492.865683 597.427864,363.946998 L597.427864,363.946998 C597.41276,304.634864 581.39383,255.677522 530.630465,199.668053 L607.770843,95.1329436 C680.936847,161.576603 726.932594,257.364176 726.932594,363.946998 L726.932594,363.946998 C726.932594,458.031616 691.13483,543.75602 632.416071,608.271816 L632.416071,608.271816 L632.416071,608.275741 L533.597728,748.122808 L428.601388,617.203806 L434.703262,646.563419 C459.453008,765.59222 433.664131,889.543925 363.49439,988.853335 L363.49439,988.853335 L65.3646667,571.723019 L65.3646667,571.739321 Z"
                id="path84"
              />
            </g>
            <g id="blue" transform="translate(191.447039, 191.331780)">
              <g id="g88" transform="translate(-0.000063, 0.685930)">
                <g
                  id="g94"
                  transform="translate(0.177296, 0.699054)"
                  fill="#3EC1D3"
                >
                  <path
                    d="M171.862466,343.697728 C77.0961324,343.697728 -0.00497405932,266.647602 -0.00497405932,171.934957 C-0.00497405932,77.2182874 77.0961324,0.168162396 171.862466,0.168162396 C266.632828,0.168162396 343.741988,77.2182874 343.741988,171.934957 C343.741988,266.647602 266.632828,343.697728 171.862466,343.697728"
                    id="path96"
                  />
                </g>
                <g
                  id="g98"
                  transform="translate(29.362379, 172.629585)"
                  fill="#FFFFFF"
                >
                  <path
                    d="M22.8397982,0 L0.671669409,0 C0.671669409,78.2496309 64.380874,141.920035 142.678189,141.920035 L142.678189,119.765407 C76.6007327,119.765407 22.8397982,66.0372141 22.8397982,0"
                    id="path100"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function LogoLink() {
  return (
    <a
      className={styles.logoLink}
      href="https://github.com/pyroscope-io/pyroscope/"
      target="_blank"
      rel="noreferrer"
    >
      {svgLogo()}
      <span>Pyroscope</span>
    </a>
  );
}
