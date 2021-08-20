import content from '../content/meta/about-me/about-me-content'
import ShowHide from '../molecules/atoms/show-hide'
import { slideUp, appear } from '../content/meta/transitions'
import ExperienceColumn from './atoms/experience-column';
import { useEffect } from 'react';

export default function Experience () {
  let skillList = content.skills;
  let gridCount = skillList.length;
  var render = {
    'class':'',
    perc:[]
  }

  switch(gridCount) {
    case 1:
      render.class = 'sm:hidden md:grid md:grid-cols-1';
      render.perc.push(.8)
      break;
    case 2:
      render.class = 'sm:hidden  md:grid md:grid-cols-2';
      render.perc.push(.8,.4)
      break;
    case 3:
        render.class = 'sm:hidden  md:grid md:grid-cols-3';
        render.perc.push(.9,.5,.3)
        break;
    default:
      render = {
        class:'',
        perc:[]
      }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <>
      <div  className={classNames(render.class, " hidden md:w-screen justify-between")}>
        {skillList.map((skillSection, index) => <ShowHide Component={ExperienceColumn} perc={render.perc[index]} transition={slideUp} skillName={skillSection.skillName} skillList={skillSection.skillList} key={skillSection.key}/>)}
      </div>
      <div  className={"md:hidden grid grid-cols-1 w-screen justify-between"}>
        {skillList.map((skillSection, index) => <ExperienceColumn skillName={skillSection.skillName} skillList={skillSection.skillList} key={skillSection.key}/>)}
      </div>
    </>
  )
}

