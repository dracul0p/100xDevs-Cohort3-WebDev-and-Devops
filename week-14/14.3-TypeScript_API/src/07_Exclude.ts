// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type Event = 'click' | 'scroll' | 'mousemove';

// just excludes scroll : ------------>
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// handleEvent('scroll'); //gives eeror
//  exclude

