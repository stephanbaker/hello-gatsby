import React from "react"

const Menu = ({ sections, sectionsOverride }) => {
  const getSections = (sections) => {
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

  if (!sectionsOverride || !Array.isArray(sectionsOverride)) {
    return getSections(sections)
  }

  const sectionMap = {}
  if (sections) {
    sections.forEach(section => {
      if (section.title && section.title.length > 0) {
        sectionMap[section.title] = section
      }
    });
  }

  const reordered = []
  sectionsOverride.forEach(sectionName => {
    const matched = sectionMap[sectionName]
    if (matched) {
      reordered.push(matched)
    }
  });

  return getSections(reordered);
}

export default Menu
