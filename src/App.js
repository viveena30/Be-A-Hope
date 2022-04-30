import { useEffect, useState } from "react";
import "./App.css";
import ProjectOngoing from "./components/ProjectOngoing";
import DisconnectButton from "./components/Wallet/DisconnectButton";
import ConnectButton from "./components/Wallet/ConnectButton";
import AddProject from "./components/AddProject";
import config from "./config/config";
import About from "./components/About";
import CausesCard from "./components/CausesCard";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import axios from "axios";
import { Switch, FormControlLabel } from "@mui/material";
import causes from "./assets/causes.png";
import hero from "./assets/hero.jpg";
import { TezosToolkit } from "@taquito/taquito";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function App() {
  const [Tezos, setTezos] = useState(
    new TezosToolkit("https://ithacanet.smartpy.io/")
  );
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [beaconConnection, setBeaconConnection] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    getProjects();
  };

  const getProjects = () => {
    axios.get(`${config.API_URL}/storage`).then((res) => {
      setProjects(
        Object.keys(res.data).map((key) => {
          return {
            address: key,
            data: res.data[key],
          };
        })
      );

      setLoading(false);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
     
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            
          </ul>
          <h1 class="logo">Navbar</h1>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-item">
          <p className="hero-title">
            Charity brings to life again those who are spiritually dead
          </p>
          <div className="hero-quote">hELP PEOPLE WITH LOVE</div>
          <div className="contribute-btn primary-btn">
          {/* <LoginButton /> */}
          <LoginButton />
      <LogoutButton />
          </div>
        </div>
      </div>

      <div className="causes-container">
        <div className="title-container">
          <div className="main-title">RECENT CAUSES</div>
          <div className="title-des">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className="causes  card-container">
          <CausesCard
            src={causes}
            name={"POOR CHILDREN DONATION"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliar sit amet consectetur adipisicing elit. Alias, error."
            }
          />
          <CausesCard
            src={causes}
            name={"POOR CHILDREN DONATION"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliar sit amet consectetur adipisicing elit. Alias, error."
            }
          />
          <CausesCard
            src={causes}
            name={"POOR CHILDREN DONATION"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliar sit amet consectetur adipisicing elit. Alias, error."
            }
          />
        </div>
      </div>

      <Quote />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleClickOpen}
          style={{
            // margin: "20px 10px 10px 10px",
            backgroundColor: "var(--primary-color)",
            margin: "0 10px 0 0",

            border: "none",
            cursor: "pointer",
            padding: "10px 35px",
            borderRadius: "10px",
            fontSize: "16px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <div style={{ margin: "4px" }}>
            <b>Enlist Project</b>
          </div>
        </button>
        {userAddress === "" && !beaconConnection ? (
          <div style={{}}>
            <ConnectButton
              Tezos={Tezos}
              setWallet={setWallet}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              setBeaconConnection={setBeaconConnection}
              wallet={wallet}
            />
          </div>
        ) : (
          <DisconnectButton
            wallet={wallet}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setWallet={setWallet}
            setTezos={setTezos}
            setBeaconConnection={setBeaconConnection}
            userBalance={userBalance}
            userAddress={userAddress}
          />
        )}
      </div>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          // fontSize: "28px",
          // fontWeight: "600",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#000000",
          margin: "20px 80px",
        }}
      >
        Projects{" "}
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChecked} />}
          label="Show My Projects"
        />
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          padding: " 0 80px",
          margin: "0 auto",
          // placeItems: "center",
          justifyContent: "start",
        }}
      >
        {!checked
          ? projects.map((project) => (
              <ProjectOngoing
                projectDetails={project}
                key={project.address}
                Tezos={Tezos}
                userAddress={userAddress}
              />
            ))
          : projects.map(
              (project) =>
                project.data.owner === userAddress && (
                  <ProjectOngoing
                    projectDetails={project}
                    key={project.address}
                    Tezos={Tezos}
                    userAddress={userAddress}
                  />
                )
            )}

        <AddProject Tezos={Tezos} open={open} handleClose={handleClose} />
      </div>
      <About />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
