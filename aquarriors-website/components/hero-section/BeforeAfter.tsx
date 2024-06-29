"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function BeforeAfter() {
  return (
    <div className="relative mx-auto mt-16 aspect-video w-full">
      <ReactCompareSlider
        itemOne={
          <>
            <ReactCompareSliderImage
              src="/before.jpg"
              alt="Before cleanup"
              className="scale-x-[-1]"
            />
            <span className="absolute left-1/4 top-2 -translate-x-1/2 bg-black/75 px-3 py-1 text-sm font-semibold text-white md:top-4 md:px-6 md:py-2 md:text-lg lg:px-12 lg:py-4 lg:text-xl">
              Before
            </span>
          </>
        }
        itemTwo={
          <>
            <ReactCompareSliderImage
              src="/after.jpg"
              alt="After cleanup"
              className="scale-x-[-1]"
            />
            <span className="absolute right-1/4 top-2 translate-x-1/2 bg-white/75 px-3 py-1 text-sm font-semibold text-black md:top-4 md:px-6 md:py-2 md:text-lg lg:px-12 lg:py-4 lg:text-xl">
              After
            </span>
          </>
        }
      />
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Cleanup transformation of Black Water Canal (Source:{" "}
        <a
          href="https://dantri.com.vn/xa-hoi/hang-tram-tan-rac-tai-kenh-nuoc-den-o-tphcm-da-duoc-don-sach-20240516115257890.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Dân Trí
        </a>
        )
      </p>
    </div>
  );
}

export default BeforeAfter;
