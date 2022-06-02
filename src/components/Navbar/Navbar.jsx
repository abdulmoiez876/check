import React, { useState } from "react";
import styles from "./Navbar.module.css";
import hamburger from "../../assets/hamburger.png";
import cross from "../../assets/cross.png";
import home from "../../assets/home.png";
import bell from "../../assets/bell.png";
import arrowOut from "../../assets/outArrows.png";
import logout from "../../assets/logout.png";
import register from "../../assets/register.png";
import closeRegister from "../../assets/closeRegister.png";
import dollar from "../../assets/dollar.png";
import profit from "../../assets/profit.png";
import orderHistory from "../../assets/orderHistory.png";

export default function Navbar(props) {
  const [hamburgerStyle, setHamburgerStyle] = useState(true);
  const [hamDropRight, setHamDropRight] = useState(false);
  const [hamDrop, setHamDrop] = useState(false);
  const [imageDrop, setImageDrop] = useState(false);

  return (
    <>
      <div className={`${styles.navbarMine}`}>
        <div className={`${styles.containerMine}`}>
          <div className={`${styles.logo}`} cursor="pointer">
            <img
              className={`${styles.hamburger} ${styles.pointer}`}
              onClick={() => {
                setHamburgerStyle(!hamburgerStyle);
                setHamDrop(!hamDrop);
              }}
              src={hamburgerStyle ? hamburger : cross}
              alt="hamburger"
              width="25"
              height="25"
            />

            <div
              className={`${styles.hamDrop} ${
                hamDrop ? styles.dropShow : styles.dropNone
              }`}
              onClick={() => {
                setHamDrop(false);
              }}
            >
              <ul>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <img src={register} alt="register" height="25" width="25" />
                  <a className={`${styles.a}`} href="">
                    Registration Screen
                  </a>
                </li>
              </ul>
              <ul>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <img
                    src={orderHistory}
                    alt="register"
                    height="25"
                    width="25"
                  />
                  <a className={`${styles.a}`} href="">
                    Order History
                  </a>
                </li>
              </ul>
              <ul>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <img src={profit} alt="register" height="25" width="25" />
                  <a className={`${styles.a}`} href="">
                    Today's Profit
                  </a>
                </li>
              </ul>

              <ul className={styles.dropLeft}>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <img
                    src={closeRegister}
                    alt="Switch Store"
                    height="25"
                    width="25"
                  />
                  <div className={`${styles.a}`}>Switch Store</div>
                </li>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <img
                    src={closeRegister}
                    alt="Manage Store"
                    height="25"
                    width="25"
                  />
                  <a className={`${styles.a}`} href="">
                    Manage Store
                  </a>
                </li>
              </ul>

              <ul>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                  onClick={() => {
                    props.onShowCash();
                    setHamburgerStyle(true);
                    setHamDrop(false);
                  }}
                >
                  <img src={dollar} alt="register" height="25" width="25" />
                  <div className={`${styles.a}`} >
                    Manage Cash
                  </div>
                </li>
                <li
                  className={`${styles.li} ${styles.flexItemsLi} ${styles.lastLi} ${styles.pointer}`}
                >
                  <img
                    src={closeRegister}
                    alt="register"
                    height="25"
                    width="25"
                  />
                  <a className={`${styles.a}`} href="">
                    Close Register
                  </a>
                </li>
              </ul>
            </div>

            <img
              className={`${styles.homeMine} ${styles.home}`}
              src={home}
              alt="home"
              width="25"
              height="25"
            />
          </div>

          <div className={styles.leftResponsive}>
            <div className={`${styles.location}`}>
              <div className={`${styles.loc1}`}>
                <h4>Store:</h4>
                <p className={`${styles.pLocation}`}>Islamabad Store</p>
              </div>
              <div className={`${styles.loc1}`}>
                <h4>Register:</h4>
                <p className={`${styles.pLocation}`}>Morning Register</p>
              </div>
            </div>
          </div>
          <div className={`${styles.left}`}>
            <div className={`${styles.location}`}>
              <div className={`${styles.loc1}`}>
                <h4>Store:</h4>
                <p className={`${styles.pLocation}`}>Islamabad Store</p>
              </div>
              <div className={`${styles.loc1}`}>
                <h4>Register:</h4>
                <p className={`${styles.pLocation}`}>Morning Register</p>
              </div>
            </div>
            <div className={`${styles.manage}`}>
              <a className={`${styles.a} ${styles.flexItems}`} href="#">
                Manage Store
              </a>
              <div
                className={`${styles.verticalLine} ${styles.flexItems}`}
              ></div>
              <a className={`${styles.a} ${styles.flexItems}`} href="#">
                Switch Store
              </a>
            </div>
          </div>

          <div className={styles.rightResponsive}>
            <div className={styles.flexCol}>
              <img
                onClick={() => {
                  setHamDropRight(!hamDropRight);
                }}
                className={`${styles.flexItems}`}
                src="https://secure.gravatar.com/avatar/bcd7bd63f2e8aafcb9cb6b5b793bfc98?s=140&d=mm&r=g"
                alt="notification"
                width="25"
                height="25"
              />
              <h4>Rizwan</h4>
            </div>
            {hamDropRight && (
              <div className={styles.rightDrop}>
                <div className={`${styles.userImageSectionRight}`}>
                  <div className={`${styles.userImageDropRight}`}>
                    <div
                      className={`${styles.flex} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                    >
                      <h5>Login Times</h5>
                      <h5 className={`${styles.flexItemsImage}`}>
                        May 18, 2022
                      </h5>
                      <img
                        src={cross}
                        alt="cross"
                        height="10"
                        width="10"
                        onClick={() => {
                          setHamDropRight(false);
                        }}
                      />
                    </div>
                    <div
                      className={`${styles.flex} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                    >
                      <h5>Total Orders</h5>
                      <h5 className={`${styles.flexItemsImage}`}>0</h5>
                    </div>
                    <div
                      className={`${styles.flex} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                    >
                      <h5>Total Sales</h5>
                      <h5 className={`${styles.flexItemsImage}`}>0.00AED</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.flexRow}>
                  <img
                    className={`${styles.flexItems} ${styles.bell} ${styles.pointer}`}
                    src={bell}
                    alt="notification"
                    width="20"
                    height="20"
                  />
                  <img
                    className={`${styles.flexItems} ${styles.arrowOut} ${styles.pointer}`}
                    src={arrowOut}
                    alt="arrows"
                    width="20"
                    height="20"
                  />
                  <button
                    className={`${styles.flexItems} ${styles.buttonRightDrop} ${styles.pointer}`}
                  >
                    <span>
                      <img src={logout} alt="logout" width="15" height="15" />
                    </span>{" "}
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={`${styles.right}`}>
            <img
              className={`${styles.flexItems} ${styles.bell} ${styles.pointer}`}
              src={bell}
              alt="notification"
              width="25"
              height="25"
            />
            <img
              className={`${styles.flexItems} ${styles.arrowOut} ${styles.pointer}`}
              src={arrowOut}
              alt="arrows"
              width="25"
              height="25"
            />
            <div className={`${styles.userImageSection}`}>
              <div
                className={`${styles.userImage} ${styles.pointer}`}
                onClick={() => {
                  setImageDrop(!imageDrop);
                }}
              >
                <img
                  className={`${styles.flexItems}`}
                  src="https://secure.gravatar.com/avatar/bcd7bd63f2e8aafcb9cb6b5b793bfc98?s=140&d=mm&r=g"
                  alt="notification"
                  width="35"
                  height="35"
                />
                <h4>Rizwan</h4>
              </div>
              <div
                className={`${styles.userImageDrop} ${
                  imageDrop ? styles.dropShow : styles.dropNone
                }`}
              >
                <div
                  className={`${styles.flex} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <h5>Login Times</h5>
                  <h5 className={`${styles.flexItemsImage}`}>May 18, 2022</h5>
                </div>
                <div
                  className={`${styles.flex} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <h5>Total Orders</h5>
                  <h5 className={`${styles.flexItemsImage}`}>0</h5>
                </div>
                <div
                  className={`${styles.flex} ${styles.flexItemsLi} ${styles.listLi} ${styles.pointer}`}
                >
                  <h5>Total Sales</h5>
                  <h5 className={`${styles.flexItemsImage}`}>0.00AED</h5>
                </div>
              </div>
            </div>
            <button
              className={`${styles.flexItems} ${styles.button} ${styles.pointer}`}
            >
              <span>
                <img src={logout} alt="logout" width="20" height="20" />
              </span>{" "}
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
