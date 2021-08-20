const slideUp = {
  'enter':"transform transition ease-out duration-1000",
  'enterFrom':"opacity-0 translate-y-full",
  'enterTo':"opacity-100 translate-y-0",
  'leave':"transform transition ease-out duration-1000",
  'leaveFrom':"opacity-100 translate-y-0",
  'leaveTo':"opacity-0 translate-y-full",
  'perc':.80
}

const slideRight = {
  'enter':"transform transition ease-out duration-1000",
  'enterFrom':"opacity-0 translate-x-full",
  'enterTo':"opacity-100 translate-x-0",
  'leave':"transform transition ease-out duration-1000",
  'leaveFrom':"opacity-100 translate-x-0",
  'leaveTo':"opacity-0 translate-x-full",
  'perc':.80
}

let appear = {
  'enter':"transition-opacity duration-75",
  'enterFrom':"opacity-0",
  'enterTo':"opacity-100",
  'leave':"transition-opacity duration-150",
  'leaveFrom':"opacity-100",
  'leaveTo':"opacity-0"
}
export {
  slideUp,
  slideRight,
  appear,
};
