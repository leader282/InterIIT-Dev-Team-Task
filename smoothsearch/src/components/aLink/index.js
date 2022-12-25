import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const LinkContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
  overflow-x: hidden;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

export function ALink(props) {
  const { name, query } = props;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const itemStyle = {
    backgroundColor: isHover ? "rgba(0, 0, 0, 0.3)" : "transparent",
    textDecoration: 'none',
    borderRadius: 10,

  };

  const nameStyle = {
    color: isHover ? "white" : "#000"
  };

  const reg = new RegExp(query, 'i')

  const newWord = '<p>' + name.replace(reg, '<mark>$&</mark>') + '</p>'

  return (
    <a href={name} target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={itemStyle}>
    <LinkContainer>
      <Name style={nameStyle}>
        {ReactHtmlParser(newWord)}
      </Name>
    </LinkContainer>
    </a>
  );
}