import { NavLink } from "react-router-dom";
import Img from "./Img";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { ListBox } from "primereact/listbox";

const Sidebar = () => {
  const countries = [
    { name: "Dashboard", code: "AU" },
    { name: "New Medallion", code: "BR" },
    { name: "Manage", code: "CN" },
  ];
  const countryTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag flag-${option.code.toLowerCase()}`}
          style={{ width: "1.25rem", marginRight: ".5rem" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  return (
    <aside className="sidebar">
      <NavLink
        to="/medallion"
        className={({ isActive }) =>
          [
            isActive ? "active" : "",
            "menu-link d-flex align-items-center",
          ].join(" ")
        }
      >
        <Img name="home"></Img> <span>Home</span>
      </NavLink>

      {/* <Accordion activeIndex={0}>
        <AccordionTab 
          header={
            <span className="menu-link d-flex align-items-center">
              <Img name="home"></Img> <span>Home</span>
            </span>
          }
        >
          <ListBox
            options={countries}
            optionLabel="name"
            itemTemplate={countryTemplate}
            className="w-full md:w-14rem"
            listStyle={{ maxHeight: "250px" }}
          />
        </AccordionTab>
        <AccordionTab
          header={
            <span className="flex align-items-center gap-2 w-full">
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
                shape="circle"
              />
              <span className="font-bold white-space-nowrap">Onyama Limba</span>
              <Badge value="4" className="ml-auto" />
            </span>
          }
        >
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab
          header={
            <span className="flex align-items-center gap-2 w-full">
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
                shape="circle"
              />
              <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
              <Badge value="2" className="ml-auto" />
            </span>
          }
        >
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
      </Accordion> */}
    </aside>
  );
};

export default Sidebar;
