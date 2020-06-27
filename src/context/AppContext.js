import React, { createContext, useReducer } from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import remove from 'lodash/remove';
import branchList from '../components/LeftSidebar/tabs/branch.json'
import stacksList from '../components/LeftSidebar/tabs/stacks.json'
import educationList from '../components/LeftSidebar/tabs/eduction.json';
import months from '../components/LeftSidebar/tabs/months.json';

import demoData from '../assets/demo/data.json';
import { move } from '../utils';

//modified state
const initialState = {
  data: {
    profile: {
      heading: 'Profile',
      photo: '',
      // firstName: 'FirstName',
      firstName: {
        name: 'FirstName',
        error: ''
      },
      lastName: {
        name: 'LastName',
        error: ''
      },
      subtitle: stacksList[0].value,
      branch: {
        heading: "Branch",
        enable:true,
        items:branchList[0].value,
      },
      email: '',
      education:educationList[0].value,
      relexp: {
        name: '',
        error: ''
      },
      relmonths:months[0].value,
      tolexp: {
        name: '',
        error: ''
      },
      tolmonths:months[0].value,
      address: {
        line1: '',
        line2: '',
        line3: '',
      },
      phone: '',
      website: '',

    },
    objective: {
        enable: true,
        heading: 'Summary',
        items: [],
    },
    work: {
      enable: true,
      heading: 'Project Details',
      items: [
        {
           enable: true,
            title: 'Eletter',
           summary:'',
          responsibility: '',
          projectskill: {
            frontend: {
              enable: true,
              heading: 'Front End Technologies',
              items: "",
            },
            backend: {
              enable: true,
              heading: 'Back End Technologies',
              items: ""
            },
            designpatterns: {
              enable: true,
              heading: 'Design Patterns used',
              items: ""
            },
            rdbsapp: {
              enable: true,
              heading: 'RDBMS Application',
              items: "Oracle 10g and MySQL 5.5",
            },
            tools: {
              enable: true,
              heading: 'Tools Used',
              items: "Apache Tomcat 8.0",
            },
            duration: {
              enable: true,
              heading: 'Duration',
              endDateEnable: true,
              endDateValue:'till now',
              items: {
                start: '',
                end: '',
              }
            },
            teamsize: {
              enable: true,
              heading: 'Team Size',
              items: "",
            },
          },
          summary:{
            heading:"Summary",
            items:[]
          },
         responsibility:{
          heading:"Responsibility",
          items:['aaa','bbbbbbb']
        },
        }],
    },
    education: {
      enable: false,
      heading: 'Education',
      items: [],
    },

    certifications: {
      enable: true,
      heading: 'Certifications',
      items: [],
    },
    skills: {
      enable: true,
      heading: 'Technical Skills',
      items: ['bbb', 'bbbbbbb'],
      technology: {
        enable: true,
        heading: 'Technology',
        items: ['aaaaa', 'a11111111'],
      },

      languages: {
        enable: true,
        heading: 'Languages',
        items: []
      }

    },
    skills1: {
      heading: "Technical Skills",
      languages: {
        enable: true,
        heading: 'Languages',
        items: ['Java 1.8', 'SQL', 'HTML', 'XML (Basics)', 'CSS with Bootstrap', 'JavaScript, TypeScript']
      },
      technology: {
        enable: true,
        heading: 'J2EE Technologies',
        items: ['Servlet', 'JSP and JDBC'],
      },
      frontend: {
        enable: true,
        heading: 'Frameworks - Front End',
        items: ['Angular 7'],
      },
      backend: {
        enable: true,
        heading: 'Frameworks- Back End',
        items: ['Hibernate with JPA', 'Spring 5.0 (Core/IoC, MVC, DAO, REST, Boot)', 'Project Lombok', 'Log4J']
      },
      designpatterns: {
        enable: true,
        heading: 'Design Patterns',
        items: ['Singleton', 'Model View Controller (MVC)', 'Data Transfer Object (DTO)', 'Data Access Object (DAO) and Factory Pattern'],
      },
      rdbsapp: {
        enable: true,
        heading: 'RDBS Applications',
        items: ['Oracle 10g and MySQL 5.5'],
      },
      webservers: {
        enable: true,
        heading: 'Web Servers',
        items: ['Apache Tomcat 8.0'],
      },
      aws: {
        enable: true,
        heading: 'AWS',
        items: ['EC2', 'EBS', 'RDS'],
      },
      cdtools: {
        enable: true,
        heading: 'Code Quality Tools',
        items: ['SonarLint', 'Sonar Scanner', 'SonarQube & Crucible'],
      },
      vcsystem: {
        enable: true,
        heading: 'Version Control System',
        items: ['Git with GitHub as well as BitBucket'],
      },
      batool: {
        enable: true,
        heading: 'Build Automation Tool',
        items: ['Maven'],
      },
      cicdtool: {
        enable: true,
        heading: 'CI/CD Tool',
        items: ['Jenkins'],
      },
      othertools: {
        enable: true,
        heading: 'Other Tools',
        items: ['Tortise Git', 'Eclipse', 'STS', 'Fiddler', 'SQL Plus', 'MySQL Workbench', 'MS Office (Word, Excel & Power Point)'],
      },
      sdlc: {
        enable: true,
        heading: 'Software Development Processes (SDLC)',
        items: ['Waterfall Model and Agile'],
      },
    },
    projectskill: {
      frontend: {
        enable: true,
        heading: 'Front End Technologies',
        items: ['Angular 7'],
      },
      backend: {
        enable: true,
        heading: 'Back End Technologies',
        items: ['Hibernate with JPA', 'Spring 5.0 (Core/IoC, MVC, DAO, REST, Boot)', 'Project Lombok', 'Log4J']
      },
      designpatterns: {
        enable: true,
        heading: 'Design Patterns used',
        items: ['Singleton', 'Model View Controller (MVC)', 'Data Transfer Object (DTO)', 'Data Access Object (DAO) and Factory Pattern'],
      },
      rdbsapp: {
        enable: true,
        heading: 'RDBMS Application',
        items: ['Oracle 10g and MySQL 5.5'],
      },
      tools: {
        enable: true,
        heading: 'Tools Used',
        items: ['Apache Tomcat 8.0'],
      },
      duration: {
        enable: true,
        heading: 'Duration',
       
        items: ['EC2', 'EBS', 'RDS'],
      },
      teamsize: {
        enable: true,
        heading: 'Team Size',
        items: ['SonarLint', 'Sonar Scanner', 'SonarQube & Crucible'],
      },
     

    },
    awards: {
      enable: true,
      heading: 'Achievements',
      items: [],
    },
   
    projsummary:
    {
      heading: 'Project Summary',
      items: [
        {
          buttonVal:"text",
          description:"bbbbb"
        }
      ],
    },
    projresp:
    {
      heading: 'Project Responsibilities',
      items: [],
    },
    
    hobbies: {
      enable: true,
      heading: 'Hobbies',
      items: [],
    },
    languages: {
      enable: true,
      heading: 'Languages',
      items: [],
    },
    references: {
      enable: true,
      heading: 'References',
      items: [],
    },
    extras: {
      enable: true,
      heading: 'Personal Information',
      items: [],
    },
  },
  theme: {
    layout: 'Onyx',
    font: {
      family: '',
    },
    colors: {
      background: '#ffffff',
      primary: '#212121',
      accent: '#f44336',
    },
  },
  settings: {
    language: 'en',
  },
};

