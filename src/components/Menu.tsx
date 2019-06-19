import React from "react"

interface Node {
  frontmatter: {
    title: string,
    path: string
  }
}
interface Section {
  title: string,
  nodes: Node[]
}

interface MenuProps {
  sections: Section[],
  sectionsOverride: string[]
}


export default class Menu extends React.Component<MenuProps, {}> {
  getSections = (sections: Section[]) => {
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

  render = () => {
    if (!this.props.sectionsOverride || !Array.isArray(this.props.sectionsOverride)) {
      return this.getSections(this.props.sections)
    }

    const sectionMap = {}
    if (this.props.sections) {
      this.props.sections.forEach(section => {
        if (section.title && section.title.length > 0) {
          sectionMap[section.title] = section
        }
      });
    }

    const reordered = []
    this.props.sectionsOverride.forEach(sectionName => {
      const matched = sectionMap[sectionName]
      if (matched) {
        reordered.push(matched)
      }
    });

    return this.getSections(reordered);
  }
}
