// import { Button } from "primereact/button";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { IconField } from "primereact/iconfield";
// import { InputIcon } from "primereact/inputicon";
// import { useState } from "react";


// const Header = () => {
  // const [selectedCity, setSelectedCity] = useState({
    // name: "Admin",
    // code: "a",
  // });
  // const [selectedSearch, setSelectedSearch] = useState({
    // name: "Medallion Owner",
    // code: "a"
  // });
  // const [value, setValue] = useState("");

  // const cities = [
    // { name: "Admin", code: "a" },
    // { name: "Super Admin", code: "sa" },
    // { name: "Accountant", code: "ac" },
  // ];
  // const search = [
    // { name: "Medallion Owner", code: "a" },
    // { name: "Medallion", code: "sa" },
    // { name: "Driver", code: "ac" },
    // { name: "Vehicle", code: "ac" },
  // ];
  // return (
    // <header className="d-flex align-items-center justify-content-between w-100">
      // <div className="d-flex w-100 align-items-center justify-content-between inner-con">
        // <a href="/" className="d-flex align-items-end text-black logo">
          // <img src="/assets/images/logo.png" alt="" />
          // DISPATCH PLATFORM
        // </a>
        // <div className="advance-search-con d-flex align-items-center">
          // <Dropdown
            // value={selectedSearch}
            // onChange={(e) => setSelectedSearch(e.value)}
            // options={search}
            // optionLabel="name"
            // placeholder="Select a City"
            // className="dropdown-transparent border-0 text-small"
          // />
          // <IconField iconPosition="right" className="flex-grow-1">
            // <InputIcon icon={()=><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M14.7777 15.5154C10.7666 18.8966 5.33493 18.2349 2.26803 14.8053C-0.782722 11.3999 -0.75044 6.17077 2.3326 2.87835C5.5367 -0.535104 10.6778 -0.954726 14.3177 1.84544C17.9415 4.63754 19.2247 10.3993 15.5768 14.7488C16.3273 15.4912 17.0779 16.2336 17.8366 16.9841C18.5952 17.7426 18.005 17.1439 18.7556 17.9105C19.1349 18.2978 19.0623 18.7901 18.6103 18.9595C18.2955 19.0806 18.0696 18.9111 17.8678 18.7013C16.528 17.3617 16.5452 17.3795 15.2055 16.0319C15.0441 15.8785 14.923 15.6929 14.7777 15.5154ZM8.88608 1.19987C4.69734 1.11917 1.19462 4.67789 1.17848 8.85796C1.17041 12.9977 4.59242 16.5887 8.88608 16.5645C13.1475 16.5403 16.5372 13.1429 16.5614 8.8741C16.5937 4.60526 13.0183 1.12724 8.88608 1.19987Z" fill="black"/>
