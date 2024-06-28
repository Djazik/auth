import React, { useState } from "react";
import axios from "../../api";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { IoClose } from "react-icons/io5";
import { useGetInputValuen } from "../../hooks/useGetInputValue";
import "./style.css"
import { Login } from "@mui/icons-material";

const initialState = {
  UserName: "",
  password: "",
};

const initialStates = {
  UserName: "",
  password: "",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistar, setIsRegistar] = useState(false);
  const navigate = useNavigate();

  const { formData, handlechange, setFormData } =
    useGetInputValuen(initialState);
  // const {formData , handlechange , setFormData} = useGetInputValuen(initialStates)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  const handleLogins = (e) => {
    e.preventDefault();
    setFormData(initialStates);
    console.log(formData);
  };

  const [formDatas, setFormDatas] = useState(initialStates);

  const handlechanges = (e) => {
    const { name, value } = e.target;
    setFormDatas((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <header id="navbar" className="navbar header">
        <nav className="container nav">
          <a href="#">
           
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to={"/"} className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>
           
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item">
              <button onClick={() => setIsLogin(true)} className="download">
                Log in
              </button>
            </li>
            <li className="nav__item">
              <button onClick={() => setIsRegistar(true)} className="download">
                Registar
              </button>
            </li>
          </ul>

          
         
        </nav>
      </header>

      {isRegistar ? (
        <Modal close={setIsRegistar}>
          <div className="modal__header">
            <h2>Registar</h2>
            <p onClick={() => setIsRegistar(false)}>
              <IoClose />
            </p>
          </div>
          <form onSubmit={handleLogins} action="">
            <input
              value={formDatas.UserName}
              onChange={handlechanges}
              type="text"
              name="UserName"
              placeholder="username"
            />
            <input
              value={formDatas.password}
              onChange={handlechanges}
              type="text"
              name="password"
              placeholder="password"
            />
            <input type="text" placeholder="password" />
            <input type="text" placeholder="password" />
            <input type="text" placeholder="password" />
            <button>Submit</button>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
