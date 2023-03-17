import React from 'react'

type Props = {}

export const Canvas = (props: Props) => {
  return (
    <>
    <style >
    {`  img {
        content-visibility: auto;
      }
      html,
      body {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
      }

      canvas {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        pointer-events: auto;
      }`}
    </style>
      <script>{`
        window.ga =
          window.ga ||
          function () {
            (ga.q = ga.q || []).push(arguments);
          };
        ga.l = +new Date();
        ga('create', 'UA-105392568-1', 'auto');
        ga('send', 'pageview');
      `}</script>
    <canvas></canvas>
    <span className="promo-close w-[100%] h-[100%]"/>
    <script src="./script.js"></script>
    </>
  )
}