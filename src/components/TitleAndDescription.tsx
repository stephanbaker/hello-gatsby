import React from "react"
import { string } from "prop-types";

interface TitleAndDescriptionProps {
  data: {
    site: {
      siteMetadata: {
        title: string,
        description: string
      }
    }
  }
}

export default class TitleAndDescription extends React.Component<TitleAndDescriptionProps, {}> {
  render = () => {
    return (
      <div>
        <h2>{this.props.data.site.siteMetadata.title}</h2>
        <p>{this.props.data.site.siteMetadata.description}</p>
      </div>
    )
  }
}
