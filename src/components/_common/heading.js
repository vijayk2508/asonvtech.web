import React from 'react'
import styled from "styled-components";

function Heading(props) {
  const {
    title,
    backgroundColor,
    padding,
    className,
    style,
    title_style,
    heading_className,
  } = props

  const heading_style =
    Object.keys(style).length > 0
      ? props.style
      : { backgroundColor: backgroundColor, padding: padding }

  const FirstDivComponent = styled.div`${(props) => props.styleObj}`;

  return (
    <FirstDivComponent className={className} styleObj={heading_style}>
      <div className="container">
        <h1 className={heading_className} style={title_style}> {title}</h1>
      </div>
    </FirstDivComponent>
  )
}

Heading.defaultProps = {
  title: 'No Title',
  backgroundColor: '#f8f9fa !important',
  padding: '30px 0px 0px 0px',
  className: 'bg-light',
  style: {},
  heading_className: 'text-capitalize text-center',
  title_style: {}
}

export default Heading