// </svg>
// }> </InputIcon>
            // {/* <InputText placeholder="Search" /> */}
            // <InputText
              // className="border-0 w-100 border-radius-30"
              // placeholder="Search for Medallion Owner Name / ID / SSN / EIN"
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
            // />
          // </IconField>
        // </div>
        // <div className="d-flex gap-10 align-items-center setting-con">
          // <Button
            // text
            // icon={(options) => (
              // <svg
                // width="25"
                // height="28"
                // viewBox="0 0 25 28"
                // fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              // >
                // <path
                  // d="M20.0522 24.26C19.1323 24.26 18.2125 24.2684 17.2926 24.2516C17.0166 24.2432 16.9079 24.3441 16.8494 24.6132C16.4313 26.5557 14.6835 27.9515 12.6849 27.9515C10.6863 27.9515 8.91341 26.5557 8.50366 24.63C8.44512 24.3357 8.32804 24.2516 8.03536 24.2516C6.21235 24.26 4.38097 24.2684 2.55796 24.2432C1.59628 24.2348 0.818569 23.6125 0.509159 22.6707C0.224836 21.813 0.525884 20.8039 1.26178 20.2237C1.45412 20.0639 1.64645 19.8958 1.86387 19.7696C2.69176 19.2987 3.00953 18.5503 3.14333 17.6337C3.51128 15.1867 3.8625 12.7397 4.3308 10.3095C4.94962 7.12253 6.81444 4.9362 9.84165 3.78417C10.1176 3.67486 10.2263 3.56554 10.2347 3.26282C10.2681 1.85011 11.3302 0.824219 12.6849 0.824219C14.0229 0.832628 15.0765 1.85852 15.11 3.23759C15.1183 3.56554 15.2438 3.67486 15.5281 3.78417C18.6138 4.99507 20.487 7.24026 21.0473 10.5366C21.4822 13.1013 21.8919 15.666 22.3184 18.2308C22.402 18.7185 22.6445 19.1221 23.0376 19.4249C23.3804 19.6855 23.7317 19.9378 24.0745 20.2069C24.8188 20.7955 25.1282 21.7962 24.8522 22.6539C24.5428 23.6041 23.7568 24.2096 22.77 24.2516C22.7282 24.2516 22.6864 24.2516 22.6445 24.2516C21.7832 24.26 20.9135 24.26 20.0522 24.26ZM12.6347 23.0323C15.8542 23.0323 19.0738 23.0323 22.2933 23.0323C22.4606 23.0323 22.6278 23.0323 22.7951 23.0155C23.2383 22.965 23.5393 22.7296 23.6731 22.2923C23.8069 21.855 23.6731 21.485 23.3303 21.2076C23.0459 20.9637 22.7282 20.7535 22.4271 20.5264C21.7163 19.9967 21.2564 19.3071 21.1059 18.4158C20.8633 16.9106 20.6208 15.4138 20.3616 13.9086C20.1191 12.5043 19.9518 11.0832 19.5923 9.7125C18.8647 6.94595 16.3894 4.91098 13.5128 4.56621C10.6277 4.22144 7.71759 5.72665 6.32942 8.27456C5.75241 9.32568 5.54335 10.4693 5.36774 11.6381C5.03324 13.8077 4.65693 15.9688 4.31407 18.1299C4.15518 19.1474 3.7287 19.9798 2.86737 20.5769C2.56632 20.7787 2.27363 20.9973 2.00604 21.2328C1.69663 21.5019 1.57119 21.8466 1.6799 22.2503C1.79698 22.6875 2.0813 22.9482 2.52451 23.0071C2.69176 23.0323 2.85901 23.0323 3.02625 23.0323C6.22907 23.0323 9.43189 23.0323 12.6347 23.0323ZM9.69948 24.2852C10.0842 25.9418 11.464 26.8836 13.1532 26.6902C14.3741 26.5472 15.6117 25.3448 15.6201 24.2852C13.6549 24.2852 11.6897 24.2852 9.69948 24.2852ZM13.8807 3.33009C13.9142 2.83396 13.6967 2.47238 13.287 2.22852C12.8689 1.98466 12.434 1.99306 12.0242 2.26215C11.6396 2.51442 11.4305 2.85919 11.4807 3.33009C12.3002 3.33009 13.0779 3.33009 13.8807 3.33009Z"
                  // fill="black"
                // />
              // </svg>
            // )}
          // />
          // <Button
            // text
            // icon={(options) => (
              // <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 17.3052C0.189733 17.0311 0.358384 16.6517 0.642983 16.4092C1.30705 15.8295 2.02381 15.3341 2.69842 14.7649C2.85653 14.6279 2.93031 14.3749 2.98302 14.1641C3.02518 13.9849 2.94086 13.7741 2.98302 13.5843C3.19383 12.7094 2.7722 12.1824 2.07652 11.7397C1.56002 11.4129 1.09623 11.0019 0.621901 10.6118C0.0421628 10.1375 -0.0737849 9.57886 0.29514 8.93588C1.12785 7.47072 1.97111 6.0161 2.82491 4.56149C3.16221 3.96067 3.68924 3.78148 4.34277 4.02391C5.19656 4.35067 6.02928 4.7196 6.88308 5.02528C7.07281 5.09906 7.33633 5.03582 7.54714 4.96203C7.73687 4.89879 7.89498 4.70906 8.08472 4.63527C8.82257 4.3823 9.11771 3.88688 9.14933 3.10687C9.17041 2.46389 9.32852 1.82091 9.41284 1.17792C9.52879 0.408452 9.95042 0.0184462 10.7199 0.00790553C12.3853 -0.00263517 14.0613 -0.00263517 15.7267 0.00790553C16.4646 0.00790553 16.8967 0.408452 17.0127 1.13576C17.1392 1.98956 17.2657 2.83281 17.3711 3.68661C17.4132 4.01337 17.5186 4.24527 17.8559 4.35067C18.0246 4.40338 18.1932 4.47716 18.3197 4.59311C18.9522 5.21501 19.6057 5.07798 20.3119 4.73014C20.86 4.45608 21.4398 4.24527 22.009 4.03445C22.7363 3.76039 23.2739 3.93959 23.6639 4.60365C24.486 6.0161 25.3082 7.42856 26.1093 8.84101C26.5309 9.57886 26.415 10.1164 25.7615 10.6435C25.0869 11.181 24.3912 11.687 23.7377 12.2457C23.5795 12.3721 23.5058 12.6357 23.4531 12.8465C23.4109 13.0046 23.4952 13.2049 23.4531 13.3735C23.2528 14.2695 23.6533 14.8387 24.4017 15.3025C24.9077 15.6187 25.3504 16.0192 25.8142 16.3987C26.3939 16.8625 26.5204 17.4317 26.1515 18.0852C25.3188 19.5504 24.4755 21.005 23.6217 22.4596C23.2633 23.071 22.7152 23.2501 22.0406 22.9866C21.2079 22.6704 20.3857 22.3015 19.5425 21.9958C19.3527 21.922 19.0892 21.9958 18.8784 22.0485C18.7308 22.0907 18.6254 22.2488 18.4778 22.2909C17.4659 22.5755 17.2762 23.3556 17.2235 24.2621C17.1919 24.7996 17.0865 25.3372 17.0021 25.8748C16.8967 26.6021 16.454 26.9921 15.7056 26.9921C14.0402 27.0026 12.3642 27.0026 10.6988 26.9921C9.96096 26.9921 9.51825 26.5915 9.41284 25.8642C9.28636 25.0104 9.15987 24.1672 9.05446 23.3134C9.0123 22.9866 8.90689 22.7547 8.56959 22.6493C8.40094 22.5966 8.23229 22.5228 8.1058 22.4069C7.49444 21.8272 6.87254 21.8799 6.16631 22.2593C5.60765 22.5545 5.00683 22.7547 4.41655 22.9761C3.68924 23.2501 3.15167 23.071 2.76166 22.4069C1.92895 20.9839 1.10677 19.5504 0.284599 18.1274C0.179192 17.9166 0.126488 17.6636 0 17.3052ZM25.2555 17.4001C24.4228 16.7465 23.6217 16.093 22.789 15.4817C22.3884 15.1865 22.2303 14.8703 22.283 14.3749C22.3357 13.8057 22.3357 13.2154 22.283 12.6462C22.2409 12.1719 22.3779 11.8557 22.7679 11.5711C23.6112 10.9492 24.4228 10.2851 25.2555 9.63156C24.3701 8.10316 23.5058 6.61692 22.6414 5.1096C21.5874 5.49961 20.5649 5.86853 19.553 6.26908C19.1841 6.41665 18.8995 6.36395 18.5727 6.14259C18.0351 5.78421 17.4659 5.46799 16.8862 5.17285C16.5594 5.0042 16.3802 4.79338 16.3275 4.41392C16.2116 3.48634 16.064 2.5693 15.9481 1.65225C15.9059 1.35712 15.8427 1.18846 15.4737 1.18846C13.977 1.199 12.4907 1.17792 10.9939 1.15684C10.7094 1.15684 10.6039 1.25171 10.5618 1.53631C10.4353 2.47443 10.2456 3.40201 10.1191 4.34013C10.0558 4.76176 9.86609 5.02528 9.46555 5.20447C8.97014 5.42583 8.48526 5.68934 8.05309 6.0161C7.5893 6.36395 7.18876 6.41665 6.65118 6.17421C5.75522 5.76313 4.8171 5.42582 3.88952 5.0569C2.98302 6.59584 2.10814 8.07154 1.22272 9.56832C2.06598 10.2535 2.85653 10.9386 3.69979 11.5816C4.08979 11.8767 4.1952 12.2035 4.15304 12.6673C4.11087 13.2365 4.11087 13.8268 4.15304 14.396C4.1952 14.8703 4.05817 15.1865 3.66816 15.4711C2.82491 16.093 2.01327 16.7571 1.18056 17.4106C2.06598 18.9495 2.93031 20.4252 3.79465 21.9326C4.52196 21.6585 5.22819 21.4582 5.89225 21.1315C6.85145 20.6571 7.73687 20.5412 8.55905 21.3739C8.56959 21.3844 8.59067 21.395 8.60121 21.4055C9.9188 21.7428 10.2561 22.7126 10.2877 23.9353C10.2983 24.5677 10.4669 25.2002 10.5723 25.8748C12.2378 25.8748 13.8399 25.8642 15.4316 25.8853C15.7162 25.8853 15.8216 25.7905 15.8532 25.5059C15.9902 24.5361 16.1378 23.5558 16.3486 22.5966C16.4013 22.3331 16.6438 22.059 16.8757 21.9009C17.4132 21.532 18.0035 21.2685 18.5411 20.9101C18.8889 20.6782 19.1841 20.6361 19.5741 20.7942C20.5438 21.2053 21.5241 21.5847 22.5149 21.9747C22.5887 21.8693 22.652 21.785 22.7047 21.7007C23.5479 20.2777 24.3912 18.8547 25.2555 17.4001Z" fill="black"/>
// <path d="M18.8258 13.5108C18.8258 16.6308 16.3171 19.129 13.2076 19.1184C10.0875 19.1079 7.5894 16.5992 7.61048 13.4791C7.62102 10.3802 10.1086 7.90312 13.2076 7.89258C16.3276 7.89258 18.8258 10.4013 18.8258 13.5108ZM17.719 13.5424C17.7401 11.0864 15.7163 9.04151 13.2392 9.02043C10.7832 8.99935 8.73834 11.0232 8.71726 13.5002C8.69618 15.9562 10.72 18.0011 13.1971 18.0222C15.653 18.0327 17.6979 16.0089 17.719 13.5424Z" fill="black"/>
           // </svg>
            // )}
          // />
          // <Dropdown
            // value={selectedCity}
            // onChange={(e) => setSelectedCity(e.value)}
            // options={cities}
            // optionLabel="name"
            // placeholder="Select a City"
            // className="dropdown-transparent border-0"
          // />
        // </div>
      // </div>
      // <div className="user-profile">
        // <img src="/assets/images/user.png" alt="" />
      // </div>
    // </header>
  // );
// };

// export default Header;
