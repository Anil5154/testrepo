import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useState } from "react";

const Header = () => {
  const [selectedCity, setSelectedCity] = useState({
    name: "Admin",
    code: "a",
  });
  const [selectedSearch, setSelectedSearch] = useState({
    name: "Medallion Owner",
    code: "a",
  });
  const [value, setValue] = useState("");

  const cities = [
    { name: "Admin", code: "a" },
    { name: "Super Admin", code: "sa" },
    { name: "Accountant", code: "ac" },
  ];
  const search = [
    { name: "Medallion Owner", code: "a" },
    { name: "Medallion", code: "sa" },
    { name: "Driver", code: "ac" },
    { name: "Vehicle", code: "ac" },
  ];
  return (
    <header className="d-flex align-items-center justify-content-between w-100 py-2">
        <a href="/" className="d-flex align-items-end text-black logo">
          <img src="/assets/images/logo.png" alt="" />
          DISPATCH PLATFORM
        </a>
        <div className="advance-search-con d-flex align-items-center">
          <Dropdown
            value={selectedSearch}
            onChange={(e) => setSelectedSearch(e.value)}
            options={search}
            optionLabel="name"
            placeholder="Select a City"
            className="dropdown-transparent border-0 text-small"
          />
          <IconField iconPosition="right" className="flex-grow-1">
            <InputIcon
              icon={() => (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7777 15.5154C10.7666 18.8966 5.33493 18.2349 2.26803 14.8053C-0.782722 11.3999 -0.75044 6.17077 2.3326 2.87835C5.5367 -0.535104 10.6778 -0.954726 14.3177 1.84544C17.9415 4.63754 19.2247 10.3993 15.5768 14.7488C16.3273 15.4912 17.0779 16.2336 17.8366 16.9841C18.5952 17.7426 18.005 17.1439 18.7556 17.9105C19.1349 18.2978 19.0623 18.7901 18.6103 18.9595C18.2955 19.0806 18.0696 18.9111 17.8678 18.7013C16.528 17.3617 16.5452 17.3795 15.2055 16.0319C15.0441 15.8785 14.923 15.6929 14.7777 15.5154ZM8.88608 1.19987C4.69734 1.11917 1.19462 4.67789 1.17848 8.85796C1.17041 12.9977 4.59242 16.5887 8.88608 16.5645C13.1475 16.5403 16.5372 13.1429 16.5614 8.8741C16.5937 4.60526 13.0183 1.12724 8.88608 1.19987Z"
                    fill="black"
                  />
                </svg>
              )}
            >
              {" "}
            </InputIcon>
            <InputText
              className="border-0 w-100 border-radius-30"
              placeholder="Search for Medallion Owner Name / ID / SSN / EIN"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </IconField>
        </div>
        <div className="d-flex gap-10 align-items-center setting-con">
          <Button
            text
            icon={() => (
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
            )}
          />
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="dropdown-transparent border-0"
          />
        </div>
    </header>
  );
};

export default Header;
