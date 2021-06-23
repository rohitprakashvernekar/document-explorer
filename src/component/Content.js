import { React, useState } from "react";
import { FileTextFilled, FolderFilled } from "@ant-design/icons";
import { useRouteMatch, useLocation } from "react-router-dom";
import "./content.css";
import Draw from "../component/Drawer";

const style = {
  fontSize: "60px",
  color: "grey",
};
const folderstyle = {
  fontSize: "30px",
  color: "#69CBF3",
};

const Content = (props) => {
  const { url, path } = useRouteMatch();
  const { state } = useLocation();
  const folderContents = JSON.parse(state).data;
  const currentFolder = JSON.parse(state).currentFolder;
  const fileList = folderContents.filter((item) => item.isLeaf);
  const folderList = folderContents.filter((item) => !item.isLeaf);
  console.log(fileList);
  console.log(folderList);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="main-content">
        <h3 style={{ textAlign: "left", margin: "30px", fontWeight: "bold" }}>
          {currentFolder}
        </h3>
        <p style={{ width: "70%", textAlign: "left", margin: "30px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="folder">
          {folderList.map((item) => {
            return (
              <div
                className="folderdetails"
                key={item.key}
                onClick={() => showDrawer()}
              >
                <p>
                  <FolderFilled style={folderstyle} />
                </p>
                <p style={{ marginLeft: "15px", paddingTop: "5px" }}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="file">
          {fileList.map((item) => {
            return (
              <div
                className="filedetails"
                key={item.key}
                onClick={() => showDrawer()}
              >
                <p>
                  <FileTextFilled style={style} />
                </p>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Draw visible={visible} onClose={onClose} />
    </>
  );
};
export default Content;
