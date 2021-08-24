const slideUp = {
  'enter':"transform transition ease-out duration-1000",
  'enterFrom':"opacity-0 translate-y-full",
  'enterTo':"opacity-100 translate-y-0",
  'leave':"",
  'leaveFrom':"",
  'leaveTo':"",
  'perc':.80
}

const slideRight = {
  'enter':"transform transition ease-out duration-1000",
  'enterFrom':"opacity-0 translate-x-full",
  'enterTo':"opacity-100 translate-x-0",
  'leave':"",
  'leaveFrom':"",
  'leaveTo':"",
  'perc':.80
}

let appear = {
  'enter':"transition-opacity duration-75",
  'enterFrom':"opacity-0",
  'enterTo':"opacity-100",
  'leave':"",
  'leaveFrom':"",
  'leaveTo':""
}
export {
  slideUp,
  slideRight,
  appear,
};
