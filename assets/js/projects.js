const currentProjects = [
  {
    name: "BCCH Healthy Minds Centre: Virtual Care Support",
    location: "Remote Friendly",
    description: "The Healthy Minds Centre at BCCH would like to expand telemedicine to support patients across the province. Currently BCCH tech support is overwhelmed and cannot assist with this opportunity.",
    studentRole: "To provide technical support for physicians using Powerchart and Zoom. Answer phone calls during scheduled times. Possible other roles could include the creation of FAQ documents and how to guides for these programs. Unpaid. Current plan is for one 4hour shift/week.",
    numStudents: "5 students",
    restrictions: "Years 3 and 4 only",
    notes: " Prior PowerChart experience required, experience with zoom beneficial"
  },

  {
    name: "Social Media Communications and Campaigns",
    location: "Remote Friendly",
    description: "Synthesizing and managing content that is to be communicated through Twitter, Facebook, and Instagram accounts pertaining to the BC COVID-19 Medical Student Response team. Content will focus on highlighting various projects and identifying their current needs to attract community support and awareness. As well, reaching out to various news outlets to write about and promote projects that benefit from increased public awareness ex PPE donation. Currently we are recruiting for news media outreach and contact.",
    studentRole: "Actively communicating with the other project leads within BC COVID-19 Medical Student Response efforts to remain updated and understand their needs. Collaborate with those leads as well as team members to synthesize Social media posts which highlight the needs of projects and disseminate information as necessary (e.g. infographics or videos produced by the media team). Collaborate with classmates and other groups who have important messages to share related to COVID-19 and discuss these with the team for possible dissemination.",
    numStudents: "3 (2 more needed)",
    restrictions: "None",
    notes: "Preference will be given to those with previous communications roles or experience managing organizational social media accounts. Please indicate when applying if you have existing contacts working in news media as this would be helpful for specific positions!"
  },

  {
    name: "Home-Made PPE Initiative",
    location: "Vancouver, BC",
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
    name: "COVID 3D Printing Rapid Needs Assessment, Validation, and Deployment Team",
    location: "Remote Friendly",
    description: "Assessment Team - Performs needs assessments for and effectiveness of HCP driven or literature driven 3D printed solutions - 2 students needed In this role, for which students should have experience with CAD and ideally, a 3D printer. Students would work with clinical associates and independently to identify 3D printed solutions in literature and from HCP requests, to develop prototypes of such requests, and to pass these solutions on to the production team on a cycle of 3-4 days. All work will be done at home. This opportunity is not paid.\n\nDeployment team - 2 students needed. Responsible for coordinating delivery of HCP requests for printed solutions that have been pre-verified with the leadership team or with the Assessment team. Ideally, students will have leadership experience working between several organisations to provide final deliverables such as an event or a product. Will work with supply chain of 3D printers available to ensure timely delivery of solutions with good quality and good infection control. Guidance is provided during initial days on opportunity, and all work will be done at home. This opportunity is not paid.",
    studentRole: "See above.",
    numStudents: "2 students for each team (4 total).",
    restrictions: "None",
    notes: "Expected time commitment - Maximum 20hrs/wk."
  },

  {
    name: "BCCDC Tuberculosis (TB) Services Administrative Support",
    location: "655 W. 12th Avenue, Vancouver BC",
    description: "TB Services has taken on additional workload with respect to COVID and TB care. Unfortunately, this creates an additional administrative workload at a time where we are already stretched thin. Additional resources to help keep us above water are appreciated.",
    studentRole: "TB Clinic administrative support in terms of entry of client data/results into our Electronic Medical Record (EMR).",
    numStudents: "2-3",
    restrictions: "Year 3 or 4 preferred.",
    notes: "Contact: William Turner, BCCDC, William.Turner@bccdc.ca, (604) 619-1433. Unpaid."
  },
]

