// Avoid stack overflow in a recursive function that has an arraylist that is too large. Stack overflow can be avoided by letting the event loop handle recursive calls uing setTimeout. When nextItem is not null, the setTimeout function is pushed to the event queue and the function exits, this leaves the callstack clear.

function avoidOverflow(items: number[]) {
  const nextItem = () => {
    let item = items.pop();
    if (item) {
      setTimeout(nextItem, 0);
    }
  };
}
