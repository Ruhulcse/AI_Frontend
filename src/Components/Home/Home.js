import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { URL, token } from "../../utilities/config";
import Spinner from "../../images/generate.gif";
import "./Home.css";

const baseURL = `http://127.0.0.1:4000/`;
const Home = () => {
  const [content, setContent] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [downloading, setdownloading] = useState(false);
  const [code,setCode]= useState("");
  const [errormsg, setErrormsg] = useState("")
  const getContent = () => {
    axios
      .get(baseURL + "api/content", {
        headers: { Authorization: token },
      })
      .then((response) => {
        const rows = [];
        response.data.data.map((item) => {
          const date = new Date(item.createdAt);
          const hour = date.getHours() === 0 ? "00" : date.getHours();
          rows.push({
            id: item._id,
            code: item.code,
            file_name: item.file_name,
            created_at:
              date.getFullYear() +
              "/" +
              date.getMonth() +
              1 +
              "/" +
              date.getDate() +
              " " +
              hour +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds(),
          });
        });
        setContent(rows);
      });
  };

  const downloadContent = (params) => {
    console.log("code is ", params)
    setCode(params)
    setdownloading(true)
    axios
      .post(
        baseURL + "api/content/download",
        {
          content: params,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((response) => {
        console.log("response data ", response.data.data)
        setdownloading(false)
        window.open(baseURL + response.data.data, "_blank");
      }).catch(function(error) {
        setdownloading(false)
        // Handle error
      });;
  };

  const handleFileUpload = (event) => {
    const formData = new FormData();
    console.log("upload frontend");
    setUploading(true);
    formData.append("file", event.target.files[0]);
    console.log("token is ", token)
    axios
      .post(baseURL + "api/content/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("this is repsone", response)
        setUploading(false);
        getContent();
      }).catch((e) => {
        setUploading(false);
        console.log(e);
        setErrormsg("content upload failed due to chatgpt api issue or internal server error")
        console.error(e.message); // "oh, no!"
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    getContent();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#54668f",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 700,
    },
  }));

  return (
    <div>
      <div class="header">
        <div className="inner-header flex">
          <svg
            version="1.1"
            className="logo"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            xmlSpace="preserve"
          >
            <path
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M57,283"
            />
            <g>
              <path
                fill="#fff"
                d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
                C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
                c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7
                c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2
                c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z"
              />
            </g>
          </svg>
          <h1>AI Content Generator</h1>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <div style={{ margin: "5% 10%" }}>
        <div style={{ display: "flex", marginBottom: "5%" }}>
          {uploading ? (
            <>
              <h2 style={{ marginRight: "3%" }}>
                Please wait your content is genereting....{" "}
              </h2>
            </>
          ) : (
            <>
              {" "}
              <h2 style={{ marginRight: "3%" }}>Upload Your File Here </h2>
            </>
          )}

          {uploading ? (
            <>
              <div style={{ width: "35%",float:"left" }}>
                <img
                  className="profile-user-img img-fluid img-circle"
                  src={Spinner}
                  alt="User profile"
                />
              </div>
            </>
          ) : (
            <>
              <Button variant="contained" component="label">
                Upload
                <input
                  hidden
                  accept="*"
                  multiple
                  type="file"
                  onChange={handleFileUpload}
                />
              </Button>
            </>
          )}
        </div>

        <p>Latest 10 file.....</p>
      
        {downloading&&<p style={{color: "red"}}>one of your file downloading....</p>}
        {errormsg.length>2&&<h3 style={{color: "red"}}>{errormsg}</h3>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Action Code</StyledTableCell>
                <StyledTableCell align="left">File Name</StyledTableCell>
                <StyledTableCell align="left">Upload Time</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {content.map((row) => (
                <TableRow
                  key={row.code}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.code}
                  </TableCell>
                  <TableCell align="left">{row.file_name}</TableCell>
                  <TableCell align="left">{row.created_at}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => downloadContent(row.id)}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Home;
