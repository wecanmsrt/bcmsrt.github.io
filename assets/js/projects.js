const projectDescriptions = [
  {
    name: "Home-Made PPE Initiative",
    location: "Vancouver, BC",
    status: "Active",
    description: "The Public Health Agency of Canada has allowed the use of non-medical face masks for the general public, especially in settings where social distancing can be difficult (eg. Grocery stores, public transit). To alleviate public demand for medical masks, this initiative aims to create and distribute home-made cloth face masks to vulnerable populations, who have additional socio-economic barriers preventing social distancing. There is also demand for face masks for non-medical support workers for these populations. We are currently working with local tailors/seamstresses, and have reached out to organizations who can donate fabric and materials.",
    studentRole: {
      description: "We are looking for enthusiastic students to fill several key leadership roles:",
      listItems: [
        "Communications Director (2 positions): advertise donation and distribution efforts",
        "Sponsorship Director (2 positions): obtain funding and donations for mask-building materials",
        "PPE Production Director (1 position): coordinate with tailors/seamstresses/volunteers to produce face\n" +
        "masks",
        "PPE Distribution Director (1 position): coordinate distribution of face masks to public",
        "We are also taking student volunteers interested in sewing and putting together masks!",
      ]
    },
    numStudents: "6 for above leadership roles, and 10+ volunteers for sewing and assembling masks.",
    restrictions: "None",
    notes: "Preference will be given to students with previous leadership, and public health experience. Experience working with vulnerable populations experience is an asset."
  },

  {
    name: "Social Media Communications and Campaigns",
    location: "Remote Friendly",
    status: "Active",
    description: "Synthesizing and managing content that is to be communicated through Twitter, Facebook, and Instagram accounts pertaining to the BC COVID-19 Medical Student Response team. Content will focus on highlighting various projects and identifying their current needs to attract community support and awareness. As well, reaching out to various news outlets to write about and promote projects that benefit from increased public awareness ex PPE donation. Currently we are recruiting for news media outreach and contact.",
    studentRole: "Actively communicating with the other project leads within BC COVID-19 Medical Student Response efforts to remain updated and understand their needs. Collaborate with those leads as well as team members to synthesize Social media posts which highlight the needs of projects and disseminate information as necessary (e.g. infographics or videos produced by the media team). Collaborate with classmates and other groups who have important messages to share related to COVID-19 and discuss these with the team for possible dissemination.",
    numStudents: "3 (2 more needed)",
    restrictions: "None",
    notes: "Preference will be given to those with previous communications roles or experience managing organizational social media accounts. Please indicate when applying if you have existing contacts working in news media as this would be helpful for specific positions!"
  },

  {
    name: "BCCH Healthy Minds Centre: Virtual Care Support",
    location: "Remote Friendly",
    status: "Active",
    description: "The Healthy Minds Centre at BCCH would like to expand telemedicine to support patients across the province. Currently BCCH tech support is overwhelmed and cannot assist with this opportunity.",
    studentRole: "To provide technical support for physicians using Powerchart and Zoom. Answer phone calls during scheduled times. Possible other roles could include the creation of FAQ documents and how to guides for these programs. Unpaid. Current plan is for one 4hour shift/week.",
    numStudents: "5 students",
    restrictions: "Years 3 and 4 only",
    notes: " Prior PowerChart experience required, experience with zoom beneficial"
  },

  {
    name: "COVID 3D Printing Rapid Needs Assessment, Validation, and Deployment Team",
    location: "Remote Friendly",
    status: "Active",
    description: "Assessment Team - Performs needs assessments for and effectiveness of HCP driven or literature driven 3D printed solutions - 2 students needed In this role, for which students should have experience with CAD and ideally, a 3D printer. Students would work with clinical associates and independently to identify 3D printed solutions in literature and from HCP requests, to develop prototypes of such requests, and to pass these solutions on to the production team on a cycle of 3-4 days. All work will be done at home. This opportunity is not paid.\n\nDeployment team - 2 students needed. Responsible for coordinating delivery of HCP requests for printed solutions that have been pre-verified with the leadership team or with the Assessment team. Ideally, students will have leadership experience working between several organisations to provide final deliverables such as an event or a product. Will work with supply chain of 3D printers available to ensure timely delivery of solutions with good quality and good infection control. Guidance is provided during initial days on opportunity, and all work will be done at home. This opportunity is not paid.",
    studentRole: "See above.",
    numStudents: "2 students for each team (4 total).",
    restrictions: "None",
    notes: "Expected time commitment - Maximum 20hrs/wk."
  },
]


// do not change below
function projectHtml(project) {
  const projElem = document.createElement("div")
  projElem.classList += "project"
  const projTableContentElem = document.createElement("div")
  projTableContentElem.classList += "project-table-content"
  const projTableColsElem = document.createElement("div")
  projTableColsElem.classList += "project-table-cols"

  const colNames = ["name", "location", "status"]
  colNames.forEach(
    (colName, idx) => {
      const projTableColElem = document.createElement("div")
      projTableColElem.classList += `pt-col-${idx+1}`
      const projTableSubHeaderElem = document.createElement("div")
      projTableSubHeaderElem.classList += "pt-col-sub-header"
      const projTableSubHeaderTitleElem = document.createElement("h1")
      projTableSubHeaderTitleElem.innerText = project[colName]

      projTableSubHeaderElem.appendChild(projTableSubHeaderTitleElem)
      projTableColElem.appendChild(projTableSubHeaderElem)
      projTableColsElem.appendChild(projTableColElem)
    }
  )


  const projectInfoElem = document.createElement("div")
  projectInfoElem.classList += "project-info"

  const sections = [
    ["Description:", project.description],
    ["Student Role:", project.studentRole],
    ["Number of Students:", project.numStudents],
    ["Restrictions:", project.restrictions],
    ["Notes:", project.notes],
  ]

  sections.forEach(section => {
    const sectionElem = document.createElement("section")

    const sectionTitleElem = document.createElement("h1")
    sectionTitleElem.innerText = section[0]
    sectionElem.appendChild(sectionTitleElem)

    let sectionContentElem
    if (typeof section[1] === 'string' || section[1] instanceof String) {
      sectionContentElem = document.createElement("p")
      sectionContentElem.innerText = section[1]
    } else {
      sectionContentElem = document.createElement("div")
      const sectionContentDescriptionElem = document.createElement("p")
      sectionContentDescriptionElem.innerText = section[1].description

      const sectionContentListElem = document.createElement("ul")
      section[1].listItems.forEach(item => {
        const listElem = document.createElement("li")
        listElem.innerHTML = item
        sectionContentListElem.appendChild(listElem)
      })

      sectionContentElem.appendChild(sectionContentDescriptionElem)
      sectionContentElem.appendChild(sectionContentListElem)
    }
    sectionElem.appendChild(sectionContentElem)

    projectInfoElem.appendChild(sectionElem)
  })

  projElem.appendChild(projTableContentElem)
  projTableContentElem.appendChild(projTableColsElem)
  projTableContentElem.appendChild(projectInfoElem)
  return projElem
}

const projectTableContentElem = document.getElementById("projects-table-content")
projectDescriptions.forEach(project => projectTableContentElem.appendChild(projectHtml(project)))