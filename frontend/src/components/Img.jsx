const Img = ({ name, className }) => {
  if (name == "notification") {
    return (
      <svg
        className={className}
        width="25"
        height="28"
        viewBox="0 0 25 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0522 24.26C19.1323 24.26 18.2125 24.2684 17.2926 24.2516C17.0166 24.2432 16.9079 24.3441 16.8494 24.6132C16.4313 26.5557 14.6835 27.9515 12.6849 27.9515C10.6863 27.9515 8.91341 26.5557 8.50366 24.63C8.44512 24.3357 8.32804 24.2516 8.03536 24.2516C6.21235 24.26 4.38097 24.2684 2.55796 24.2432C1.59628 24.2348 0.818569 23.6125 0.509159 22.6707C0.224836 21.813 0.525884 20.8039 1.26178 20.2237C1.45412 20.0639 1.64645 19.8958 1.86387 19.7696C2.69176 19.2987 3.00953 18.5503 3.14333 17.6337C3.51128 15.1867 3.8625 12.7397 4.3308 10.3095C4.94962 7.12253 6.81444 4.9362 9.84165 3.78417C10.1176 3.67486 10.2263 3.56554 10.2347 3.26282C10.2681 1.85011 11.3302 0.824219 12.6849 0.824219C14.0229 0.832628 15.0765 1.85852 15.11 3.23759C15.1183 3.56554 15.2438 3.67486 15.5281 3.78417C18.6138 4.99507 20.487 7.24026 21.0473 10.5366C21.4822 13.1013 21.8919 15.666 22.3184 18.2308C22.402 18.7185 22.6445 19.1221 23.0376 19.4249C23.3804 19.6855 23.7317 19.9378 24.0745 20.2069C24.8188 20.7955 25.1282 21.7962 24.8522 22.6539C24.5428 23.6041 23.7568 24.2096 22.77 24.2516C22.7282 24.2516 22.6864 24.2516 22.6445 24.2516C21.7832 24.26 20.9135 24.26 20.0522 24.26ZM12.6347 23.0323C15.8542 23.0323 19.0738 23.0323 22.2933 23.0323C22.4606 23.0323 22.6278 23.0323 22.7951 23.0155C23.2383 22.965 23.5393 22.7296 23.6731 22.2923C23.8069 21.855 23.6731 21.485 23.3303 21.2076C23.0459 20.9637 22.7282 20.7535 22.4271 20.5264C21.7163 19.9967 21.2564 19.3071 21.1059 18.4158C20.8633 16.9106 20.6208 15.4138 20.3616 13.9086C20.1191 12.5043 19.9518 11.0832 19.5923 9.7125C18.8647 6.94595 16.3894 4.91098 13.5128 4.56621C10.6277 4.22144 7.71759 5.72665 6.32942 8.27456C5.75241 9.32568 5.54335 10.4693 5.36774 11.6381C5.03324 13.8077 4.65693 15.9688 4.31407 18.1299C4.15518 19.1474 3.7287 19.9798 2.86737 20.5769C2.56632 20.7787 2.27363 20.9973 2.00604 21.2328C1.69663 21.5019 1.57119 21.8466 1.6799 22.2503C1.79698 22.6875 2.0813 22.9482 2.52451 23.0071C2.69176 23.0323 2.85901 23.0323 3.02625 23.0323C6.22907 23.0323 9.43189 23.0323 12.6347 23.0323ZM9.69948 24.2852C10.0842 25.9418 11.464 26.8836 13.1532 26.6902C14.3741 26.5472 15.6117 25.3448 15.6201 24.2852C13.6549 24.2852 11.6897 24.2852 9.69948 24.2852ZM13.8807 3.33009C13.9142 2.83396 13.6967 2.47238 13.287 2.22852C12.8689 1.98466 12.434 1.99306 12.0242 2.26215C11.6396 2.51442 11.4305 2.85919 11.4807 3.33009C12.3002 3.33009 13.0779 3.33009 13.8807 3.33009Z"
          fill="black"
        />
      </svg>
    );
  }
  if (name == "home") {
    return (
      <svg
        width="32"
        className={className}
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.9972 31.9506C13.7474 31.9506 11.508 31.9506 9.25825 31.9506C5.93024 31.9506 3.43164 29.4624 3.43164 26.1344C3.43164 23.9572 3.43164 21.78 3.43164 19.6028C3.43164 18.7941 3.86708 18.2757 4.55135 18.2654C5.25635 18.255 5.71252 18.7837 5.71252 19.6132C5.71252 21.7904 5.71252 23.9676 5.71252 26.1448C5.71252 28.1976 7.18473 29.6698 9.22715 29.6698C13.7371 29.6698 18.247 29.6698 22.7569 29.6698C24.7682 29.6698 26.2508 28.1872 26.2508 26.1655C26.2508 23.9365 26.2404 21.7074 26.2508 19.4784C26.2508 18.5453 27.0802 17.9958 27.8785 18.3794C28.3036 18.5868 28.5213 18.9496 28.5213 19.4162C28.5213 21.8215 28.5732 24.2164 28.511 26.6217C28.4384 29.4831 25.8776 31.9299 22.985 31.9506C20.6627 31.9714 18.3299 31.9506 15.9972 31.9506Z"
          fill="white"
        />
        <path
          d="M16.0272 2.70336C14.4928 4.24814 13.0517 5.68924 11.6106 7.13034C8.4899 10.2614 5.35887 13.3924 2.23821 16.5131C2.1449 16.6064 2.04123 16.71 1.93755 16.8033C1.45027 17.2388 0.79711 17.2284 0.351302 16.793C-0.104874 16.3472 -0.125609 15.6525 0.340934 15.1756C1.15998 14.3358 1.99976 13.5064 2.82917 12.677C6.85181 8.66475 10.8745 4.64211 14.8867 0.629834C15.7265 -0.209945 16.2345 -0.209945 17.0639 0.629834C21.8123 5.37821 26.5711 10.137 31.3194 14.8853C32.0452 15.6111 32.1488 16.2746 31.5994 16.8033C31.0602 17.3321 30.4278 17.2284 29.6813 16.482C25.244 12.0446 20.817 7.61762 16.3797 3.1699C16.2656 3.05586 16.1827 2.90035 16.0272 2.70336Z"
          fill="white"
        />
      </svg>
    );
  }
  if (name == "medallion") {
    return (
      <svg
        width="29"
        className={className}
        height="32"
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7318 31.9597C14.4822 31.9594 14.2346 31.9157 13.9999 31.8305C11.9765 31.0556 5.04503 28.2034 2.48342 22.0684C0.567583 17.4941 0.739793 10.003 0.955055 6.9893C1.0304 5.68696 2.23586 5.22415 2.81707 4.98736C5.33564 3.99715 11.5567 1.4463 13.7093 0.273118C14.0301 0.0940225 14.3914 0 14.7587 0C15.1261 0 15.4874 0.0940225 15.8081 0.273118C17.9608 1.4463 24.1495 3.99715 26.6466 4.97659C27.2278 5.20262 28.444 5.6762 28.5194 6.97853C28.6916 9.9922 28.8961 17.4833 26.9802 22.0469C24.4186 28.2034 17.541 31.0556 15.496 31.8305C15.2507 31.9177 14.9921 31.9614 14.7318 31.9597ZM14.7318 1.47859C14.6113 1.47511 14.4921 1.5049 14.3874 1.56469C12.181 2.78092 6.00295 5.31025 3.35523 6.35427C2.58028 6.65564 2.4296 6.84938 2.40807 7.0754C2.24663 9.98144 2.04213 17.2035 3.83957 21.498C6.18592 27.084 12.6115 29.764 14.5273 30.4529C14.6768 30.5071 14.8406 30.5071 14.9901 30.4529C16.8845 29.764 23.3423 27.084 25.6241 21.498C27.4215 17.1927 27.2278 9.98144 27.0556 7.0754C27.0556 6.84938 26.8834 6.65564 26.1084 6.35427C23.4822 5.27796 17.3257 2.78092 15.1085 1.56469C14.9942 1.49946 14.8631 1.46951 14.7318 1.47859Z"
          fill="white"
        />
        <path
          d="M8.43914 21.5643V9.92742H10.4008L14.3407 17.7906L18.264 9.92742H20.2423V21.5643H18.5798V12.8366L14.9724 19.9351H13.6924L10.1016 12.8533V21.5643H8.43914Z"
          fill="white"
        />
      </svg>
    );
  }
  if (name == "personal") {
    return (
      <svg
        width="21"
        className={className}
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.141 23.9919C7.45062 23.9919 4.75286 23.9919 2.06252 23.9919C0.676579 23.9919 -0.0200948 23.3169 0.00213949 21.9376C0.0169623 20.727 -0.0571519 19.5017 0.135545 18.3131C0.528351 15.8258 2.04769 14.1896 4.43417 13.3679C4.96038 13.1845 5.53848 13.0597 6.09433 13.0597C8.87362 13.0377 11.6529 12.9937 14.4322 13.0964C17.0262 13.1845 19.3608 15.1508 20.0056 17.6307C20.176 18.2837 20.2502 18.9807 20.2798 19.6557C20.3169 20.5949 20.3317 21.5414 20.2353 22.4732C20.139 23.4197 19.4423 23.9553 18.4862 23.9846C18.0786 23.9993 17.671 23.9919 17.2633 23.9919C14.8843 23.9919 12.5126 23.9919 10.141 23.9919ZM10.1336 22.9794C12.8758 22.9794 15.618 22.9794 18.3602 22.9794C18.9828 22.9794 19.2422 22.7226 19.2496 22.1137C19.2496 21.1598 19.2644 20.206 19.2422 19.2522C19.22 18.0122 18.7975 16.9043 17.9897 15.9579C16.8928 14.6739 15.4772 14.0576 13.7948 14.0502C11.4009 14.0356 8.99961 14.0282 6.60572 14.0576C5.96093 14.0649 5.30131 14.1676 4.67875 14.351C2.75178 14.9087 1.19538 16.8383 1.08421 18.812C1.02492 19.8759 1.03974 20.9397 1.03233 22.0036C1.02492 22.7667 1.24726 22.9868 2.01805 22.9868C4.72322 22.9868 7.42839 22.9794 10.1336 22.9794Z"
          fill="white"
        />
        <path
          d="M4.00417 6.07511C4.01158 2.71473 6.76863 -0.00732227 10.1631 1.47976e-05C13.5278 0.00735186 16.2849 2.75875 16.2701 6.08978C16.2627 9.44282 13.513 12.1429 10.126 12.1355C6.73898 12.1282 3.99675 9.41347 4.00417 6.07511ZM10.1334 11.1157C12.9423 11.123 15.2473 8.87053 15.2547 6.11179C15.2621 3.29436 12.972 1.00519 10.1482 1.00519C7.35413 1.00519 5.03435 3.27968 5.02694 6.03108C5.01953 8.85585 7.28002 11.1157 10.1334 11.1157Z"
          fill="white"
        />
      </svg>
    );
  }
  if (name == "upload") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_149_2904)">
          <path
            d="M24 12C24 18.6188 18.5906 24.0094 11.9719 24C5.37187 23.9906 0 18.6 0 12C0 5.37189 5.40938 -0.00936277 12.0281 1.2231e-05C18.6281 0.00938723 24 5.40001 24 12ZM11.9906 22.1344C17.5875 22.1344 22.125 17.6063 22.125 12.0094C22.125 6.41251 17.5969 1.87501 12 1.87501C6.40312 1.87501 1.86562 6.40314 1.86562 12C1.86562 17.5875 6.40313 22.1344 11.9906 22.1344Z"
            fill="black"
          />
          <path
            d="M12.9375 10.9777C14.0906 10.9777 15.1875 10.9777 16.275 10.9777C16.4344 10.9777 16.5938 10.9684 16.7438 10.9871C17.2594 11.0621 17.5875 11.4559 17.5688 11.9527C17.55 12.4496 17.1844 12.8246 16.6594 12.834C15.6281 12.8527 14.5969 12.8434 13.5656 12.8434C13.3781 12.8434 13.1906 12.8434 12.9375 12.8434C12.9375 13.0309 12.9375 13.1902 12.9375 13.359C12.9375 14.3902 12.9469 15.4215 12.9375 16.4527C12.9281 17.0621 12.5625 17.4746 12.0281 17.4934C11.475 17.5121 11.0813 17.0809 11.0719 16.4527C11.0625 15.2715 11.0719 14.0902 11.0719 12.8527C10.0594 12.8527 9.07501 12.8527 8.10001 12.8527C7.86563 12.8527 7.63126 12.8621 7.39688 12.8527C6.83438 12.834 6.45938 12.4777 6.44063 11.9621C6.42188 11.4277 6.78751 11.0059 7.35938 10.9965C8.22188 10.9684 9.07501 10.9871 9.93751 10.9871C10.2938 10.9871 10.65 10.9871 11.0719 10.9871C11.0719 10.5371 11.0719 10.1246 11.0719 9.71211C11.0719 8.91523 11.0625 8.11836 11.0813 7.32148C11.0906 6.74023 11.475 6.36523 12.0094 6.36523C12.5438 6.36523 12.9281 6.74023 12.9375 7.33086C12.9469 8.51211 12.9375 9.71211 12.9375 10.9777Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_149_2904">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0522 24.26C19.1323 24.26 18.2125 24.2684 17.2926 24.2516C17.0166 24.2432 16.9079 24.3441 16.8494 24.6132C16.4313 26.5557 14.6835 27.9515 12.6849 27.9515C10.6863 27.9515 8.91341 26.5557 8.50366 24.63C8.44512 24.3357 8.32804 24.2516 8.03536 24.2516C6.21235 24.26 4.38097 24.2684 2.55796 24.2432C1.59628 24.2348 0.818569 23.6125 0.509159 22.6707C0.224836 21.813 0.525884 20.8039 1.26178 20.2237C1.45412 20.0639 1.64645 19.8958 1.86387 19.7696C2.69176 19.2987 3.00953 18.5503 3.14333 17.6337C3.51128 15.1867 3.8625 12.7397 4.3308 10.3095C4.94962 7.12253 6.81444 4.9362 9.84165 3.78417C10.1176 3.67486 10.2263 3.56554 10.2347 3.26282C10.2681 1.85011 11.3302 0.824219 12.6849 0.824219C14.0229 0.832628 15.0765 1.85852 15.11 3.23759C15.1183 3.56554 15.2438 3.67486 15.5281 3.78417C18.6138 4.99507 20.487 7.24026 21.0473 10.5366C21.4822 13.1013 21.8919 15.666 22.3184 18.2308C22.402 18.7185 22.6445 19.1221 23.0376 19.4249C23.3804 19.6855 23.7317 19.9378 24.0745 20.2069C24.8188 20.7955 25.1282 21.7962 24.8522 22.6539C24.5428 23.6041 23.7568 24.2096 22.77 24.2516C22.7282 24.2516 22.6864 24.2516 22.6445 24.2516C21.7832 24.26 20.9135 24.26 20.0522 24.26ZM12.6347 23.0323C15.8542 23.0323 19.0738 23.0323 22.2933 23.0323C22.4606 23.0323 22.6278 23.0323 22.7951 23.0155C23.2383 22.965 23.5393 22.7296 23.6731 22.2923C23.8069 21.855 23.6731 21.485 23.3303 21.2076C23.0459 20.9637 22.7282 20.7535 22.4271 20.5264C21.7163 19.9967 21.2564 19.3071 21.1059 18.4158C20.8633 16.9106 20.6208 15.4138 20.3616 13.9086C20.1191 12.5043 19.9518 11.0832 19.5923 9.7125C18.8647 6.94595 16.3894 4.91098 13.5128 4.56621C10.6277 4.22144 7.71759 5.72665 6.32942 8.27456C5.75241 9.32568 5.54335 10.4693 5.36774 11.6381C5.03324 13.8077 4.65693 15.9688 4.31407 18.1299C4.15518 19.1474 3.7287 19.9798 2.86737 20.5769C2.56632 20.7787 2.27363 20.9973 2.00604 21.2328C1.69663 21.5019 1.57119 21.8466 1.6799 22.2503C1.79698 22.6875 2.0813 22.9482 2.52451 23.0071C2.69176 23.0323 2.85901 23.0323 3.02625 23.0323C6.22907 23.0323 9.43189 23.0323 12.6347 23.0323ZM9.69948 24.2852C10.0842 25.9418 11.464 26.8836 13.1532 26.6902C14.3741 26.5472 15.6117 25.3448 15.6201 24.2852C13.6549 24.2852 11.6897 24.2852 9.69948 24.2852ZM13.8807 3.33009C13.9142 2.83396 13.6967 2.47238 13.287 2.22852C12.8689 1.98466 12.434 1.99306 12.0242 2.26215C11.6396 2.51442 11.4305 2.85919 11.4807 3.33009C12.3002 3.33009 13.0779 3.33009 13.8807 3.33009Z"
        fill="black"
      />
    </svg>
  );
};

export default Img;
