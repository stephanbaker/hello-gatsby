import React from "react"

const Menu = ({ sections }) => {
  return (
    <ul>
      {sections && sections.length > 0 &&
        sections.map((section, sectionIndex) =>
          <li key={`section-${sectionIndex}`}>
            {section.title}
            <ul>
              {section.nodes && section.nodes.length > 0 &&
                section.nodes.map((node, nodeIndex) =>
                  <li key={`section-${sectionIndex}-node-${nodeIndex}`}>
                    <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
                  </li>
                )
              }
            </ul>
          </li>
        )
      }
    </ul>
  )
}

export default Menu
