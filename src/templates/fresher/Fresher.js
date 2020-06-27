import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import AppContext from '../../context/AppContext';
import Logo from '../../assets/images/testyantra-logo.png';
import './Fresher.css';

const Fresher = () => {
  const context = useContext(AppContext);
  const { state } = context;
  const { data, theme } = state;

  // const Photo = () =>
  //   data.profile.photo !== '' && (
  //     <div className="mt-5 ml-5">
  //       <img
  //         className="w-32 h-32 rounded-full"
  //         style={{
  //           borderWidth: 6,
  //           borderColor: theme.colors.background,
  //         }}
  //         src={data.profile.photo}
  //         alt="Profile Photograph"
  //       />
  //     </div>
  //   );

  const PersonalInformation = () => (
    <div className="">
      <h1 className="text-3xl text-capitalize font-bold text-color">
        {data.profile.firstName} {data.profile.lastName}
      </h1>
      {/*   <h1 className="text-3xl text-capitalize font-bold text-color">
      FirstName LastName
      </h1> */}

      <h2 className="text-2xl text-capitalize font-bold text-orange">{data.profile.education}  ({data.profile.branch})</h2>
      <h2 className="text-2xl text-capitalize font-bold text-color">Total Exp.:  {data.profile.tolexp}</h2>
      <h2 className="text-2xl text-capitalize font-bold text-color">Relevant Exp.:  {data.profile.relexp}</h2>


    </div>
  );

  const Heading = ({ title, light = false }) => (
    <div
      className={`heading my-4 ${light ? 'mx-5 border-t border-b border-gray-400' : ''}`}
      style={{ backgroundColor: light ? '' : '#1f497d' }}
    >
      <h6 className={`${light ? '' : 'pl-1'} font-semibold`}>{title}</h6>
    </div>
  );


  const ObjectiveItem = x => (
    <div key={x.id} className="my-3 mx-2">
      <ul className="" style={{ paddingLeft: '20px' }}>
        <li style={{ paddingLeft: '10px', listStyleType: 'square' }}>{x.description}</li>
      </ul>

    </div>
  );

  const Objective = () =>
    data.objective &&
    data.objective.enable && (
      <div>
        <Heading title={data.objective.heading} />
        {data.objective.items.filter(x => x.enable).map(ObjectiveItem)}

      </div>
    );


  const SkillItem = x => (
    <li key={x} className="text-sm my-2">
      {x}
    </li>
  );

  const Skills = () =>
    data.skills &&
    data.skills.enable && (
      <div>
        <Heading title={data.skills.heading} />
        <ul className="list-none px-5">{data.skills.items.map(SkillItem)}</ul>
        <div className="skill">
          <div className="left-col">Languages</div>
          <div className="right-col">Java 1.8, SQL, HTML, XML (Basics), CSS with Bootstrap, JavaScript, TypeScript</div>
        </div>
      </div>
    );

  const Skills1 = () => {

    const skillSet = [];
    for (const key in data.skills1) {
      skillSet.push(key)
    }
    return (
      <>


        <div>
          <Heading title={data.skills1.heading} />
          {
            skillSet.map((val) => {
              switch (val) {
                case "languages": return (<>
                  {data.skills1.languages.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.languages.heading}</div>
                    <div className="right-col">
                      {data.skills1.languages.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "technology": return (<>
                  {data.skills1.technology.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.technology.heading}</div>
                    <div className="right-col">
                      {data.skills1.technology.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "frontend": return (<>
                  {data.skills1.frontend.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.frontend.heading}</div>
                    <div className="right-col">
                      {data.skills1.frontend.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "backend": return (<>
                  {data.skills1.backend.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.backend.heading}</div>
                    <div className="right-col">
                      {data.skills1.backend.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "designpatterns": return (<>
                  {data.skills1.designpatterns.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.designpatterns.heading}</div>
                    <div className="right-col">
                      {data.skills1.designpatterns.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "rdbsapp": return (<>
                  {data.skills1.rdbsapp.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.rdbsapp.heading}</div>
                    <div className="right-col">
                      {data.skills1.rdbsapp.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "webservers": return (<>
                  {data.skills1.webservers.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.webservers.heading}</div>
                    <div className="right-col">
                      {data.skills1.webservers.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "aws": return (<>
                  {data.skills1.aws.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.aws.heading}</div>
                    <div className="right-col">
                      {data.skills1.aws.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "cdtools": return (<>
                  {data.skills1.cdtools.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.cdtools.heading}</div>
                    <div className="right-col">
                      {data.skills1.cdtools.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "vcsystem": return (<>
                  {data.skills1.vcsystem.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.vcsystem.heading}</div>
                    <div className="right-col">
                      {data.skills1.vcsystem.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "batool": return (<>
                  {data.skills1.batool.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.batool.heading}</div>
                    <div className="right-col">
                      {data.skills1.batool.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "cicdtool": return (<>
                  {data.skills1.cicdtool.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.cicdtool.heading}</div>
                    <div className="right-col">
                      {data.skills1.cicdtool.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "othertools": return (<>
                  {data.skills1.othertools.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.othertools.heading}</div>
                    <div className="right-col">
                      {data.skills1.othertools.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)
                case "sdlc": return (<>
                  {data.skills1.sdlc.enable ? <div className="skill">
                    <div className="left-col">{data.skills1.sdlc.heading}</div>
                    <div className="right-col">
                      {data.skills1.sdlc.items.map((val, key) => (key == 0) ? val : <>, {val}</>)}
                    </div>
                  </div> : null}
                </>)


                default:
                  break;
              }


            })
          }

        </div>
      </>
    )
  }

  const EducationItem = x => (
    <>
      <tr key={x.id}>
        <td>{x.title}- {x.name}</td>
        <td>{x.university}</td>
        <td>{x.year}</td>
        <td>{x.percentage}</td>
      </tr>

    </>
  );

  const Education = () =>
    data.education &&
    data.education.enable && (
      <div>
        <Heading title={data.education.heading} />

        <table className="edu-table">
          <tr>
            <th>College Name</th>
            <th>University</th>
            <th>Year</th>
            <th>Percentage</th>
          </tr>
          {data.education.items.filter(x => x.enable).map(EducationItem)}




        </table>


      </div>
    );


  const AwardItem = x => (
    <div key={x.id} className="my-3 mx-2">
      <ul style={{ paddingLeft: '20px' }}>
        <li style={{ paddingLeft: '10px', listStyleType: 'square' }}>{x.description}</li>
      </ul>

      {/* <ReactMarkdown className="mt-2 text-sm" source={x.description} /> */}
    </div>
  );

  const Awards = () =>
    data.awards &&
    data.awards.enable && (
      <div>
        <Heading title={data.awards.heading} />
        {data.awards.items.filter(x => x.enable).map(AwardItem)}

      </div>
    );

  const WorkItem = x => (

    <div key={x.id} className="my-3 px-5">
      <h3 className="project-headings pb-2">I.  {x.title}</h3>
      <table className="">
        <tbody>
          {x.projectskill.frontend.enable ? <tr>
            <td className="col-one">{x.projectskill.frontend.heading} </td>
            <td className="col-two">{x.projectskill.frontend.items}</td>
          </tr> : null}
          {x.projectskill.backend.enable ? <tr>
            <td className="col-one">{x.projectskill.backend.heading} </td>
            <td className="col-two">{x.projectskill.backend.items}</td>
          </tr> : null}
          {x.projectskill.designpatterns.enable ? <tr>
            <td className="col-one">{x.projectskill.designpatterns.heading} </td>
            <td className="col-two">{x.projectskill.designpatterns.items}</td>
          </tr> : null}
          {x.projectskill.rdbsapp.enable ? <tr>
            <td className="col-one">{x.projectskill.rdbsapp.heading} </td>
            <td className="col-two">{x.projectskill.rdbsapp.items}</td>
          </tr> : null}
          {x.projectskill.tools.enable ? <tr>
            <td className="col-one">{x.projectskill.tools.heading} </td>
            <td className="col-two">{x.projectskill.tools.items} </td>
          </tr> : null}
          {x.projectskill.duration.enable ? <tr>
            <td className="col-one">{x.projectskill.duration.heading} </td>
            <td className="col-two">{x.projectskill.duration.items.start} to {x.projectskill.duration.items.end}</td>
          </tr> : null}
          {x.projectskill.teamsize.enable ? <tr>
            <td className="col-one">{x.projectskill.teamsize.heading} </td>
            <td className="col-two">{x.projectskill.teamsize.items} </td>
          </tr> : null}
        </tbody>
      </table>
          <h3 className="project-headings pb-1 pt-3">{x.summary.heading}:</h3>
      <ul /* style={{ paddingLeft: '20px' }} */>
        {x.summary.items.map((val, index) => {
          return (
            <>
              {(val.toString().startsWith("-")) ?
                <ul style={{ paddingLeft: '20px' }}>
                  <li key={index+val} style={{ paddingLeft: '10px', listStyleType: 'square' }}>
                    {val.toString().replace("-", " ")}
                  </li>
                </ul>
                :<>{val}<br/></>}
            </>
          )
        })}
      </ul>
  
      <h3 className="project-headings pb-1 pt-3">{x.responsibility.heading}</h3>
 
      <p>{x.responsibility.description}</p>

      <ul style={{ paddingLeft: '20px' }}>
        {x.responsibility.items.map((val, key) => {
          return (
            <li key={val} style={{ paddingLeft: '10px', listStyleType: 'square' }}>{val}</li>
          )
        })}
      </ul>

     

    {/*   <ReactMarkdown className="mt-2 text-sm" source={x.responsibility} /> */}
    </div>
  );



  const Work = () =>
    data.work &&
    data.work.enable && (
      <div>
        <Heading title={data.work.heading} />
        {data.work.items.filter(x => x.enable).map(WorkItem)}

      </div>
    );



  return (
    <div
      style={{
        fontFamily: theme.font.family,
        backgroundColor: theme.colors.background,
        color: theme.colors.primary,
      }}
    >
      <div className=" grid-cols-12">
        <div className="header">
          <div className="column">
            <PersonalInformation />
          </div>
          <div className="column">
            <img src={Logo} alt="logo" />
          </div>

        </div>
        <div className="mx-4">
          <Objective />
          <Skills1 />
          <Education />
          <Awards />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Fresher;
