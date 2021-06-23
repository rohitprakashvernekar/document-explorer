import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { HomeFilled } from "@ant-design/icons";

const style={
  display:'flex',height:"50px",
  background:"#F0F4FD",
  padding:"12px",
  fontSize:"20px"
}

const Heading = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((item) => item);
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div style={style}>
      <div style={{width:"300px"}} >
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeFilled style={{ fontSize: '150%'}}/>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span style={{color: "#4E89FF", fontSize:"20px"}} >DOCUMENT</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      </div>
      <div style={{width:"70%"}}>
        <Breadcrumb separator=">" style={{display:"inline",float:"left",fontWeight:"bold"}}>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{capitalize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>{capitalize(name)}</Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </div>
  );
};
export default withRouter(Heading);
