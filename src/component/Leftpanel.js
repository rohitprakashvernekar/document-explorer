import { useState } from "react";
import { withRouter } from "react-router";
import { Tree } from "antd";
import {
  HomeFilled,
  ApartmentOutlined,
  FolderFilled,
  BarChartOutlined,
} from "@ant-design/icons";
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: "Tasks",
    key: "0-0",
    icon: <FolderFilled style={{ color: "#4E89FF" }} />,
    children: [
      {
        title: "Marketing",
        key: "0-0-0",
        icon: <FolderFilled style={{ color: "#4E89FF" }} />,
        children: [
          {
            title: "Awesome Website",
            key: "0-0-0-0",
            icon: <FolderFilled style={{ color: "#4E89FF" }} />,
            children: [
              {
                title: "Contact Form",
                key: "0-0-0-0-0",
                isLeaf: false,
                icon: <FolderFilled style={{ color: "#4E89FF" }} />,
              },
              {
                title: "Contact Form",
                key: "0-0-0-0-1",
                isLeaf: true,
              },
              {
                title: "Contact Form",
                key: "0-0-0-0-2",
                isLeaf: true,
              },
              {
                title: "Contact Form",
                key: "0-0-0-0-3",
                isLeaf: true,
              },
            ],
          },
          {
            title: "Social Media Assets",
            key: "0-0-0-1",
            icon: <FolderFilled style={{ color: "#4E89FF" }} />,
            children: [{
              title:"Social-1",
              key:"0-0-0-1-0",
              isLeaf:true
            }],
          },
        ],
      },
      {
        title: "Budget Approval",
        key: "0-0-1",
        icon: <ApartmentOutlined style={{ color: "#4E89FF" }} />,
        children: [{
          title:"Budget-1",
          key:"0-0-1-0",
          isLeaf:true
        }],
      },
    ],
  },
  {
    title: "Onboarding",
    key: "0-1",
    icon: <BarChartOutlined style={{ color: "#FAC10D" }} />,
    children: [
      {
        title: "Demo",
        key: "0-1-0",
        isLeaf: true,
      },
    ],
  },
];

const Leftpanel = (props) => {
  const [myMap, setMyMap] = useState(new Map());
  const onSelect = (keys, info) => {
    var url = [];
    var urlStr = "";
    let urlKey = info.node["title"];
    while (true) {
      if (urlKey === undefined) {
        urlKey = ""; // Set to false to exit loop
        url.reverse();
        url.push("/" + info.node["title"]);
        urlStr = url.join("");
        break; // Don't need this, if you set nL to false.
      } else {
        urlKey = myMap.get(urlKey);
        if (urlKey !== undefined) {
          url.push("/" + urlKey);
        }
      }
    }

    if (info.node["children"] !== undefined) {
      info.node["children"].map((child) => {
        myMap.set(child.title, info.node["title"]);
        setMyMap(myMap);
      });
      props.history.push({
        pathname: urlStr,
        state: JSON.stringify({
          data: info.node["children"],
          currentFolder: info.node["title"],
        }),
      });
    }
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return (
    <DirectoryTree
      Icon={HomeFilled}
      // checkable
      multiple
      showIcon
      //   defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
      style={{
        width: 300,
        background: "#F0F4FD",
        height: "100%",
        padding: "35px",
        borderRight: "1px solid grey",
      }}
    />
  );
};

export default withRouter(Leftpanel);