const futureProjects = [
  {
    name: "Prescription Delivery",
    location: "Lower Mainland, BC",
    description: "Seniors and immunocompromised patients are at significant risk for COVID-19 related complications and have increased non-urgent prescription medication needs (ie. prescription refills). Visiting pharmacies to pick up medications may pose a risk to the health of seniors and immunocompromised patients. Family physicians who are familiar with their patients’ medical and social circumstances will enroll patients in the program and medical students will pick up these patients prescription medications and deliver it to their doorstep.",
    studentRole: "Pick up prescription meds from pharmacy and deliver to patient doorstep.",
    numStudents: "TBD, estimate of 10",
    restrictions: "TBD",
    notes: "Currently recruiting physicians and determining feasibility."
  },
]

const sustainingProjects = [
  {
    name: "811 Call Centre",
    location: "Langley & Burnaby call centres, BC",
    description: "811 is a phone-based service through which residents of BC can get in touch with allied health services to make inquiries about health concerns or navigating the healthcare system. In the wake of COVID-19, emergency departments are high-risk locations for spread, and 811 has become crucial for individuals to ask trained health professionals about their symptoms before deciding whether to present to hospital. As a result, 811 phone lines have become saturated, with waits as long as 2-6 hours.",
    studentRole: "Medical students have been helping to staff the phone lines at 811 call centres. The medical student role is NON-CLINICAL, helping to route calls to the correct service and deciding which patients need to speak with a nurse. More details in “notes”.",
    numStudents: "70 students at present. We are currently at capacity, but there may be room for more students in the future if HealthLinkBC opens up more positions or if attrition of current workers occurs.",
    restrictions: "None",
    notes: "Pay rate at $23.79/hr."
  },
  {
    name: "Fraser Health Employee Contact Tracing",
    location: "Fraser Health Offices, Surrey, BC",
    description: "As the number of COVID-19 cases grow, more and more healthcare workers are being exposed to the virus, both from patients who test positive and from their colleagues who are contracting the virus in the community. Students are joining response teams within Workplace Health at Fraser Health to call and notify frontline healthcare workers across the province of their exposure to the virus and then providing advice on next steps, PPE use, and testing if necessary. This role evolves daily as new exposures continue to occur. As the role evolves, students may transition into additional roles either doing data entry of positive test results, triaging new cases, and/or responding to voicemails on the COVID-19 call line for Fraser Health. The position is paid and hours range from 20-36 hours/week.",
    studentRole: "Medical students have been helping to staff the phone lines at 811 call centres. The medical student role is NON-CLINICAL, helping to route calls to the correct service and deciding which patients need to speak with a nurse. More details in “notes”.",
    numStudents: "25 (may require more in the future but currently at capacity).",
    restrictions: "Year 3 or 4 only.",
    notes: "Pay rate $23.79/hr."
  },
  {
    name: "Vancouver Coastal Health - Employee Test Result Calling",
    location: "601 W Broadway, Vancouver, BC",
    description: "With the rapid scale-up in healthcare practitioner testing for COVID-19, student volunteers are needed to communicate these results to HCPs in a timely and consistent manner. This helps streamline return-to-work and alleviates an administrative burden from HCPs who are needed elsewhere.",
    studentRole: "Work with a spreadsheet listing all healthcare practitioners who were tested for COVID-19 across Vancouver Coastal Health testing sites the previous day. Look up HCP test results in CareConnect and contact HCPs who tested negative to inform them of their results. Liaise with Occupational Health Nursing to close the loop on communication.",
    numStudents: "Currently at capacity with 10 Year 3 and 4 volunteers.",
    restrictions: "Year 3 or 4 only, CareConnect training required.",
    notes: "Currently covering VGH, VCH community testing, RH, and some rural sites. Some sites may transition to texting. Expect student role to evolve over time. "
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

  const colNames = ["name", "location"]
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

const currentProjectsElem = document.getElementById("current-projects-content")
currentProjects.forEach(project => currentProjectsElem.appendChild(projectHtml(project)))

const futureProjectsElem = document.getElementById("future-projects-content")
futureProjects.forEach(project => futureProjectsElem.appendChild(projectHtml(project)))

const sustainingProjectsElem = document.getElementById("sustaining-projects-content")
sustainingProjects.forEach(project => sustainingProjectsElem.appendChild(projectHtml(project)))