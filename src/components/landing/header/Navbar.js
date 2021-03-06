import React from "react";
import { NavLink, Link } from "react-router-dom";
import WalletModal from "../WalletModal";
import "./navbar.scss";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../../../Wallet/connectors";

const Navbar = () => {
  // const PurchaseModalOpen = () => {
  //   window.$("#exampleModal").modal("show");
  // };

  // const PurchaseModalclose = () => {
  //   window.$("#exampleModal").modal("hide");
  // };

  // useEffect(() => {
  //   PurchaseModalOpen();
  // }, []);
  const [showModal, setShowModal] = useState(false);

  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  const connect = async (metamask = true) => {
    try {
      localStorage.setItem("metamask", false);
      localStorage.setItem("toggle", false);
      if (metamask) {
        // console.log("meta mask envoked");
        await activate(injected);
        localStorage.setItem("metamask", true);
        localStorage.setItem("toggle", false);
      } else {
        // console.log("connect wallet envoked");
        await activate(walletconnect);
        localStorage.setItem("metamask", false);
        localStorage.setItem("toggle", true);
      }
      setShowModal(false);
    } catch (e) {
      alert(e);
    }
  };
  const disconnect = async () => {
    await deactivate();
    localStorage.setItem("metamask", false);
    localStorage.setItem("toggle", false);
  };

  const connection = async () => {
    if (active) {
      await disconnect();
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    let metamask = localStorage.getItem("metamask")
      ? localStorage.getItem("metamask")
      : "false";
    let toggle = localStorage.getItem("toggle")
      ? localStorage.getItem("toggle")
      : "false";
    if (toggle === "false" && metamask === "true") {
      connect(true).then();
    } else if (toggle === "true" && metamask === "false") {
      connect(false).then();
    } else {
      console.log("no need to call");
    }
  }, [active]);

  return (
    <>
      <section className="main-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 m-auto">
              <nav className="navbar ptb20 navbar-expand-xl">
                <NavLink to="/" className="navbar-brand">
                  <img
                    src="./assestmeta/Crynical/logo.svg"
                    alt=""
                    className="img-fluid hbdsjbd"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>
                    <i class="fas fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <Link to="/" class="nav-link">
                        {" "}
                        HOME <span class="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to="/Marketplace" class="nav-link ">
                        MARKETPLACE{" "}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/Staking" class="nav-link ">
                        STAKING{" "}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/Swap" class="nav-link ">
                        SWAP{" "}
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/liquidty" class="nav-link ">
                        Pools
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Menu
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <HashLink to="/#aboutus_page">
                            <a class="dropdown-item" href="/">
                              ABOUT CYN-C
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#road-map">
                            <a class="dropdown-item" href="/">
                              ROADMAP
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="#ournft_page" class="dropdown-item">
                            NFTS
                          </HashLink>
                        </li>

                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#cyncoin_page">
                            <a class="dropdown-item" href="#">
                              CYN-COIN
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#howtobuy_page">
                            <a class="dropdown-item" href="#">
                              HOW TO BUY
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#joinour_page">
                            <a class="dropdown-item" href="#">
                              COMMUNITY LINKS
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#meetour_page">
                            <a class="dropdown-item" href="#">
                              THE TEAM
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#affiliates">
                            <a class="dropdown-item" href="#">
                              AFFILIATES
                            </a>
                          </HashLink>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <HashLink to="/#contactus_page">
                            <a class="dropdown-item" href="#">
                              CONTACT US
                            </a>
                          </HashLink>
                        </li>
                        <li></li>
                      </ul>
                    </li>
                    {/* <li class="nav-item active">
                                            <a class="nav-link " href="sds">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/TokenSale">Tokan Sale</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/staking" class="nav-link" >Staking</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/unstaking" class="nav-link" >UnStaking</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/upcomingproject" class="nav-link" >Upcoming</Link>
                                        </li> */}

                    {/* <li class="nav-item">
                                            <a class="nav-link" href="sas">Dashboard</a>
                                        </li> */}
                    {/* <li>
                                            <form className="form-inline formm-mm my-2 my-lg-0">
                                                <input className="form-control input-bbb mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn search-barss  my-2 my-sm-0" type="submit" ><img src="\bluemoon-nft\hot-bid\search-bar-1.svg" alt="" className="img-fluid" /></button>
                                            </form>
                                        </li> */}
                  </ul>

                  <button className="sbvsx" onClick={() => connection()}>
                    {!active
                      ? "Connect Wallet "
                      : account.slice(0, 6) + "..." + account.slice(-4)}
                  </button>
                  {/* <form className="form-inline my-2 my-lg-0">
                                        <a className="nav-buttoo" href="https://docs.google.com/forms/d/e/1FAIpQLSdRkAPW_zLgEFBqNvASjgPBqAYozeAkcG1tkVOdr5GLs3la8w/viewform?usp=sf_link" target="_blank">Apply for IDO</a>
                                    </form> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <WalletModal closeModal={() => setShowModal(false)} connect={connect} />
      )}
    </>
  );
};

export default Navbar;
