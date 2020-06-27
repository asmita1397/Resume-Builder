import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import AppContext from '../../context/AppContext';
import Logo from '../../assets/images/testyantra-logo.png';
import './Fresher.css';
import $ from 'jquery'
const Onyx = () => {
  const context = useContext(AppContext);
  const { state } = context;
  const { data, theme } = state;


  const PersonalInformation = () => {
    const tolexperience = data.profile.tolexp.name.split(".");
    const relexperience = data.profile.relexp.name.split(".");
    return (
      <div className="">
        <h1 className="text-3xl text-capitalize font-bold text-color">
          {data.profile.firstName.name} {data.profile.lastName.name}
        </h1>


        <h2 className="text-2xl text-capitalize font-bold text-orange">{data.profile.education} {data.profile.branch.enable ? `(${data.profile.branch.items})` : ''}</h2>

        <h2 className="text-2xl text-capitalize font-bold text-color">
          Total Exp.:  {tolexperience[0] ? tolexperience[0] == 0 ?
            null : tolexperience[0] == 1 ? `${tolexperience[0]} Year` : `${tolexperience[0]} Years` : null} <span></span>
          {data.profile.tolmonths[0] ? data.profile.tolmonths[0] == 0 ?
            null : data.profile.tolmonths == 1 ? `${data.profile.tolmonths[0]} Month` : `${data.profile.tolmonths} Months` : null}


        </h2>
        <h2 className="text-2xl text-capitalize font-bold text-color">
          Relevant Exp.:  {relexperience[0] ? relexperience[0] == 0 ?
            null : relexperience[0] == 1 ? `${relexperience[0]} Year` : `${relexperience[0]} Years` : null} <span></span>
          {data.profile.relmonths[0] ? data.profile.relmonths[0] == 0 ?
            null : data.profile.relmonths == 1 ? `${data.profile.relmonths[0]} Month` : `${data.profile.relmonths} Months` : null}
        </h2>


      </div>
    )
  }

  const Heading = ({ title, light = false }) => (
    <div
      className={`heading my-4 ${light ? 'mx-5 border-t border-b border-gray-400' : ''}`}
      style={{ backgroundColor: light ? '' : '#1f497d' }}
    >
      <h6 className={`${light ? '' : 'pl-1'} font-semibold`}>{title}</h6>
    </div>
  );


  const ObjectiveItem = x => (
    <>
      <li key={x} style={{ paddingLeft: '10px', listStyleType: 'square' }} >{x}</li>
    </>
  );

  const Objective = () =>
    data.objective &&
    data.objective.enable && (


      data.objective.items.length ? <div>
        {console.log("data.objective.items.", data.objective.items.length)}
        <Heading title={data.objective.heading} />
        <ul className="" style={{ paddingLeft: '20px' }}> {data.objective.items.map(ObjectiveItem)}</ul>
      </div> : null

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
        <td style={{ textAlign: "center" }}>{x.title}- {x.name}</td>
        <td style={{ textAlign: "center" }}>{x.university}</td>
        <td style={{ textAlign: "center" }}>{x.year}</td>
        <td style={{ textAlign: "center" }}>{x.percentage}%</td>
      </tr>

    </>
  );

  const Education = () =>
    data.education &&
    data.education.enable && (
      data.education.items.length?
      <div>

        <Heading title={data.education.heading} />
        <div className="mx-3">
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
      </div>:null
    );


  const AwardItem = x => (
    <>
      <li key={x} style={{ paddingLeft: '10px', listStyleType: 'square' }} >{x}</li>
    </>
  );

  const Awards = () =>
    data.awards &&
    data.awards.enable && (
      <div>
        <Heading title={data.awards.heading} />
        <ul className="" style={{ paddingLeft: '20px' }}> {data.awards.items.map(ObjectiveItem)}</ul>
      </div>
    );


  const WorkItem = (x, key) => {

    const monthlist = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const startDuration = x.projectskill.duration.items.start.split("-")
    const startMonthName = monthlist.filter((val, index) => index == startDuration[1])
    const endDuration = x.projectskill.duration.items.end.split("-")
    const endMonthName = monthlist.filter((val, index) => index == endDuration[1])


    return (
      <div key={x.id} className="my-3 px-5">
        <ol style={{ listStyleType: "upper-roman" }}>
          <li value={`${key + 1}`}> <h3 className="project-headings pb-2"> {x.title}</h3></li>
        </ol>




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
              <td className="col-two">{startMonthName} {startDuration[0]} to   {x.projectskill.duration.endDateEnable ? x.projectskill.duration.endDateValue : <>{`${endMonthName} ${endDuration[0]}`}</>}</td>
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
                {(val.buttonVal == "bullet") ?
                  <ul style={{ paddingLeft: '20px' }}>
                    <li key={index + val} style={{ paddingLeft: '10px', listStyleType: 'square' }}>
                      {val.description}
                    </li>
                  </ul>
                  : <>{val.description}<br /></>}
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



        <ReactMarkdown className="mt-2 text-sm" source={x.responsibility.description} />
      </div>
    )
  }



  const Work = () =>
    data.work &&
    data.work.enable && (
      <div>
        <Heading title={data.work.heading} />
        {data.work.items.filter(x => x.enable).map(WorkItem)}


      </div>
    );

  var max_pages = 2;
  var page_count = 1;

  function snipMe() {
    page_count++;
    if (page_count > max_pages) {
      return;
    }
    var long = $(this)[0].scrollHeight - Math.ceil($(this).innerHeight());
    var children = $(this).children().toArray();
    var removed = [];
    while (long > 0 && children.length > 0) {
      var child = children.pop();
      $(child).detach();
      removed.unshift(child);
      long = $(this)[0].scrollHeight - Math.ceil($(this).innerHeight());
    }
    if (removed.length > 0) {
      var a4 = $('<div class="A4"></div>');
      a4.append(removed);
      $(this).after(a4);
      snipMe.call(a4[0]);
    }
  }

  /* $(document).ready(function() {
    $('.A4').each(function() {
      snipMe.call(this);
    });
  }); */


  return (
    <>
      <page
        style={{
          fontFamily: theme.font.family,
          backgroundColor: theme.colors.background,
          color: theme.colors.primary,

        }}
        className="A4"

      >
        <div className="border1">
          <div className="border2" >
            <div className="border3">

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

                </div>
              </div>
            </div>
          </div>
        </div>
      </page>


      <page
        style={{
          fontFamily: theme.font.family,
          backgroundColor: theme.colors.background,
          color: theme.colors.primary,

        }}
        className="A4"

      >
        <div className="border1">
          <div className="border2" >
            <div className="border3">
              <div className=" grid-cols-12">

                <div className="mx-4">

                  <Education />
                  <Awards />
                  <Work />
                </div>
              </div>
            </div>
          </div>
        </div>
      </page>



    </>

  );
};

export default Onyx;