const reducer = (state, { type, payload }) => {
  let items;

  switch (type) {
    case 'migrate_section':
      return set({ ...state }, `data.${payload.key}`, payload.value);
    case 'add_item':
      items = get({ ...state }, `data.${payload.key}.items`, []);
      items.push(payload.value);
      return set({ ...state }, `data.${payload.key}.items`, items);
    case 'delete_item':
      items = get({ ...state }, `data.${payload.key}.items`, []);
      remove(items, x => x === payload.value);
      return set({ ...state }, `data.${payload.key}.items`, items);
      case 'delete_item1':
        items = get({ ...state }, `data.${payload.key}.items`, []);
        remove(items, x => x.description  === payload.value);
        return set({ ...state }, `data.${payload.key}.items`, items);
    case 'move_item_up':
      items = get({ ...state }, `data.${payload.key}.items`, []);
      move(items, payload.value, -1);
      return set({ ...state }, `data.${payload.key}.items`, items);
    case 'move_item_down':
      items = get({ ...state }, `data.${payload.key}.items`, []);
      move(items, payload.value, 1);
      return set({ ...state }, `data.${payload.key}.items`, items);
    case 'on_input':
      return set({ ...state }, payload.key, payload.value);
      case 'on_error':
      return set({ ...state }, payload.key, payload.value);
    case 'save_data':
      localStorage.setItem('state', JSON.stringify(state));
      return state;
    case 'import_data':
      if (payload === null) return initialState;

      for (const section of Object.keys(initialState.data)) {
        if (!(section in payload.data)) {
          payload.data[section] = initialState.data[section];
        }
      }

      return {
        ...state,
        ...payload,
      };
    case 'load_demo_data':
      return {
        ...state,
        ...demoData,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const AppContext = createContext(initialState);
const { Provider } = AppContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const AppProvider = StateProvider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
