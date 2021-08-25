import { useState, useRef } from 'react';
import useTriggerOnScroll from '../../content/meta/hooks/scrollTrigger';
import { Transition } from '@headlessui/react'
import { appear } from '../../content/meta/transitions'

export default function ScrollSlideUp(props) {
  // const { className = '', children } = props;

  let Component=props.Component;
  let transition= props.transition || appear;
  let perc=props.perc
  const el = useRef();
  const [show, setShow] = useState(false);


  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  }, perc);



  return (
    <div ref={el}>
      <Transition
        show={show}
        appear={true}
        enter={transition.enter}
        enterFrom={transition.enterFrom}
        enterTo={transition.enterTo}
        leave={transition.leave}
        leaveFrom={transition.leaveFrom}
        leaveTo={transition.leaveTo}
      >
        <Component {...props}/>
      </Transition>
    </div>
  );
}