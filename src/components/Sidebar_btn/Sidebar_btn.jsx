import React, {  useState, } from "react";

import "./Sidebar_btn.scss";
import { NavLink } from "react-router-dom";

const Sidebar_btn = ({ item, active, setActive }) => {

  const [open, setOpen] = useState();

  const [subDropdown, setSubDropdown] = useState();



  function dropdown_open(event) {
    console.log(open)
        setOpen(!open)   

        if(event.target.parentNode.parentNode.id){
          document.getElementById(active).nextElementSibling.classList.remove("open_dropdown")
          document.getElementById(active).classList.remove("dropdownActive")
          document.getElementById(active).firstChild.classList.remove("open")
          event.target.parentNode.parentNode.classList.add("dropdownActive")
          setActive(event.target.parentNode.parentNode.id)
        }
        else if(event.target.parentNode.parentNode.parentNode.id){
          document.getElementById(active).nextElementSibling.classList.remove("open_dropdown")
          document.getElementById(active).classList.remove("dropdownActive")
          document.getElementById(active).firstChild.classList.remove("open")
          event.target.parentNode.parentNode.parentNode.classList.add("dropdownActive")
          setActive(event.target.parentNode.parentNode.parentNode.id)          
        } 
        else if(event.target.parentNode.id){
          document.getElementById(active).nextElementSibling.classList.remove("open_dropdown")
          document.getElementById(active).classList.remove("dropdownActive")
          document.getElementById(active).firstChild.classList.remove("open")
          event.target.parentNode.classList.add("dropdownActive")
          setActive(event.target.parentNode.id)
          
        }
  }


  function changeActive(){
      document.getElementById(active).classList.remove("dropdownActive")
      document.getElementById(active).firstChild.classList.remove("open")
      document.getElementById(active).nextElementSibling.classList.remove("open_dropdown")
  }


  function subDropdownBtn(){
      setSubDropdown(!subDropdown)
  }
  

  


  //   group

  if (item.type == "group") {
    return (
      <div className="group">
        <svg>
          <rect />
        </svg>
        <p>{item.title}</p>
      </div>
    );
  }



  //   button
  else if (item.type == "btn") {
    return (
      <NavLink to={item.path}>
        <div className="btn" onClick={changeActive}>
          <div className="btn_container plain" id={item.id}  >
            <div className="btn_icon">
              <img src={item.icon} alt="icon" />
            </div>
            <p>{item.title}</p>
          </div>
          <div className="right_border"></div>
        </div>
      </NavLink>
    );
  }



  //   dropdown btn
  else if (item.type == "dropdown_btn") {
    return (
      <>
        
        <div className={`btn`} id={item.id} >
          <div className={`btn_container ${open && "open"}`} onClick={dropdown_open}>
            <div className="btn_icon">
              <img src={item.icon} alt="icon" />
            </div>
            <p>{item.title}</p>
            <div className="dropdown_arrow">
              <img
                src="./images/sidebar_icons/icon-arrow-right.svg"
                alt="arrow_right"
              />
            </div>
          </div>
          <div className="right_border"></div>
        </div>
        <div className={`dropdown_item_container ${open && "open_dropdown"}`}>
        
          {item.childrens.map((btn) => {
            return (
              <NavLink to={btn.path}>
                <div className="btn dropdown_margin bullet_item">
                  <div className="btn_container">
                    <div className="bullet_box">
                      <div className="bullet_container">
                        <div className="bullet"></div>
                      </div>
                    </div>
                    <p>{btn.title}</p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </>
    );
  }



  //   double dropdown btn
  else {
    return (
      <>
        <div className="btn" id={item.id} onClick={dropdown_open}>
          <div className={`btn_container ${open && "open"}`}>
            <div className="btn_icon">
              <img src={item.icon} alt="icon" />
            </div>
            <p>{item.title}</p>
            <div className="dropdown_arrow">
              <img
                src="./images/sidebar_icons/icon-arrow-right.svg"
                alt="arrow_right"
              />
            </div>
          </div>
          <div className="right_border"></div>
        </div>

        <div className={`dropdown_item_container ${open && "open_dropdown"}`}>
          {item.childrens.map((btn) => {
            return (
              <>
                {btn.path && (
                  <NavLink to={btn.path}>
                    <div className="btn dropdown_margin bullet_item">
                      <div className="btn_container">
                        <div className="bullet_box">
                          <div className="bullet_container">
                            <div className="bullet"></div>
                          </div>
                        </div>
                        <p>{btn.title}</p>
                        <div className="dropdown_arrow">
                          {btn.childrens && (
                            <img
                              src="./images/sidebar_icons/icon-arrow-right.svg"
                              alt="arrow_right"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </NavLink>
                )}
                {!btn.path && (
                  <div className="btn dropdown_margin"  onClick={subDropdownBtn}>
                    <div className={`btn_container ${subDropdown && "open openSubDropdown"}`}>
                      <div className="bullet_box">
                        <div className="bullet_container">
                          <div className="bullet"></div>
                        </div>
                      </div>
                      <p>{btn.title}</p>
                      <div className="dropdown_arrow">
                        {btn.childrens && (
                          <img
                            src="./images/sidebar_icons/icon-arrow-right.svg"
                            alt="arrow_right"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className={`dropdown_item_container sub_dropdown ${subDropdown && "open_dropdown"} `}>
                  {btn.childrens &&
                    btn.childrens.map((btn2) => {
                      return (
                        <NavLink to={btn2.path}>
                          <div className="btn dropdown_margin bullet_item">
                            <div className="btn_container">
                              <div className="bullet_box">
                                <div className="bullet_container">
                                  <div className="bullet"></div>
                                </div>
                              </div>
                              <p>{btn2.title}</p>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
};

export default Sidebar_btn;
