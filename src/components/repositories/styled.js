import styled from "styled-components";
import { Tabs,TabList,Tab,TabPanel } from "react-tabs";


export const WrapperTabs = styled(Tabs)`
font-size:16px;
width:50%
`;
export const WrapperTabList = styled(TabList)`
list-style-type:none;
padding:4px;
display:flex;
margin:0;
`;

WrapperTabList.tabRole = "TabList";
export const WrapperTab = styled(Tab)`
border-radius:16px;
border:1px solid #ccc;
padding:16px;
user-select:none;
cursor:pointer;
z-index:999999;
background-color:"#fff";
margin:8px;
&:focus{
    outline:none;
    box-shadow: 0 0 1em #ccc;
}
&.is-selected{
    box-shadow: 0.2em 0.4em 0.4em rgba(0,0,0,0.3);

}
`;

WrapperTabList.tabRole="Tab";
export const WrapperTabPanel = styled(TabPanel)`
display:none;
min-height:40vh;
padding:16px;
border: 1px solid "#ccc";
box-shadow: 0 0 0.4em rgba(0,0,0,0.3);
&.is-selected{
    display:block;
}
`;

WrapperTabList.tabRole="TabPanel";


